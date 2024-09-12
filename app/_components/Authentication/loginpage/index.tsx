import React from "react";
import LoginForm from "../loginform";
import LoginPageImageSection from "../loginpageimagesection";
import styles from "./index.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginPageImageSection />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
