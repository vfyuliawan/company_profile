import { auth, signInWithEmailAndPassword } from "@/app/api/firebase";
import { FirebaseError } from "@firebase/util";
import { User } from "firebase/auth";
import firebase from "firebase/compat/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function LoginViewModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cekLogin, setCekLogin] = useState<User | null >(null);

  const postLogin = async (props: LoginInterface) => {
    console.log("cekInput", props.email, props.password);
    try {
      await signInWithEmailAndPassword(auth, props.email, props.password);
      console.log("Login successful");
      window.alert("Login Berhasil");
    } catch (error: any) {
      console.log("Login error:", error?.message);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    postLogin,
    cekLogin,
    setCekLogin
  };
}
