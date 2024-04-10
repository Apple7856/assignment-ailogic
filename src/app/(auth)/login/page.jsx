"use client";
import { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    console.log(userInput);
  };
  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <h2 className={styles.heading}>Login</h2>
        <input
          type="text"
          placeholder="username"
          name="username"
          className={styles.input}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className={styles.input}
          onChange={handleChange}
        />
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
