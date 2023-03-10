import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate, selectUser } from "../slices/userSlice";
import { toast } from "react-toastify";

const AuthForm = () => {
  const { error, status } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ email, password }));
  };

  useEffect(() => {
    status === "auth Rejected"
      ? toast.error(error, { onChange: navigate("/login") })
      : status === "auth Succeeded"
      ? toast.success("Welcome", { onChange: navigate("/home") })
      : null;
  }, [status]);

  return (
    <div>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <h3>Login to Account: </h3>

        <label htmlFor="email">Email</label>
        <input name="email" type="text" id="email" />

        <label htmlFor="password">Password</label>
        <input name="password" type="password" id="password" />

        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default AuthForm;
