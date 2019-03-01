import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from '../../utils';

import styles from './Message.module.scss';

const Message = ({ username, date, format, text }) => {
  const postion = username === 'current' ? 'right' : 'left';
  return (
    <div className={styles[`message-wrapper-${postion}`]}>
      <div className={styles['message-data']}>
        <span className={styles['message-username']}>{username}</span>
        <span className={styles['message-time']}>
          {formatDate(date, format)}
        </span>
      </div>
      <div className={styles['message-text-container']}>
        <span className={styles['message-text']}>{text}</span>
      </div>
    </div>
  );
};

Message.propTypes = {
  // username: PropTypes.string.isRequired,
  // date: PropTypes.object.isRequired,
  // format: PropTypes.string.isRequired,
  // text: PropTypes.string.isRequired
};

export default Message;
