import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import Message from '../../components/Message/Message';
import InputMessage from '../../components/InputMessage/InputMessage';
import { addMessage } from '../../store/actions';
import env from '../../env';

import './Chat.scss';

const socket = io(env.SOCKET_URL);

class Chat extends Component {
  constructor(props) {
    super(props);
    this.msgContainer = React.createRef();
  }

  componentDidMount() {
    this.socket();
  }

  socket() {
    const { addMessage } = this.props;

    socket.on('receivedMessage', function(message) {
      addMessage({
        userId: message.userId,
        username: message.username,
        text: message.text
      });
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
    this.scrollMessages();
  };

  scrollMessages = () =>
    (this.msgContainer.current.scrollTop = this.msgContainer.current.scrollHeight);

  render() {
    const { messages, settings } = this.props;
    return (
      <section className="chat-container">
        <div ref={this.msgContainer} className="chat-history">
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
        <div className="chat-footer">
          <InputMessage
            onMessageSumit={this.handleSubmit}
            controlEnter={settings.ctrlEnter === 'on'}
          />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  settings: state.settings
});

export default connect(
  mapStateToProps,
  { addMessage }
)(Chat);
