class VisibiltiyToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
        Visibiltiy: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                Visibiltiy: !prevState.Visibiltiy
            };
        });
    }
    render() {
       return (
            <div>
            <h1>Visibiltiy Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
             {this.state.Visibiltiy ? 'Hide details' : 'Show details'}
            </button>
            {this.state.Visibiltiy && (
                <div>
                <p>Hey. These are some Details can you see them?</p>
                </div>
            )}
            </div>
            );
    }
}

ReactDOM.render(<VisibiltiyToggle /> , document.getElementById('app'))

