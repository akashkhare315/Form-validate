import React, { useState } from "react";
import Form from "./component/form";
import UserData from "./component/UserData";

function App() {
  const [user, setUser] = useState([
    { name: "Amit Sharma", age: 25 },
    { name: "Neha Verma", age: 22 },
    { name: "Rohit Mehta", age: 28 },
    { name: "Priya Singh", age: 24 },
    { name: "Karan Patel", age: 30 },
    { name: "Simran Kaur", age: 21 },
    { name: "Arjun Reddy", age: 27 },
    { name: "Meera Joshi", age: 23 },
  ]);

  return (
    <div>
      <Form />
      <UserData user={user} setUser={setUser} />
    </div>
  );
}

export default App;
