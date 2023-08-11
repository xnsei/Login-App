import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Logged in");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
