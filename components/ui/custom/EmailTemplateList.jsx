import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../button";

const EmailTemplateList = () => {
  const [emailList, setEmailList] = useState([]);
  return (
    <div>
      <h2 className="font-bold text-xl text-primary mt-5">Workspace</h2>
      {emailList?EmailTemplateList.length == 0&&<div className="flex justify-center flex-col items-center mt-7">
        <Image src={'/email.png'} alt="email" width={250} height={250}/>
        <Button className="mt-7">+ Create New</Button>
      </div>:<div></div>}
    </div>
  );
};

export default EmailTemplateList;
