function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    )
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignup(){
        alert("Signup successfully with " + this.state.login);
    }

    render() {
        const {login} = this.state;
        return (
            <Dialog title="Dialog Signup" message="React demo dialog signup">
                <input value={login}
                       onChange={this.handleChange}
                />
                <button type="button" onClick={this.handleSignup}>Sign up</button>

            </Dialog>
        )
    }
}

ReactDOM.render(<SignUpDialog/>, document.getElementById("composition"));