var React = require("react");

var Option = React.createClass({
    displayName: "SuperSelect.Option",

    getDefaultProps: function () {
        "use strict";

        return {
            hover: false,
            checked: false,
            onChange: null,
            labelKey: "name",
            item: {}
        };
    },

    handleChange: function () {
        "use strict";

        this.props.onChange(this.props.item);
    },

    render: function () {
        "use strict";

        var className = "super-select-options-list-item";
        if (this.props.hover) {
            className += " hover";
        }

        return (
            <li className={ className }>
                <label>
                    <input
                        type="checkbox"
                        checked={ this.props.checked }
                        onChange={ this.handleChange }
                    />
                    { this.props.item[this.props.labelKey] }
                </label>
            </li>
        );
    }
});

module.exports = Option;
