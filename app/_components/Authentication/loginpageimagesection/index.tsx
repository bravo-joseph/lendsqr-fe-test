/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./index.module.scss";

const LoginPageImageSection = () => {
  return (
    <div      
      className={styles.container}
    >
      <img
        src="/images/png/lendsqr-logo.png"
        alt=""
        className="object-cover shadow-sm"
      />
      <img
        src="/images/png/lendsqr-login-hero.png"
        alt=""
        className="object-cover "
      />     
    </div>
  );
};

export default LoginPageImageSection;
