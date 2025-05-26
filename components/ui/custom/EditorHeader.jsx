"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../button";
import { Code, Monitor, Phone, Smartphone } from "lucide-react";
import Link from "next/link";
import { useScreenSize } from "@/app/provider";

const EditorHeader = () => {
  const { screenSize, setScreenSize } = useScreenSize();

  return (
    <div className="p-4 px-10 shadow-sm flex justify-between items-center">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="logo" width={160} height={150} />
      </Link>
      <div className="flex gap-3">
        <Button
          onClick={() => setScreenSize("desktop")}
          variant="ghost"
          className={`${screenSize == "desktop" && "bg-purple-100 text-primary"}`}
        >
          <Monitor />
          Desktop
        </Button>
        <Button
          onClick={() => setScreenSize("mobile")}
          variant="ghost"
          className={`${screenSize == "mobile" && "bg-purple-100 text-primary"}`}
        >
          <Smartphone />
          Phone
        </Button>
      </div>
      <div className="flex gap-4">
        <Button
          variant="ghost"
          className="hover:text-primary hover:bg-purple-200"
        >
          <Code />
        </Button>
        <Button variant="outline">Send Test Email</Button>
        <Button>Save Template</Button>
      </div>
    </div>
  );
};

export default EditorHeader;
