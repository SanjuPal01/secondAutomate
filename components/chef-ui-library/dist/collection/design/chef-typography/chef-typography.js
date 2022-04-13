import { h } from "@stencil/core";
export class ChefTypography {
    render() {
        return (h("div", null,
            h("h2", null, "Typography Guidelines"),
            h("p", null, "A typographic scale is used to achieve consistency by minimizing the number of font styles applied throughout Chef's products."),
            h("h3", null, "Guidelines"),
            h("h4", null, "Which font size should I use?"),
            h("p", null, "Page titles (H2) use the 24pt font size. Subtitles and any other headings below the main page title should use decreasing sizes of 18pt (H3) or 14pt (H4). The 36pt (H1) title size should only be used in areas with ample amounts of whitespace, such as empty page states."),
            h("p", null, "Avoid skipping intermediate font sizes whenever possible, in other words, a page should not have only 24pt and 14pt headings. In cases where lower level headings are needed (H5-H6), you can use alternate weights, colors, or all caps for the title font without going below the minimum 14pt font size."),
            h("p", null, "To maintain readability, paragraph text should generally not be smaller than 14pt. In cases where smaller text is necessary, such as form labels and tips, 12pt can be used. Font sizes should never be smaller than 12pt."),
            h("h3", null, "When should I make text bold or italic?"),
            h("p", null, "Aside from headings, heavier font weights should be used sparingly for greatest impact and are most effective in sections containing a lot of text elements. Similarly, italicized fonts should be employed where CHEF terminology is used or when there is a sense of urgency or warning in the message."),
            h("h3", null, "Type Scale"),
            h("div", { class: "chef-flex-wrapper" },
                h("h4", null, "Headings"),
                h("div", { class: "chef-flex-row" },
                    h("div", { class: "chef-col-8 chef-card-item" },
                        h("div", { class: "chef-card-info" },
                            h("h1", null, "All your node are belong to us."),
                            h("h4", null, "h1"))),
                    h("div", { class: "chef-col-4 chef-card-item chef-lightest-grey" },
                        h("div", { class: "chef-card-info" },
                            h("ul", null,
                                h("li", null, "font-size: 36px;"),
                                h("li", null, "font-weight: 400;"),
                                h("li", null, "line-height: 1.25em;"),
                                h("li", null, "letter-spacing: normal;")))),
                    h("div", { class: "chef-col-8 chef-card-item" },
                        h("div", { class: "chef-card-info" },
                            h("h2", null, "All your node are belong to us."),
                            h("h4", null, "h2"))),
                    h("div", { class: "chef-col-4 chef-card-item chef-lightest-grey" },
                        h("div", { class: "chef-card-info" },
                            h("ul", null,
                                h("li", null, "font-size: 24px;"),
                                h("li", null, "font-weight: 400;"),
                                h("li", null, "line-height: 1.25em;"),
                                h("li", null, "letter-spacing: normal;")))),
                    h("div", { class: "chef-col-8 chef-card-item" },
                        h("div", { class: "chef-card-info" },
                            h("h3", null, "All your node are belong to us."),
                            h("h4", null, "h3"))),
                    h("div", { class: "chef-col-4 chef-card-item chef-lightest-grey" },
                        h("div", { class: "chef-card-info" },
                            h("ul", null,
                                h("li", null, "font-size: 18px;"),
                                h("li", null, "font-weight: 400;"),
                                h("li", null, "line-height: 1.25em;"),
                                h("li", null, "letter-spacing: normal;")))),
                    h("div", { class: "chef-col-8 chef-card-item" },
                        h("div", { class: "chef-card-info" },
                            h("h4", null, "All your node are belong to us."),
                            h("h4", null, "h4"))),
                    h("div", { class: "chef-col-4 chef-card-item chef-lightest-grey" },
                        h("div", { class: "chef-card-info" },
                            h("ul", null,
                                h("li", null, "font-size: 14px;"),
                                h("li", null, "font-weight: 400;"),
                                h("li", null, "line-height: 1.25em;"),
                                h("li", null, "letter-spacing: normal;"))))),
                h("h4", null, "Body"),
                h("div", { class: "chef-flex-row" },
                    h("div", { class: "chef-col-8 chef-card-item" },
                        h("div", { class: "chef-card-info" },
                            h("p", { class: "chef-font-lg" }, "All your node are belong to us."),
                            h("h4", null, "body (base)"))),
                    h("div", { class: "chef-col-4 chef-card-item chef-lightest-grey" },
                        h("div", { class: "chef-card-info" },
                            h("ul", null,
                                h("li", null, "font-size: 16px;"),
                                h("li", null, "font-weight: 300;"),
                                h("li", null, "line-height: 1.25em;"),
                                h("li", null, "letter-spacing: normal;")))),
                    h("div", { class: "chef-col-8 chef-card-item" },
                        h("div", { class: "chef-card-info" },
                            h("p", null, "All your node are belong to us."),
                            h("h4", null, "body (default)"))),
                    h("div", { class: "chef-col-4 chef-card-item chef-lightest-grey" },
                        h("div", { class: "chef-card-info" },
                            h("ul", null,
                                h("li", null, "font-size: 14px;"),
                                h("li", null, "font-weight: 300;"),
                                h("li", null, "line-height: 1.25em;"),
                                h("li", null, "letter-spacing: normal;")))),
                    h("div", { class: "chef-col-8 chef-card-item" },
                        h("div", { class: "chef-card-info" },
                            h("p", { class: "chef-font-sm" }, "All your node are belong to us."),
                            h("h4", null, "body (small)"))),
                    h("div", { class: "chef-col-4 chef-card-item chef-lightest-grey" },
                        h("div", { class: "chef-card-info" },
                            h("ul", null,
                                h("li", null, "font-size: 12px;"),
                                h("li", null, "font-weight: 300;"),
                                h("li", null, "line-height: 1.25em;"),
                                h("li", null, "letter-spacing: normal;"))))))));
    }
    static get is() { return "chef-typography"; }
    static get originalStyleUrls() { return {
        "$": ["chef-typography.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-typography.css"]
    }; }
}