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
                <div>
                    <SuperSelect
                        label="Filter by OS"
                        contentLabelProvider={ function () {
                            console.log("jongh")
                            return "xxxx" ;
                        } }
                        options={ this.state.options }
                        value={ this.state.selecteds }
                        onChange={ function (newSelecteds) {
                            this.setState({selecteds: newSelecteds});
                        }.bind(this) }
                    />
                </div>
                <div>
                    State: { JSON.stringify(this.state.selecteds) }
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Application />,
    document.querySelector(".react-root")
);
