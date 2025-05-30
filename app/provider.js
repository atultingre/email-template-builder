"use client";
import React, { useContext, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { userDetailContext } from "@/context/UserDetailContext";
import { ScreenSizeContext } from "@/context/ScreenSizeContext";

const Provider = ({ children }) => {
  const [userDetail, setUserDetail] = useState();
  const [screenSize, setScreenSize] = useState("desktop");

  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  useEffect(() => {
    if (window !== undefined) {
      const storage = JSON.parse(localStorage.getItem("userDetail"));
      if (!storage?.email || !storage) {
        // redirect to home screen
      } else {
        setUserDetail(storage);
      }
    }
  }, []);
  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <userDetailContext.Provider value={{ userDetail, setUserDetail }}>
          <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
            {children}
          </ScreenSizeContext.Provider>
        </userDetailContext.Provider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
};

export default Provider;

export const useUserDetail = () => {
  return useContext(userDetailContext);
};
export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};
