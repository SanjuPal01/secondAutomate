BEGIN;

CREATE OR REPLACE FUNCTION
  projects_match(_org_projects TEXT[], _projects_filter TEXT[])
  RETURNS BOOLEAN AS $$
    BEGIN
      RETURN (
        -- no projects filter requested (length 0)
        array_length(_projects_filter, 1) IS NULL
        -- projects filter intersects with projects for row
        OR _org_projects && _projects_filter
        -- projects for row is an empty array, check if (unassigned) in project filter
        OR (array_length(_org_projects, 1) IS NULL AND '{(unassigned)}' && _projects_filter)
      );
    END
$$ LANGUAGE PLPGSQL;

COMMIT;
