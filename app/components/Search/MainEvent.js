"use client";
import React from "react";
import EventList from "../Event/EventList";
import useSearchStore from "@/app/stores/search.store";

const MainEvent = () => {
  const { toggleSidebar, isSidebarOpen } = useSearchStore();
  return (
    <div
      style={{ height: "100vh", overflowY: "auto" }}
      className="col-xl-9 col-md-8 py-3"
    >
      <div className="d-flex px-4">
        <div
          className="btn btn-primary d-block d-md-none me-3"
          onClick={() => {
            console.log(isSidebarOpen);
            toggleSidebar();
          }}
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/E6E6E6/menu--v6.png"
            alt="menu--v6"
          />
        </div>
        <h2 className="pt-2  m-0">Events</h2>
      </div>
      <EventList />
    </div>
  );
};

export default MainEvent;
