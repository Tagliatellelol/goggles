import {SearchIcon, XIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";
import React, {useRef} from "react";
import useDarkMode from "../hooks/useDarkMode";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();

  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 dark:bg-gray-900 bg-gray-100">
      <div className="flex w-full p-6 items-center">
        <h1
          className="cursor-pointer bg-teal-500 text-2xl text-white p-3 font-bold 
        rounded-lg transition duration-150 hover:opacity-90 hover:shadow-lg"
          onClick={() => router.push("/")}
        >
          Goggles 🥽
        </h1>
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-teal-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none dark:text-white text-black dark:bg-gray-900 bg-gray-100"
            type="text"
          />
          <XIcon
            className="h-5 mr-3 dark:text-white text-black cursor-pointer transition duration-150
         transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
            onClick={() => router.push("/")}
          />
          <SearchIcon
            className="mr-3 h-6 hidden sm:inline-flex text-teal-500 
        border-l-2 pl-4 border-gray-400"
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
