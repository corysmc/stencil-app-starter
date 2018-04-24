/*! Built with http://stenciljs.com */
const { h } = window.App;

class SlotComponent {
    render() {
        return (h("div", null,
            "Hello, my name is ",
            this.first,
            " ",
            this.last));
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

export { SlotComponent };
