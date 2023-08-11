import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Registerd");
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
