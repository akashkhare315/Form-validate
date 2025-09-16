import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const emailHnadler = (e) => {
    setEmail(e.target.value);
  };

  const ChangeHandler = (e) => {
    setName(e.target.value);
  };

  const reloadhandler = (e) => {
    e.preventDefault();
    const newuser = { name, email };
    console.log(newuser);
  };
  return (
    <div className="main">
      <form className="form" onSubmit={reloadhandler}>
        <input
          type="text"
          onChange={ChangeHandler}
          value={name}
          placeholder="enter your name"
        />
        <input
          type="email"
          onChange={emailHnadler}
          value={email}
          placeholder="type your email"
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
