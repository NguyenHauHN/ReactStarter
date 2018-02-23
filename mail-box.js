function Mailbox(props) {
  const unreadMessage = props.unreadMessage;
  return (
    <div>
      <h1>Hello!</h1>
      {
        unreadMessage.length > 0 &&
          <h2>You have {unreadMessage.length} unread messages.</h2>
      }
    </div>
  )
}

const messages = ["Hoa", "linh", "Hoang"];
ReactDOM.render(
  <Mailbox unreadMessage={messages}/>,
  document.getElementById('mail-box')
);