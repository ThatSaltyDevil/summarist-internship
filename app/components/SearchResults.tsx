import React from "react";
import { useSelector } from "react-redux";
import { useGetSearchBooksQuery } from "@/Redux/features/apiSlice";

const SearchResults = () => {
  const { data: results } = useGetSearchBooksQuery(useSelector((state: any) => state.search));

  if (results?.length === 0) return null; // Hide if no results

  return (
    <div className="overlay">
      <ul>
        Test
      </ul>
    </div>
  );
};

export default SearchResults;
