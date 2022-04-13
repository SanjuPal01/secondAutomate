import { r as registerInstance, h } from './chunk-efdec40a.js';
var ChefLogo = /** @class */ (function () {
    function ChefLogo(hostRef) {
        registerInstance(this, hostRef);
        this.company = 'Unknown';
        this.companyData = new Map([
            ['Chef Software', 'chef-software.svg'],
            ['Slack', 'slack.svg'],
            ['Unknown', 'Unknown.svg'],
        ]);
    }
    ChefLogo.prototype.validateCompany = function (newValue, _oldValue) {
        var company_entry = this.companyData.get(newValue);
        if (!company_entry) {
            throw new Error('The supplied name "' + newValue + '" is invalid!');
        }
    };
    ChefLogo.prototype.render = function () {
        var image;
        var company_name;
        if (this.companyData.has(this.company)) {
            company_name = this.company;
            image = this.companyData.get(this.company);
        }
        else {
            company_name = 'Unknown';
            image = this.companyData.get('Unknown');
        }
        return (h("img", { alt: company_name + ' logo', src: '/assets/logos/' + image }));
    };
    Object.defineProperty(ChefLogo, "watchers", {
        get: function () {
            return {
                "company": ["validateCompany"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefLogo, "style", {
        get: function () { return "chef-logo img{width:100%}"; },
        enumerable: true,
        configurable: true
    });
    return ChefLogo;
}());
export { ChefLogo as chef_logo };
