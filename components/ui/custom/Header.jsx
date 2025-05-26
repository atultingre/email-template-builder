"use client";
import { useUserDetail } from "@/app/provider";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import SignInButton from "./SignInButton";

const Header = () => {
  const { userDetail, setUserDetail } = useUserDetail();
  return (
    <div className="flex justify-between items-center p-4 shadow-sm px-10">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="logo" width={180} height={140} />
      </Link>
      <div>
        {userDetail?.email ? (
          <div className="flex gap-3 items-center">
            <Link href={"/dashboard"}>
              <Button>Dashboard</Button>
            </Link>
            <Image
              className="rounded-full"
              src={userDetail?.picture}
              alt={userDetail?.name}
              width={35}
              height={35}
            />
          </div>
        ) : (
          <SignInButton />
        )}
        {/* <Button>Get Started</Button> */}
      </div>
    </div>
  );
};

export default Header;
