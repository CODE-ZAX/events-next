"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import EventItem from "./EventItem";
import useSearchStore from "@/app/stores/search.store";

function EventList() {
  const [loading, setLoading] = useState(false);
  const { params, events, searchEvents, addtoFavourites } = useSearchStore();

  const fetchData = async () => {
    setLoading(true);
    await searchEvents(params);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : !events.count ? (
        <div
          style={{ height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="text-center">
            <h5>No Items Found</h5>
            <p>Try clearing the filters</p>
          </div>
        </div>
      ) : (
        events.results &&
        events.results.map((event, index) => (
          <div style={{ textDecoration: "none" }}>
            <EventItem
              event={event}
              onClick={() => {
                addtoFavourites(event.id);
              }}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default EventList;
