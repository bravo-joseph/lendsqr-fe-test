
import React from "react";
import styles from "./index.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <section>
        <p>Welcome!</p>
        <span>Enter details to login</span>
      </section>
      <form>
        <section>
          <div>
            <input placeholder="Email" />
          </div>
          <div>
            <input placeholder="Password" type="password"/>
            <span>show</span>
          </div>
        </section>
        <section className="submit-section">
          <p>Forgot Password?</p>
          <button className="bg-purple-500">Log In</button>
        </section>
      </form>
    </div>
  );
};

export default LoginForm;
