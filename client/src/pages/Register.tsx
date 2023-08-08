import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      const response = await axios.post("http://localhost:8000/register", {
        username: username,
        email: email,
        password: password,
      });
      if (response.status === 200) console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />
      <input
        type="email"
        placeholder="email@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
