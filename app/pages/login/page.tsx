// pages/login.js

"use client";

import React, { useEffect } from "react";
import { LoginViewModel } from "./LoginViewModel";
import { useRouter } from "next/router";
import { auth } from "@/app/api/firebase";
import { Button } from "react-scroll";
import { LoginView } from "./LoginView";
import { DashboardView } from "../dashboard/DashboardView";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    postLogin,
    cekLogin,
    setCekLogin,
  } = LoginViewModel();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCekLogin(user)
    });
    return () => {};
  }, []);

  console.log("cekLogin", cekLogin);

  return cekLogin === null ? (
    <LoginView/>
  ) : (
    <DashboardView />
  );
};

export default Login;
