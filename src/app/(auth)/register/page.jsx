"use client";
import { useState } from "react";
import styles from "./register.module.css";
import { RegisterUser } from "@/lib/auth";
import Link from "next/link";

const Register = () => {
  const [userInput, setUserInput] = useState({});
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    console.log("start");
    const update = await RegisterUser(userInput);
    console.log(update);
  };
  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <h2 className={styles.heading}>Create New User</h2>
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
          Register
        </button>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
