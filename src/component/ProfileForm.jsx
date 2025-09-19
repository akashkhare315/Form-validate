import React, { useState } from "react";

function ProfileForm() {
  const [name, setName] = useState("akash");
  const [age, setAge] = useState(22);

  const nameHandler = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={nameHandler}
        value={name}
        placeholder="name..."
      />
      <input
        type="number"
        onChange={ageHandler}
        value={age}
        placeholder="age...."
      />

      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}

export default ProfileForm;
