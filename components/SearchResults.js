import React from "react";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

const SearchResults = ({results}) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 dark:bg-gray-900 bg-gray-100">
      <p className="text-black dark:text-white text-md mb-5 mt-3 ">
        ~{results.searchInformation?.formattedTotalResults} results
      </p>

      {results.items?.map((res) => (
        <div key={res.link} className="max-w-xl mb-8">
          <div className="group ">
            <Link href={res.link} className="text-sml cursor-pointer">
              {res.formattedUrl}
            </Link>
            <Link href={res.link}>
              <h2 className="cursor-pointer truncate text-xl text-teal-400 font-medium group-hover:underline">
                {res.title}
              </h2>
            </Link>
          </div>
          <p className="line-clamp-2">{res.snippet}</p>
        </div>
      ))}

      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
