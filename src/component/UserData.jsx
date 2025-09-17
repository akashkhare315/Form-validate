import React from "react";
import "./UserData.css";

function UserData({ user }) {
  const renderData = user.map((items, index) => (
    <li key={index}>{items.name}</li>
  ));

  return (
    <div className="userdata">
      <h1>User List</h1>
      <ul>{renderData}</ul>
    </div>
  );
}

export default UserData;
