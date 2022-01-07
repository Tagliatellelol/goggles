import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Response from "../res";
import {useRouter} from "next/router";
import SearchResults from "../components/SearchResults";

const Search = ({results}) => {
  const router = useRouter();
  console.log(results);
  return (
    <div className="h-screen w-screen overflow-x-hidden  dark:bg-gray-900 bg-gray-100">
      <Head>
        <title>{router.query.term} - Goggles Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const {query} = context;
  const useDummyData = false;
  const startIndex = query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query.term}&start=${startIndex}`,
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
