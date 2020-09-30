import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value.toLowerCase());
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form>
      <div class="field">
        <label class="label" for="email">
          Your Email Address
        </label>
        <p class="control">
          <input
            class="input"
            id="email"
            type="email"
            value={email}
            placeholder="jayantmalik@gmail.com"
            onChange={updateEmail}
          />
        </p>
      </div>
      <div class="field">
        <label class="label" for="password">
          Your Password
        </label>
        <p class="control">
          <input
            class="input"
            id="password"
            value={password}
            type="password"
            onChange={updatePassword}
            placeholder="A secure password"
          />
        </p>
      </div>

      <button type="submit" class="button is-success is-fullwidth">
        Proceed to Login
      </button>
    </form>
  );
};

export default LoginForm;
