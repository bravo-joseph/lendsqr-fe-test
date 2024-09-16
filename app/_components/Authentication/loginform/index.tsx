"use client";
import React, { useReducer, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { z } from "zod";

// Zod Schema Definition
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Initial State
const initialState = {
  isHidden: false,
};

// Reducer function
function reducer(state: { isHidden: boolean }, action: { type: string }) {
  switch (action.type) {
    case "password/toggle":
      return { ...state, isHidden: !state.isHidden };
    default:
      return state;
  }
}

const LoginForm = () => {
  const [{ isHidden }, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  // Local state to store form data and errors
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  // Handle form data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = () => {
    try {
      // Zod validation
      loginSchema.parse(formData);
      // If validation passes, redirect user to the next page
      router.replace("/admin/users");
    } catch (e) {
      // If validation fails, set error messages
      if (e instanceof z.ZodError) {
        const errors = e.flatten().fieldErrors;
        setFormErrors({
          email: errors.email?.[0],
          password: errors.password?.[0],
        });
      }
    }
  };

  return (
    <div className={styles.container}>
      <section>
        <p>Welcome!</p>
        <span>Enter details to login</span>
      </section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <section>
          <div>
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {formErrors.email && (
            <b className={styles.error}>{formErrors.email}</b>
          )}
          <div>
            <input
              name="password"
              placeholder="Password"
              type={isHidden ? "password" : "text"}
              value={formData.password}
              onChange={handleChange}
            />
            <span
              onClick={() => {
                dispatch({ type: "password/toggle" });
              }}
            >
              {isHidden ? "Show" : "Hide"}
            </span>
          </div>
          {formErrors.password && (
            <b className={styles.error}>{formErrors.password}</b>
          )}
        </section>
        <section className="submit-section">
          <p>Forgot Password?</p>
          <button type="submit">Log In</button>
        </section>
      </form>
    </div>
  );
};

export default LoginForm;
