'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

class ChefLogo {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        return (__chunk_1.h("img", { alt: company_name + ' logo', src: '/assets/logos/' + image }));
    }
    static get watchers() { return {
        "company": ["validateCompany"]
    }; }
    static get style() { return "chef-logo img{width:100%}"; }
}

exports.chef_logo = ChefLogo;
