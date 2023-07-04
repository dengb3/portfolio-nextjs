import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="text-[#232948] text-[32px] font-medium flex items-center gap-4 py-16">
      {title}
    </div>
  );
};

export default Heading;
