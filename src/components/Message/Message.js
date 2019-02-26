import React from "react";
import PropTypes from "prop-types";
import styles from "./Message.module.scss";

const Message = ({ user, date, message }) => {
  const isMe = !!user;

  return (
    <div className={styles.messageWrapper}>
      <div className={styles.messageData}>
        {isMe && <span className={styles.messageUsername}>{user}</span>}
        <span className={styles.messageTime}>{date}</span>
      </div>
      <div className={styles.messageText}>{message}</div>
    </div>
  );
};

Message.propTypes = {
  user: PropTypes.string,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Message;
