"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import { IoPerson } from "react-icons/io5";
import google from "../assets/google.png";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";
import { closeModal, setModalMode } from "@/Redux/features/modalSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import Link from "next/link";
import { login, loginWithGoogle, signup } from "../firebase/authFunctions";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/init";
import { setUser } from "@/Redux/features/authSlice";

const Modal = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: any) => state.modal.isOpen);
  const mode = useAppSelector((state: any) => state.modal.mode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    email: string,
    password: string,
  ) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signup(email, password);
      if (result.success) {
        console.log("Signup successful!");
        // The onAuthStateChanged listener will handle the redirect
      } else {
        setError(result.error || "Signup failed");
        if (result.code === "auth/email-already-in-use-google") {
          setError(
            "This email is already associated with a Google account. Please use Google login.",
          );
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An unexpected error occurred during signup.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    email: string,
    password: string,
  ) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await login(email, password);
      if (result.success) {
        console.log("Login successful!");
        // The onAuthStateChanged listener will handle the redirect
      } else {
        setError(result.error || "Login failed");
        if (result.code === "auth/account-exists-with-different-credential") {
          setError(
            "This email is associated with a Google account. Please use Google login or link your accounts first.",
          );
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      const result = await loginWithGoogle();
      if (result.success) {
        console.log("Google login successful!");
        // The onAuthStateChanged listener will handle the redirect
      } else {
        setError(result.error || "Google login failed");
        if (result.code === "auth/account-exists-with-different-credential") {
          setError(
            "This email is already associated with an account. Please sign in with your password first, then link your Google account.",
          );
        }
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      setError("An unexpected error occurred during Google login.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
        router.push("/for-you");
      } else {
        dispatch(setUser({ uid: "", email: null }));
      }
    });
    dispatch(closeModal());
    return () => {
      unsubscribe();
    };
  }, [router, dispatch]);

  return (
    <div>
      {mode === "Login" && isOpen && (
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__row}>
            <div className={styles.modal}>
              <div className={styles.modal__content}>
                <div className={styles.modal__title}>Log in to Summarist</div>
                <Link href="/for-you" onClick={() => dispatch(closeModal())}>
                  <div className={styles.guest__btn}>
                    <figure className={styles.guest__btn_icon}>
                      <IoPerson />
                    </figure>
                    <div>Login as a Guest</div>
                  </div>
                </Link>
                <div className={styles.modal__divider}>
                  <span className="divider__text"> or </span>
                </div>
                <button
                  className={styles.google__btn}
                  onClick={() => handleGoogleLogin()}
                  disabled={isLoading}
                >
                  <figure className={styles.google__btn_icon}>
                    <Image src={google} alt="" />
                  </figure>
                  <div>{isLoading ? "Connecting..." : "Login with Google"}</div>
                </button>
                <div className={styles.modal__divider}>
                  <span className="divider__text"> or </span>
                </div>
                <form className={styles.login__form}>
                  {error && (
                    <div className={styles.error__message}>{error}</div>
                  )}
                  <input
                    className={styles.login__form_input}
                    type="text"
                    placeholder="Email Address"
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={isLoading}
                  ></input>
                  <input
                    className={styles.login__form_input}
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    disabled={isLoading}
                  ></input>
                  <button
                    className={styles.login__btn}
                    onClick={(event) => handleLogin(event, email, password)}
                    disabled={isLoading || !email || !password}
                  >
                    <span>{isLoading ? "Logging in..." : "Login"}</span>
                  </button>
                </form>
              </div>
              <div className={styles.forgot_password__link}>
                Forgot your password?
              </div>
              <button
                className={styles.switch__btn}
                onClick={() => dispatch(setModalMode("Signup"))}
              >
                Don't have an account?
              </button>
              <div
                className={styles.close__btn}
                onClick={() => dispatch(closeModal())}
              >
                <LiaTimesSolid />
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === "Signup" && isOpen && (
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__row}>
            <div className={styles.modal}>
              <div className={styles.modal__content}>
                <div className={styles.modal__title}>Sign up for Summarist</div>
                <button
                  className={styles.google__btn}
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  <figure className={styles.google__btn_icon}>
                    <Image src={google} alt="" />
                  </figure>
                  <div>
                    {isLoading ? "Connecting..." : "Sign up with Google"}
                  </div>
                </button>
                <div className={styles.modal__divider}>
                  <span className="divider__text"> or </span>
                </div>
                <form className={styles.signup__form}>
                  {error && (
                    <div className={styles.error__message}>{error}</div>
                  )}
                  <input
                    className={styles.signup__form_input}
                    type="text"
                    placeholder="Email Address"
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={isLoading}
                  ></input>
                  <input
                    className={styles.signup__form_input}
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    disabled={isLoading}
                  ></input>
                  <button
                    className={styles.signup__btn}
                    onClick={(event) => handleSignup(event, email, password)}
                    disabled={isLoading || !email || !password}
                  >
                    <span>{isLoading ? "Signing up..." : "Sign up"}</span>
                  </button>
                </form>
              </div>

              <button
                className={styles.switch__btn}
                onClick={() => dispatch(setModalMode("Login"))}
              >
                Already have an account?
              </button>
              <div
                className={styles.close__btn}
                onClick={() => dispatch(closeModal())}
              >
                <LiaTimesSolid />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
