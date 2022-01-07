import Head from "next/head";
import {SearchIcon} from "@heroicons/react/outline";
import useDarkMode from "../hooks/useDarkMode";
import {useRef} from "react";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();
  const [colorTheme, setTheme] = useDarkMode();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="h-screen w-screen p-10 dark:bg-gray-900 bg-gray-100">
      <Head>
        <title>Goggles 🥽</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm">
        <div className="flex items-center">
          <h1 className="bg-teal-500 text-2xl text-white p-3 font-bold rounded-lg transition duration-150 hover:opacity-90 hover:shadow-lg ">
            Goggles 🥽
          </h1>
        </div>

        <div className="flex items-center">
          {colorTheme === "light" ? (
            <button
              className="btn btn-outline"
              onClick={() => setTheme("light")}
            >
              Light Mode
            </button>
          ) : (
            <button className="btn" onClick={() => setTheme("dark")}>
              Dark Mode
            </button>
          )}
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44">
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md 
        rounded-full border border-teal-200 px-5 py-2 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none dark:text-white text-black dark:bg-gray-900 bg-gray-100"
          />
        </div>
        <div className="flex flex-col space-y-2 justify-center mt-8 sm:space-y-0">
          <button
            className="btn btn-xs btn-outline btn-accent md:btn-sm lg:btn-md"
            onClick={search}
          >
            Search Goggles 🥽
          </button>
        </div>
      </form>
    </div>
  );
}
