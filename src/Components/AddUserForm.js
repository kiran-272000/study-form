import React, { useState } from "react";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import classes from "./AddUserForm.module.css";
import ErrorModel from "./UI/ErrorModel";

const AddUserForm = ({ user }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, seterror] = useState();

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      seterror({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      seterror({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
    }

    const enteredData = {
      username: enteredUsername,
      age: enteredAge,
    };
    user(enteredData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    seterror(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div>
        <form onSubmit={submitHandler} className={classes.formContainer}>
          <div>
            <div className={classes.formElement}>
              <label>Username</label>
              <input
                type="text"
                value={enteredUsername}
                onChange={usernameHandler}
              />
            </div>
            <div className={classes.formElement}>
              <label>Age(Years)</label>
              <input type="number" value={enteredAge} onChange={ageHandler} />
            </div>
            <button type="submit">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
