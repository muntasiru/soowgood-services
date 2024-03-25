"use client";
import { getUserInfoByToken } from "@/app/api/services";
import { useRouter, useSearchParams } from "next/navigation";
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

const TokenVerify = () => {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const [tokenError, setTokenError] = useState("");
  const token = searchParams.get("token");
  const redirect = searchParams.get("redirect");
  const [status, setStatus] = useState({
    tokenSuccess: false,
    tokenError: false,
    isLoading: false,
  });

  useEffect(() => {
    if (token) {
      fetchAuthUser();
    }
  }, [token]);

  const fetchAuthUser = async () => {
    try {
      setStatus({ ...status, isLoading: true });
      let userInfo = await getUserInfoByToken(String(token), "patient");
      if (userInfo.success) {
        setAuthUser(userInfo);
        navigate.push(`/${redirect}`);
        setStatus({ ...status, isLoading: false, tokenSuccess: true });
      } else {
        setTokenError(userInfo.message);
        setStatus({ ...status, isLoading: false, tokenError: true });
      }
    } catch (error) {
      setStatus({ ...status, isLoading: false });
      throw new Error("Something wrong");
    }
  };

  // Render JSX based on status
  if (status.isLoading) {
    return (
      <div className=" h-screen w-full flex flex-col justify-center items-center text-[24px] font-semibold">
        <div className="loader"></div>
        Verfying user credential...
      </div>
    );
  } else if (status.tokenSuccess) {
    return (
      <div className=" h-screen w-full flex  justify-center items-center text-[24px] font-semibold">
        Token verified successfully!
      </div>
    );
  } else if (status.tokenError) {
    return (
      <div className=" h-screen w-full flex justify-center items-center text-[24px] font-semibold">
        Error: {tokenError}
      </div>
    );
  } else {
    return (
      <div className=" h-screen w-full flex flex-col justify-center items-center text-[24px] font-semibold">
        <div className="loader"></div>
        Wait until token is verified!
      </div>
    ); // Or any default JSX
  }
};

export default TokenVerify;
