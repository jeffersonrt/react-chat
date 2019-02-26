import React, { Component } from "react";

import Message from "../../components/Message/Message";

import "./Chat.scss";

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
        user: "current",
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
        user: "current",
        date: "10:14 AM, Today",
        text: "I,m wainting for you"
      },
      {
        id: 5,
        user: "current",
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
      },
      {
        id: 22,
        user: "current",
        date: "10:12 AM, Today",
        text: "Yes"
      },
      {
        id: 32,
        user: "Vincent",
        date: "10:13 AM, Today",
        text: "Ok, I will take with me"
      },
      {
        id: 31,
        user: "Vincent",
        date: "10:12 AM, Today",
        text:
          "Are we meeting today? Project has been already finished and I have results to show you."
      },
      {
        id: 452,
        user: "current",
        date: "10:12 AM, Today",
        text: "Yes"
      },
      {
        id: 53,
        user: "Vincent",
        date: "10:13 AM, Today",
        text: "Ok, I will take with me"
      }
    ]
  };

  render() {
    const { messages } = this.state;

    return (
      <section className="chat-container">
        <div className="chat-history">
          {messages.map(message => (
            <Message
              key={message.id}
              user={message.user}
              date={message.date}
              message={message.text}
            />
          ))}
        </div>
        <div className="chat-footer">
          <input type="text" />
          <button>Send</button>
        </div>
      </section>
    );
  }
}

export default Chat;
