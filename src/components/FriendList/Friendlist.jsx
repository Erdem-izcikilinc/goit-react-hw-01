// src/components/FriendList/FriendList.jsx
import React from "react";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <div className={styles.item}>
            <img src={avatar} alt={name} width="48" className={styles.avatar} />
            <p className={styles.name}>{name}</p>
            <p className={isOnline ? styles.online : styles.offline}>
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
