import React, { useState } from "react";
import Input from "../Components/Input";
import { SignupHandler } from "../Redux/authAction";
import { useDispatch } from "react-redux";

const SignUpPage = (props) => {
  const [form, setForm] = useState({
    username: null,
    displayName: null,
    password: null,
    repeatedPassword: null,
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setErrors((perviousErrors) => {
      return {
        ...perviousErrors,
        [name]: undefined,
      };
    });
    setForm((previousForm) => {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  };

  const onClickSignUp = async (e) => {
    e.preventDefault();
    const { username, displayName, password } = form;
    const { history } = props;
    const { push } = history;
    const body = {
      username,
      displayName,
      password,
    };

    try {
      await dispatch(SignupHandler(body));
      push("/");
    } catch (error) {
      if (error.response.data.validationErrors) {
        setErrors(error.response.data.validationErrors);
      }
    }
  };
  const { username, displayName, password } = errors;
  let passwordRepeat;
  if (form.password !== form.repeatedPassword) {
    passwordRepeat = "Password mismatch";
  }
  return (
    <div className="container">
      <form>
        <h1 className="text-center">{"Sign Up"}</h1>
        <Input
          name="username"
          label={"Username"}
          type="text"
          onChange={onChangeInput}
          error={username}
        />
        <Input
          name="displayName"
          label={"Display Name"}
          type="text"
          onChange={onChangeInput}
          error={displayName}
        />
        <Input
          name="password"
          label={"Password"}
          type="password"
          onChange={onChangeInput}
          error={password}
        />
        <Input
          name="repeatedPassword"
          label={"Password Repeat"}
          type="password"
          onChange={onChangeInput}
          error={passwordRepeat}
        />

        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={onClickSignUp}
            disabled={passwordRepeat}>{"Sign Up"}</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
