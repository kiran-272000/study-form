import React from "react";
import classes from "./UserItem.module.css";
const UserItem = ({ user }) => {
  return (
    <div className={classes.user}>
      <p>{`${user.username} (${user.age} years old)`}</p>
    </div>
  );
};

export default UserItem;
