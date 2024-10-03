import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (nickname && email && gender && age) {
      alert(
        `Nickname: ${nickname}\nEmail: ${email}\nGender: ${gender}\nAge: ${age}`
      );
    } else {
      alert("Please fill in all fields.");
    }
  };

  const change = (event) => {
    const { name, value } = event.target;
    if (name === "nickname") setNickname(value);
    if (name === "email") setEmail(value);
    if (name === "gender") setGender(value);
    if (name === "age") setAge(value);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          name="nickname"
          required
          placeholder="Enter nickname"
          value={nickname}
          onChange={change}
        />
        <br />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter email"
          value={email}
          onChange={change}
        />
        <br />
        <select name="gender" required value={gender} onChange={change}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <input
          type="number"
          name="age"
          required
          placeholder="Enter age"
          value={age}
          onChange={change}
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
