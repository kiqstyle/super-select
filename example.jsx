var Application = React.createClass({
    displayName: "Application",

    getInitialState: function () {
        return {
            selecteds: [],
            options: [{
                id: 1,
                name: "Android"
            }, {
                id: 2,
                name: "iOS"
            }, {
                id: 3,
                name: "Windows Phone"
            }]
        };
    },

    render: function () {
        return (
            <div>
                <div className="demo">
                    <h3>Simple</h3>
                    <div className="component">
                        <SuperSelect
                            label="Filter by OS"
                            options={ this.state.options }
                            value={ this.state.selecteds }
                            onChange={ function (newSelecteds) {
                                this.setState({selecteds: newSelecteds});
                            }.bind(this) }
                        />
                    </div>
                    <div className="state">
                        State: { JSON.stringify(this.state.selecteds) }
                    </div>
                </div>
                <div className="demo">
                    <h3>With option render</h3>
                    <div className="component">
                        <SuperSelect
                            label="Filter by OS"
                            options={ this.state.options }
                            value={ this.state.selecteds }
                            optionRender={ function (config) {
                                return (
                                    <li onClick={ config.onChange.bind(null, config.option) }>
                                        Option: { config.option.name }
                                        | index: { config.index }
                                        | pseudoHover: { config.pseudoHover ? " sim" : " não" }
                                    </li>
                                );
                            } }
                            onChange={ function (newSelecteds) {
                                this.setState({selecteds: newSelecteds});
                            }.bind(this) }
                        />
                    </div>
                    <div className="state">
                        State: { JSON.stringify(this.state.selecteds) }
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Application />,
    document.querySelector(".react-root")
);
