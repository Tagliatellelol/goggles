import React from "react";
import HeaderOption from "./HeaderOption";
import {PhotographIcon, PlayIcon, SearchIcon} from "@heroicons/react/outline";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-black dark:text-white justify-evenly text-sm lg:text-base lg:space-x-36 border-b-[1px]">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
      </div>
    </div>
  );
};

export default HeaderOptions;
