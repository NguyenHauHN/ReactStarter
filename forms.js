class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event){
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}

class FlavorForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event){
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">grapefruit</option>
            <option value="lime">lime</option>
            <option value="coconut">coconut</option>
            <option value="mango">mango</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

ReactDOM.render(
  <NameForm/>,
  document.getElementById("name-form")
);

ReactDOM.render(
  <FlavorForm/>,
  document.getElementById('flavor-form')
);