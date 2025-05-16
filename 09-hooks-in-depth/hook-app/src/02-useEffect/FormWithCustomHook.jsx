// import { useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { username, email, password, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;

  // useEffect(() => {
  //   console.log("useEffect called!");
  // }, []); // To render just one time

  // useEffect(() => {
  //   console.log("formState changed!");
  // }, [formState]);

  // useEffect(() => {
  //   console.log("email changed!");
  // }, [email]);

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="julio@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Reset Form
      </button>

      {username === "strider2" && <Message />}
    </>
  );
};
