import React from "react";
import UserItem from "./UserItem";
import classes from "./UserList.module.css";

const UserList = ({ userList }) => {
  return (
    <div className={classes.userContainer}>
      {userList.map((item) => (
        <UserItem user={item} key={item.id} />
      ))}
    </div>
  );
};

export default UserList;
