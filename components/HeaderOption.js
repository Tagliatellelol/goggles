import React from "react";

const HeaderOption = ({Icon, title, selected}) => {
  return (
    <div
      className={`
        flex items-center space-x-1 border-transparent 
        hover:text-teal-500 
        hover:border-teal-500 pb-3 cursor-pointer
        transition duration-150
        transform hover:scale-125
        ${selected && "scale-125 text-teal-500"}
      `}
    >
      <Icon className="h-5" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOption;
