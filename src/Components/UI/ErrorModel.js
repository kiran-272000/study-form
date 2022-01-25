import React from "react";

import classes from "./ErrorModel.module.css";
const ErrorModel = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.footer}>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModel;
