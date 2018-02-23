class Reservation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuest: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState ({
      [name]: value
    });
  }

  handleSubmit(event){
    alert("Submitted with isGoing: " + this.state.isGoing + " and number of guest: " + this.state.numberOfGuest);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
        </label>
        <label>
          Number of guest:
          <input type="number" name="numberOfGuest" value={this.state.numberOfGuest} onChange={this.handleInputChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation/>,
  document.getElementById("reservation")
);