/**
 * @description
 * Description
 *
 * @example
 * <chef-alert type='success'>It's a success!</chef-alert>
 *
 * @description
 * Description
 *
 * @example
 * <chef-alert type='error'>Oh, no!</chef-alert>
 */
export declare class ChefAlert {
    /**
     * The alert type (either 'success' or 'error')
     */
    type: string;
    render(): any;
    private alertIcon;
}
