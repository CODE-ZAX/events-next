"use client";
import useSearchStore from "@/app/stores/search.store";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const CountrySelect = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  const { setCountry } = useSearchStore();
  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
        setCountry(data.userSelectValue.value);
      });
  }, []);
  return (
    <Select
      className="text-slate-800"
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => {
        setSelectedCountry(selectedOption);

        setCountry(selectedOption.value);
      }}
    />
  );
};
export default CountrySelect;
