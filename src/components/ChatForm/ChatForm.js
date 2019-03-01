import React, { Component } from 'react';
import './ChatForm.scss';

export default class InputMessage extends Component {
  state = {
    inputMessage: ''
  };

  onFormSubmit = event => {
    event.preventDefault();

    if (!!this.state.inputMessage.length) {
      const { onMessageSumit } = this.props;

      onMessageSumit(this.state.inputMessage);
      this.setState({ inputMessage: '' });
    }
  };

  handleKeyPress = event => {
    const { controlEnter } = this.props;

    if (
      (event.ctrlKey || event.metaKey) &&
      event.keyCode === 13 &&
      controlEnter
    ) {
      this.onFormSubmit(event);
    }
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  render() {
    return (
      <div className="chat-footer">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            onKeyDown={this.handleKeyPress}
            onChange={e => this.setState({ inputMessage: e.target.value })}
            value={this.state.inputMessage}
          />
          <button type="submit">
            <i className="fas fa-paper-plane" />
          </button>
        </form>
      </div>
    );
  }
}
