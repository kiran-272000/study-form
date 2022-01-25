import { useState } from "react";

import AddUserForm from "./Components/AddUserForm";
import UserList from "./Components/UserList";
const Data = [
  // {
  //   id: 1,
  //   username: "kiran",
  //   age: "21",
  // },
  // {
  //   id: 2,
  //   username: "sandy",
  //   age: "21",
  // },
  // {
  //   id: 3,
  //   username: "ravi",
  //   age: "38",
  // },
];

function App() {
  const [userData, setUserData] = useState(Data);
  const newUser = (data) => {
    const newData = {
      ...data,
      id: Math.random().toString(),
    };
    setUserData((prevState) => {
      return [newData, ...prevState];
    });
  };
  console.log(userData);
  return (
    <div className="App">
      <AddUserForm user={newUser} />
      <UserList userList={userData} />
    </div>
  );
}

export default App;
