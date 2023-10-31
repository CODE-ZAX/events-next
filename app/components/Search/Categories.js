"use client";
import React, { useState } from "react";
import useSearchStore from "@/app/stores/search.store";
import CountrySelect from "./CountrySelect";
import Searchbar from "./Searchbar";

const Categories = () => {
  const { params, setQuery, setCountry, setCategory } = useSearchStore();

  const categories = [
    "school-holidays",
    "public-holidays",
    "observances",
    "politics",
    "conferences",
    "expos",
    "concerts",
    "festivals",
    "performing-arts",
    "sports",
    "community",
    "daylight-savings",
    "airport-delays",
    "severe-weather",
    "disasters",
    "terror",
    "health-warnings",
    "academic",
  ];

  return (
    <div className="mb-4">
      <h5 className="mb-2">CATEGORIES</h5>
      <ul className="list-group">
        {categories.map((category) => (
          <li
            key={category}
            className={`list-group-item ${
              params.category === category ? "active" : ""
            }`}
            onClick={() => {
              if (category == params.category) {
                setCategory("");
              } else {
                setCategory(category);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
