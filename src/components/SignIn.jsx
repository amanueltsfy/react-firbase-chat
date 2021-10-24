import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        // const credential = GoogleAuthProvider.credentialFromResult(res);
        // const user = res.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    </div>
  );
};

export default SignIn;
