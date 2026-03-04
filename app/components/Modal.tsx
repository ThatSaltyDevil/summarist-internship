"use client";
import React, { useState } from "react";
import styles from "../styles/Modal.module.css";
import { IoPerson } from "react-icons/io5";
import google from "../assets/google.png";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";
import { closeModal, setModalMode } from "@/Redux/features/modalSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import Link from "next/link";
import { login, signup } from "../firebase/authFunctions"


const Modal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: any) => state.modal.isOpen);
  const mode = useAppSelector((state : any) => state.modal.mode)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (email: string, password: string) => {
    await signup(email, password);
    dispatch(closeModal());
  }

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);
    dispatch(closeModal());
  }

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
                <button className={styles.google__btn}>
                  <figure className={styles.google__btn_icon}>
                    <Image src={google} alt="" />
                  </figure>
                  <div>Login with Google</div>
                </button>
                <div className={styles.modal__divider}>
                  <span className="divider__text"> or </span>
                </div>
                <form className={styles.login__form}>
                  <input
                    className={styles.login__form_input}
                    type="text"
                    placeholder="Email Address"
                    onChange={(event) => setEmail(event.target.value)}
                  ></input>
                  <input
                    className={styles.login__form_input}
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  ></input>
                  <button className={styles.login__btn} onClick={() => handleLogin(email, password)}>
                    <span>Login</span>
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
                <button className={styles.google__btn}>
                  <figure className={styles.google__btn_icon}>
                    <Image src={google} alt="" />
                  </figure>
                  <div>Sign up with Google</div>
                </button>
                <div className={styles.modal__divider}>
                  <span className="divider__text"> or </span>
                </div>
                <form className={styles.signup__form}>
                  <input
                    className={styles.signup__form_input}
                    type="text"
                    placeholder="Email Address"
                    onChange={(event) => setEmail(event.target.value)}
                  ></input>
                  <input
                    className={styles.signup__form_input}
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  ></input>
                  <button className={styles.signup__btn} onClick={() => handleSignup(email, password)}>
                    <span>Sign up</span>
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
