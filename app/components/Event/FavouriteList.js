"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import EventItem from "./EventItem";
import useSearchStore from "@/app/stores/search.store";

function FavouriteList() {
  const [loading, setLoading] = useState(false);
  const { favEvents, searchForFavouriteEvents, removefromFavourites } =
    useSearchStore();

  const fetchData = async () => {
    setLoading(true);
    await searchForFavouriteEvents();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    console.log(favEvents.count);
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : !favEvents.count ? (
        <div
          style={{ height: "80vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="text-center">
            <h5>No Items Found</h5>
            <p>Try adding something to favourites</p>
          </div>
        </div>
      ) : (
        favEvents.results &&
        favEvents.results.map((event) => (
          <div style={{ textDecoration: "none" }}>
            <EventItem
              event={event}
              onClick={() => {
                removefromFavourites(event.id);
              }}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default FavouriteList;
