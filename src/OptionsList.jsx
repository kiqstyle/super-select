var React = require("react");

var Option = require("./Option.jsx");

var OptionsList = React.createClass({
    displayName: "SuperSelect.OptionsList",

    getDefaultProps: function () {
        "use strict";

        return {
            options: [],
            isChecked: null,
            handleChange: null,
            currentHover: false,
            labelKey: "name"
        };
    },

    renderOptions: function () {
        "use strict";

        var self = this;
        var options = this.props.options;
        if (!options.length) {
            return (
                <li className="super-select-options-list-item not-found">
                    Nada encontrado :/
                </li>
            );
        }

        return options.map(function (item, index) {
            var className = "super-select-options-list-item";
            if (index === self.props.currentHover) {
                className += " hover";
            }

            return (
                <Option
                    key={ index }
                    hover={ index === self.props.currentHover }
                    checked={ self.props.isChecked(item) }
                    onChange={ self.props.handleChange }
                    labelKey={ self.props.labelKey }
                    item={ item }
                />
            );
        });
    },

    render: function () {
        "use strict";

        return (
            <div className="super-select-options-container">
                <ul className="super-select-options-list">
                    { this.renderOptions() }
                </ul>
            </div>
        );
    }
});

module.exports = OptionsList;
