import { useState, useEffect } from "react";

export const UseForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

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
      <div className="mt-5">
        <h3>UseEffect con custm hook</h3>
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
        <input
          type="password"
          className="form-control mt-2"
          placeholder="password"
          name="password"
          value={password}
          onChange={onInput}
        />
      </div>
    </>
  );
};
