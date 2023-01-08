import React, { FC } from "react";
import Head from "next/head";
import LoginScreen from "@/components/LoginScreen/components/LoginScreen";

const Login: FC = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div>
        <LoginScreen />
      </div>
    </>
  );
};

export default Login;
