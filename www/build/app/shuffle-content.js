/*! Built with http://stenciljs.com */
const { h } = window.App;

class ShuffleContent {
    constructor() {
        this.workoutCategories = ["Strength", "Yoga", "Cardio", "Stretching"];
        this.companies = [];
    }
    componentDidLoad() {
        this.companies = [
            {
                name: "Sworkit",
                team: [
                    { name: "Ryan", image: "/" },
                    { name: "Ben", image: "/" },
                    { name: "Cory", image: "/" }
                ]
            },
            {
                name: "Ionic",
                team: [
                    { name: "Max", image: "/" },
                    { name: "Ben", image: "/" },
                    { name: "Adam", image: "/" }
                ]
            }
        ];
    }
    render() {
        return [
            h("header", null,
                h("h1", null, "Shuffling?")),
            h("slot-component", null,
                h("h2", null, "THIS CONTENT SHOULD SHOW FIRST"),
                this.workoutCategories.map(category => {
                    return (h("ion-col", { "col-6": true, "col-lg-3": true },
                        h("ion-anchor", { href: `profile/${category}` },
                            h("div", { class: `category ${category}` },
                                h("ion-ripple-effect", null),
                                h("h3", null, category)))));
                }),
                this.companies.length ? (h("div", null,
                    h("h2", null, "This content should show SECOND"),
                    this.companies.map(company => {
                        return (h("div", null,
                            h("h4", null, company.name),
                            h("ul", null, company.team.map((person) => {
                                return (h("li", null,
                                    h("ion-button", { fill: "clear", href: `/profile/${person.name}` },
                                        h("h6", null, person.name))));
                            }))));
                    }))) : null)
        ];
    }
    static get is() { return "shuffle-content"; }
    static get properties() { return {
        "companies": {
            "state": true
        }
    }; }
    static get style() { return "shuffle-content {\n\n}"; }
}

class SlotComponent {
    render() {
        return (h("div", null,
            h("slot", null)));
    }
    static get is() { return "slot-component"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        },
        "last": {
            "type": String,
            "attr": "last"
        }
    }; }
    static get style() { return "slot-component {\n  display: block; /* by default, custom elements are display: inline */\n}"; }
}

export { ShuffleContent, SlotComponent };
