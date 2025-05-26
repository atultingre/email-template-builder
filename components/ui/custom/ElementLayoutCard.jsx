import React from "react";

const ElementLayoutCard = ({ layout, index }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center border border-dashed rounded-xl p-3 group cursor-pointer hover:shadow-md hover:border-primary">
        {
          <layout.icon className="p-2 w-9 h-9 bg-gray-100 group-hover:text-primary group-hover:bg-purple-200 rounded-full mb-1" />
        }
        <h2 className="text-xs group-hover:text-primary">{layout.label}</h2>
      </div>
    </>
  );
};

export default ElementLayoutCard;
