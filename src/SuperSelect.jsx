var React = require("react");
var ReactDOM = require("react-dom");
var Fuse = require("fuse.js");

var SuperSelect = React.createClass({
    displayName: "SuperSelect",

    getDefaultProps: function () {
        "use strict";

        return {
            label: "",
            selecteds: [],
            multiple: true,
            valueLink: false,
            options: [],
            groups: []
        };
    },

    getInitialState: function () {
        "use strict";

        return {
            open: false,
            pseudoHover: null,
            q: ""
        };
    },

    getOptions: function () {
        "use strict";

        var options = this.props.options || [];
        var q = this.state.q;
        var fuse = new Fuse(options, {
            keys: ["name"],
            threshold: 0.4
        });

        if (!q.length) {
            return options;
        }

        return fuse.search(q);
    },

    getValue: function () {
        "use strict";

        return this.props.valueLink.value || [];
    },

    buildbutton: function () {
        "use strict";

        var className = "super-select-button" + (this.state.open ? " open" : "");
        var text = [];
        text.push(
            <span className="super-select-button-label">
                { this.props.label }
            </span>
        );
        if (this.getValue().length) {
            text.push(": ");

            if (this.getValue().length === this.getOptions().length) {
                text.push(
                    <span className="super-select-button-label-value">
                        todos
                    </span>
                );
            } else {
                this.getValue().map(function (item) {
                    text.push(
                        <span className="super-select-button-label-value">
                            { item.name }
                        </span>
                    );
                });
            }

        }

        return (
            <label className={ "super-select-button " + (this.state.open ? "open" : "") }
                onClick={ this.open }
            >
                { text }
            </label>
        );
    },

    componentDidUpdate: function () {
        "use strict";

        if (this.state.open) {
            this.refs.q.focus();
        }
    },

    open: function () {
        "use strict";

        this.setState({open: !this.state.open});
    },

    isChecked: function (item, returnIndex) {
        "use strict";

        var index = false;
        var found = this.getValue().filter(function (option, i) {
            if (item.id === option.id) {
                index = i;
                return true;
            }
        }).length > 0;

        return returnIndex ? index : found;
    },

    handleChange: function (item) {
        "use strict";

        var value = this.getValue();
        var current = this.isChecked(item, true);
        if (current !== false) {
            value.splice(current, 1);
        } else {
            value.push(item);
        }

        this.props.valueLink.requestChange(value);
    },

    clean: function () {
        "use strict";

        this.props.valueLink.requestChange([]);
    },

    selectAll: function () {
        "use strict";

        this.props.valueLink.requestChange(this.getOptions());
    },

    handleChangeQ: function (event) {
        "use strict";

        this.setState({
            q: event.target.value,
            pseudoHover: null
        });
    },

    handleNavigationKeys: function (e) {
        "use strict";

        var currentPosition = this.state.pseudoHover;
        var isEnter = e.key === "Enter";

        if (isEnter && !isNaN(currentPosition)) {
            this.handleChange(this.getOptions()[currentPosition]);
        }

        switch (e.key) {
            case "ArrowUp":
                currentPosition = !currentPosition ? 0 : currentPosition - 1;
                break;
            case "ArrowDown":
                currentPosition = currentPosition + 1 === this.getOptions().length ? currentPosition : currentPosition + 1;
                break;
        }

        this.setState({
            pseudoHover: currentPosition
        });
    },

    buildOptions: function () {
        "use strict";

        var self = this;
        if (this.state.open) {
            return (
                <div className="super-select-options-container"
                    onKeyUp={ this.handleNavigationKeys }
                >
                    <div className="super-select-options-search-container">
                        <input
                            type="search"
                            value={ this.state.q }
                            onChange={ this.handleChangeQ }
                            placeholder="Digite para filtrar opção..."
                            ref="q"
                        />
                    </div>
                    <div className="super-select-actions">
                        <span className="super-select-action" onClick={ this.selectAll }>Selecionar todos</span>
                        <span className="super-select-action" onClick={ this.clean }>Limpar seleção</span>
                    </div>
                    <ul className="super-select-options-list">
                        { function () {
                            var options = self.getOptions();
                            if (!options.length) {
                                return (
                                    <li className="super-select-options-list-item not-found">
                                        Nada encontrado :/
                                    </li>
                                );
                            }

                            return options.map(function (item, index) {
                                var className = "super-select-options-list-item";
                                if (index === self.state.pseudoHover) {
                                    className += " hover";
                                }
                                return (
                                    <li key={ index } className={ className }>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={ self.isChecked(item) }
                                                onChange={ self.handleChange.bind(null, item) }
                                            />
                                            { item.name }
                                        </label>
                                    </li>
                                );
                            });
                        }() }
                    </ul>
                </div>
            );
        }
    },

    render: function () {
        "use strict";

        return (
            <div className="super-select-container">
                { this.buildbutton() }
                { this.buildOptions() }
            </div>
        );
    }
});

module.exports = SuperSelect;
