"use client";
import useSearchStore from "@/app/stores/search.store";
import React, { useState } from "react";

const Searchbar = () => {
  const { params, setQuery, searchEvents } = useSearchStore();
  const [loading, setLoading] = useState(false);
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <label>
        <h5>SEARCH</h5>
      </label>
      <div className="d-flex gap-1">
        <input
          type="text"
          placeholder="Type here"
          className="form-control"
          // equivalent to max-w-xs
          value={params.q}
          onChange={handleSearchChange}
        />
        {loading ? (
          <div style={{ height: 36, width: 36 }}>
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={async () => {
              setLoading(true);
              await searchEvents(params);
              setLoading(false);
            }}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ffffff/ios/50/search--v1.png"
              alt="search--v1"
            />
          </button>
        )}
      </div>
    </>
  );
};

export default Searchbar;
