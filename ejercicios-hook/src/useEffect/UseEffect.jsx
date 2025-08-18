import { useState, useEffect } from "react";
import { Message } from "./Message";

export const UseEffect = () => {
  const [formState, setFormState] = useState({
    username: "elbetuna",
    email: "elbetunas@elbetunas.com",
  });

  const { username, email } = formState;

  const onInput = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffect called");
  }, []);

  useEffect(() => {
    // console.log("FormState changed");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed");
  }, [email]);

  return (
    <>
      <h3>UseEffect</h3>
      <hr />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInput}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInput}
      />

      {username === "elbetunas" && <Message />}
    </>
  );
};
