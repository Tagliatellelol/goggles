import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import Link from "next/link";
import React from "react";

const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex justify-space-between max-w-lg dark:text-white text-black mb-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="text-teal-300 h-5 " />
            <p>Previous Results</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="text-teal-300 h-5 " />
          <p>Next Results</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
