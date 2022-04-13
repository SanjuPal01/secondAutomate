import { h } from "@stencil/core";
export class ChefLogo {
    constructor() {
        this.company = 'Unknown';
        this.companyData = new Map([
            ['Chef Software', 'chef-software.svg'],
            ['Slack', 'slack.svg'],
            ['Unknown', 'Unknown.svg'],
        ]);
    }
    validateCompany(newValue, _oldValue) {
        const company_entry = this.companyData.get(newValue);
        if (!company_entry) {
            throw new Error('The supplied name "' + newValue + '" is invalid!');
        }
    }
    render() {
        let image;
        let company_name;
        if (this.companyData.has(this.company)) {
            company_name = this.company;
            image = this.companyData.get(this.company);
        }
        else {
            company_name = 'Unknown';
            image = this.companyData.get('Unknown');
        }
        return (h("img", { alt: company_name + ' logo', src: '/assets/logos/' + image }));
    }
    static get is() { return "chef-logo"; }
    static get originalStyleUrls() { return {
        "$": ["chef-logo.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-logo.css"]
    }; }
    static get properties() { return {
        "company": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "company",
            "reflect": false,
            "defaultValue": "'Unknown'"
        }
    }; }
    static get watchers() { return [{
            "propName": "company",
            "methodName": "validateCompany"
        }]; }
}
