function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Nguyen',
  lastName: 'Hau'
};

// create Component with functional
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

// create Component with class ES6
class Welcome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const welcome = (
  <Welcome name="Hau beo"/>
);

function App(props) {
  return (
    <div>
      <Welcome name="Sara"/>
      <Welcome name="Linh"/>
      <Welcome name="Hoa"/>
    </div>
  )
}

// ReactDOM.render(
//   <App/>,
//   document.getElementById('component')
// );


function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

// setInterval(ticks, 1000);
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
      posts: -1,
      comments: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    this.setState({
      posts: 0
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => ({
        date: new Date(),
        count: prevState.count + 1
      })
    );
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>Count: {this.state.count}</h3>
      </div>
    );
  }

}

ReactDOM.render(
  <Clock/>,
  document.getElementById('time')
);
