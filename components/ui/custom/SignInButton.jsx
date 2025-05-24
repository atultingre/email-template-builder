"use client";

import React from "react";
import { Button } from "../button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const SignInButton = () => {
  const CreateUser = useMutation(api.users.CreateUser);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: "Bearer " + tokenResponse?.access_token,
          },
        }
      );

      console.log(userInfo.data);
      const user = userInfo.data;

      // save to database
      try {
        const result = await CreateUser({
          name: user?.name,
          email: user?.email,
          picture: user?.picture,
        });
        const userDetail = {
          ...user,
          _id: result?._id ?? result,
        };

        if (typeof window !== undefined) {
          localStorage.setItem("userDetail", JSON.stringify(userDetail));
        }
        console.log("CreateUser result:", result);
      } catch (err) {
        console.error("Failed to create user:", err);
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <div onClick={googleLogin}>
      <Button>Get Started</Button>
    </div>
  );
};

export default SignInButton;
