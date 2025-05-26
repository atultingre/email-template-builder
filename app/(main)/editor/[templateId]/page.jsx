import React from "react";
import EditorHeader from "@/components/ui/custom/EditorHeader";
import ElementsSidebar from "@/components/ui/custom/ElementsSidebar";
import Canvas from "@/components/ui/custom/Canvas";
import Seetings from "@/components/ui/custom/Seetings";

const Editor = () => {
  return (
    <div>
      <EditorHeader />

      <div className="grid grid-cols-5 ">
        <div className="">
          <ElementsSidebar />
        </div>
        <div className="col-span-3 bg-gray-100">
          <Canvas />
        </div>
        <div className="">
          <Seetings />
        </div>
      </div>
    </div>
  );
};

export default Editor;
