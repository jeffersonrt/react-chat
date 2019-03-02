import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import io from 'socket.io-client';
import env from '../../env';

import Message from '../../components/Message/Message';
import ChatForm from '../../components/ChatForm/ChatForm';
import {
  addMessage,
  notificationAdd,
  notificationReset
} from '../../store/actions';

import './Chat.scss';

const socket = io(env.SOCKET_URL);

class Chat extends Component {
  constructor(props) {
    super(props);
    this.chatContainer = React.createRef();
  }

  componentDidMount() {
    const { notificationReset } = this.props;
    notificationReset();
    this.socket();
    this.scrollMessages();
  }

  socket() {
    socket.removeAllListeners();
    const { addMessage, notificationAdd } = this.props;

    socket.on('receivedMessage', message => {
      const { location } = this.props.history;

      addMessage({
        userId: message.userId,
        username: message.username,
        text: message.text
      });

      if (location.pathname === '/settings') {
        notificationAdd();
      }

      let to = setTimeout(() => {
        clearTimeout(to);
        this.scrollMessages();
      }, 100);
    });

    socket.on('previousMessages', messages => {
      messages.forEach(message => {
        addMessage(message);
      });
      this.scrollMessages();
    });
  }

  handleSubmit = text => {
    const { addMessage, settings } = this.props;

    let message = {
      userId: settings.userId,
      username: settings.username,
      text: text
    };

    addMessage(message);
    socket.emit('sendMessage', message);

    let to = setTimeout(() => {
      clearTimeout(to);
      this.scrollMessages();
    }, 100);
  };

  scrollMessages = () => {
    if (this.chatContainer.current) {
      this.chatContainer.current.scrollTop = this.chatContainer.current.scrollHeight;
    }
  };

  render() {
    const { messages, settings } = this.props;
    return (
      <Fragment>
        <section ref={this.chatContainer} className="chat-container">
          <div className="chat-history">
            {messages.map(message => {
              return (
                <Message
                  key={message.id}
                  username={
                    message.userId === settings.userId
                      ? 'current'
                      : message.username
                  }
                  date={message.date}
                  format={settings.timeFormat}
                  text={message.text}
                />
              );
            })}
          </div>
        </section>
        <ChatForm
          onMessageSumit={this.handleSubmit}
          controlEnter={settings.ctrlEnter === 'on'}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  settings: state.settings
});

export default connect(
  mapStateToProps,
  { addMessage, notificationAdd, notificationReset }
)(Chat);
