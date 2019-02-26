import React, { Component } from "react";

import Message from "../../components/Message/Message";

class Chat extends Component {
  state = {
    messages: [
      {
        id: 1,
        user: "Vincent",
        date: "10:12 AM, Today",
        text:
          "Are we meeting today? Project has been already finished and I have results to show you."
      },
      {
        id: 2,
        user: "",
        date: "10:12 AM, Today",
        text: "Yes"
      },
      {
        id: 3,
        user: "Vincent",
        date: "10:13 AM, Today",
        text: "Ok, I will take with me"
      },
      {
        id: 4,
        user: "",
        date: "10:14 AM, Today",
        text: "I,m wainting for you"
      },
      {
        id: 5,
        user: "",
        date: "10:14 AM, Today",
        text: "at 3pm"
      },
      {
        id: 6,
        user: "Vincent",
        date: "10:15 AM, Today",
        text: "ok"
      },
      {
        id: 7,
        user: "Vincent",
        date: "10:15 AM, Today",
        text: "See you"
      }
    ]
  };

  render() {
    const { messages } = this.state;

    return (
      <section>
        <div className="message-history">
          {messages.map(message => (
            <Message
              key={message.id}
              user={message.user}
              date={message.date}
              message={message.text}
            />
          ))}
        </div>
        <div>
          <input type="text" />
          <button>Send</button>
        </div>
      </section>
    );
  }
}

export default Chat;
