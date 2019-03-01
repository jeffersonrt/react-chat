import React from 'react';

import { formatDate } from '../../utils';

import './Message.scss';

const Message = ({ username, date, format, text }) => {
  const postion = username === 'current' ? 'right' : 'left';
  return (
    <div className={`message-wrapper-${postion}`}>
      <div className="message-data">
        <span className="message-username">{username}</span>
        <span className="message-time">{formatDate(date, format)}</span>
      </div>
      <div className="message-text-container">
        <span className="message-text">{text}</span>
      </div>
    </div>
  );
};

export default Message;
