import React, { useState } from "react";
import { Button, InputLabel, Input, FormControl } from "@mui/material";
import { useLoginUserMutation, useRegisterUserMutation } from "services/api";
import { css } from "@emotion/css";

export const Login = () => {
  const [loginUser, { isError: loginError }] = useLoginUserMutation();
  const [registerUser, { isError: registerError }] = useRegisterUserMutation();

  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleLogin = () => {
    loginUser(state);
  };

  const handleRegister = () => {
    registerUser(state);
  };

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        height: 100%;
        padding-top: 80px;
      `}
    >
      <form
        className={css`
          display: flex;
          flex-direction: column;
          padding: 80px;
          width: 500px;
        `}
      >
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            onChange={handleChange}
            aria-describedby="my-helper-text"
            className={css`
              margin-bottom: 60px;
            `}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            onChange={handleChange}
            aria-describedby="my-helper-text"
            className={css`
              margin-bottom: 60px;
            `}
          />
        </FormControl>
        <div
          className={css`
            display: flex;
          `}
        >
          <Button
            type="button"
            color="secondary"
            variant="contained"
            onClick={handleLogin}
            sx={{ maxWidth: "100px", marginRight: "18px" }}
          >
            Log in
          </Button>
          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={handleRegister}
            className={css`
              max-width: 100px;
            `}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};
