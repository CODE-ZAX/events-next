"use client";

import Link from "next/link";

function EventItem({ event, onClick }) {
  return (
    <div
      className="pb-2 mb-3 cursor-pointer "
      style={{ borderBottom: "1px solid #CCCCCC" }}
    >
      <div className="d-flex align-items-center">
        <div className="card-body " style={{ flexGrow: 1 }}>
          <h5 className="card-title" style={{ textDecoration: "underline" }}>
            {event.title}
          </h5>
          <p className="card-subtitle mb-2 text-muted">
            {new Date(event.start).toLocaleDateString()} to{" "}
            {new Date(event.end).toLocaleDateString()}
          </p>
          <p className="card-text">
            {event.description && event.description.slice(0, 150) + "..."}
          </p>
          <p className="card-text">
            <small className="text-muted">
              {/* Location: {event.entities[0].formatted_address} */}
            </small>
          </p>
          <p className="card-text">
            <small className="text-muted">Category: {event.category}</small>
          </p>
        </div>
        <div className="d-flex justify-content-end align-items-end flex-wrap flex-md-nowrap">
          <button className="btn btn-primary m-2" onClick={onClick}>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/ffffff/like--v1.png"
              alt="like--v1"
            />
          </button>

          <Link
            key={event.id}
            href={`/search/${event.id}`}
            className="btn btn-secondary m-2"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/ffffff/forward--v1.png"
              alt="forward--v1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
