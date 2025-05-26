"use client";
import { useUserDetail } from "@/app/provider";
import { Button } from "@/components/ui/button";
import EmailTemplateList from "@/components/ui/custom/EmailTemplateList";
import Header from "@/components/ui/custom/Header";
import React from "react";

const Dashboard = () => {
  const { userDetail, setUserDetail } = useUserDetail();
  return (
    <>
      <Header />
      <div className="p-10 md:px-28 lg:px-40 xl:px-56 mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <h2 className="font-bold text-xl md:text-3xl mb-5 md:mb-0">
            Hello, {userDetail?.name}
          </h2>
          <Button>+ Create New Email Template</Button>
        </div>
        <EmailTemplateList />
      </div>
    </>
  );
};

export default Dashboard;
