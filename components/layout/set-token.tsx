"use client";

import { getUserInfoByToken } from "@/app/api/services";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
function setTokenInLocalStorage(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
}
function setAuthUser(user: any) {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
}
const SetToken = () => {
  const searchParams = useSearchParams();
  const [tokenError, setTokenError] = useState("");
  const token = searchParams.get("token");
  useEffect(() => {
    if (token) {
      fetchAuthUser();
    }
  }, [token]);

  const fetchAuthUser = async () => {
    try {
      let userInfo = await getUserInfoByToken(String(token), "patient");
      if (userInfo.success) {
        setAuthUser(userInfo);
      }
      if (userInfo.success) {
        setTokenError(userInfo.message);
      }
    } catch (error) {
      console.log(error);
      throw new Error("shomething wrong");
    }
  };
  return null;
};

export default SetToken;
