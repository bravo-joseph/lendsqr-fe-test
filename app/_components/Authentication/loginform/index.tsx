"use client";
import React, { useReducer } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

const initialState = {
  isHidden: false,
};

function reducer(
  state: { isHidden: boolean },
  action: { type: string; payload?: string }
) {
  switch (action.type) {
    case "password/toogle":
      return { ...state, isHidden: !state.isHidden };
    default:
      return state;
  }
}
const LoginForm = () => {
  const [{ isHidden }, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <section>
        <p>Welcome!</p>
        <span>Enter details to login</span>
      </section>
      <form method="post">
        <section>
          <div>
            <input placeholder="Email" />
          </div>
          <div>
            <input
              placeholder="Password"
              type={`${isHidden ? "password" : "text"}`}
            />
            <span
              onClick={() => {
                dispatch({ type: "password/toogle" });
              }}
            >
              {isHidden ? "show" : "hide"}
            </span>
          </div>
        </section>
        <section className="submit-section">
          <p>Forgot Password?</p>
          <button
            type="button"
            onClick={() => {            
              router.replace("/admin/users");
            }}
          >
            Log In
          </button>
        </section>
      </form>
    </div>
  );
};

export default LoginForm;
