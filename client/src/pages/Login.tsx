import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        if (response.data.user) {
          alert("login successful");
        } else {
          alert("please enter valid credentials");
        }
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <form onSubmit={handleSubmit}>
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

export default Login;
