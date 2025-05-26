import Layout from "@/Data/Layout";
import React from "react";
import ElementLayoutCard from "./ElementLayoutCard";
import ElementList from "@/Data/ElementList";

const ElementsSidebar = () => {
  return (
    <div className="p-4 h-screen shadow-md">
      <h2 className="font-bold text-xl ">Layouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {Layout.map((layout, index) => (
          <ElementLayoutCard layout={layout} key={index} />
        ))}
      </div>
      <h2 className="font-bold text-xl mt-6">Elements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {ElementList.map((elements, index) => (
          <ElementLayoutCard layout={elements} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ElementsSidebar;
