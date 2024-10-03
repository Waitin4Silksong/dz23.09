import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const submit = (event) => {
    if (nickname && email && password && photo && description && tags) {
      alert(
        `Nickname: ${nickname}\nEmail: ${email}\nPassword: ${password}\nPhoto: ${photo.name}\nPhoto Description: ${photoDescription}\nTags: ${tags}`
      );
    } else {
      alert("Please fill in all fields.");
    }
  };

  const change = (event) => {
    const { name, value, files } = event.target;
    if (name === "nickname") setNickname(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "photo") setPhoto(files[0]);
    if (name === "description") setdescription(value);
    if (name === "tags") setTags(value);
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
        <input
          type="password"
          name="password"
          required
          placeholder="Enter password"
          value={password}
          onChange={change}
        />
        <br />
        <input type="file" name="photo" required onChange={change} />
        <br />
        <textarea
          name="description"
          required
          placeholder="Enter description"
          value={description}
          onChange={change}
        />
        <br />
        <input
          type="text"
          name="tags"
          required
          placeholder="Enter tags"
          value={tags}
          onChange={change}
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
