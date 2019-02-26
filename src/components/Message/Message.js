import React from "react";
import PropTypes from "prop-types";
import styles from "./Message.module.scss";

const Message = ({ user = "current", date, message }) => {
  const postion = user === "current" ? "right" : "left";
  return (
    <div className={styles[`message-wrapper-${postion}`]}>
      <div className={styles["message-data"]}>
        <span className={styles["message-username"]}>{user}</span>
        <span className={styles["message-time"]}>{date}</span>
      </div>
      <div className={styles["message-text-container"]}>
        <span className={styles["message-text"]}>{message}</span>
      </div>
    </div>
  );
};

Message.propTypes = {
  user: PropTypes.string,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Message;
