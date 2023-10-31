import BackButton from "@/app/components/utils/BackButton";
import { notFound } from "next/navigation";
import React from "react";

async function getEvent(id) {
  const response = await fetch(
    "https://api.predicthq.com/v1/events/?" +
      new URLSearchParams({
        id: id,
      }).toString(),
    {
      headers: {
        Authorization: "Bearer wxsHUV8WQUuYu6-h6o9SErrEcNGA9wgTgs-YTn1M",
        Accept: "application/json",
      },

      next: { revalidate: 1 },
    }
  );
  return response.json();
}

const EventPage = async ({ params }) => {
  const eventList = await getEvent(params.id);

  if (eventList.count == 0 || !eventList) {
    notFound();
  }

  const event = eventList.results[0];
  return (
    <div className="container mt-5">
      <div className="d-flex gap-2">
        <BackButton href={"/search"} />
        <h1 className="mb-4">{event.title}</h1>
      </div>
      <p className="lead mb-4">{event.description}</p>

      <div className="mb-4">
        <h5>Details</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Category: {event.category}</li>
          <li className="list-group-item">Rank: {event.rank}</li>
          <li className="list-group-item">Local Rank: {event.local_rank}</li>
          <li className="list-group-item">
            Attendance: {event.phq_attendance}
          </li>
          <li className="list-group-item">
            Duration: {event.duration / 60} minutes
          </li>
          <li className="list-group-item">
            Start: {new Date(event.start).toLocaleString()}
          </li>
          <li className="list-group-item">
            End: {new Date(event.end).toLocaleString()}
          </li>
          <li className="list-group-item">
            Updated: {new Date(event.updated).toLocaleString()}
          </li>
          <li className="list-group-item">
            Location: {event.location.join(", ")}
          </li>
          <li className="list-group-item">Country: {event.country}</li>
          <li className="list-group-item">State: {event.state}</li>
        </ul>
      </div>

      <div className="mb-4">
        <h5>Labels</h5>
        <ul className="list-inline">
          {event.labels.map((label, index) => (
            <li
              key={index}
              className="list-inline-item badge bg-secondary me-2"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      {event.predicted_event_spend_industries && (
        <div className="mb-4">
          <h5>Predicted Event Spend Industries</h5>
          <ul className="list-group list-group-flush">
            {Object.entries(event.predicted_event_spend_industries).map(
              ([industry, value], index) => (
                <li key={index} className="list-group-item">
                  {industry}: ${value}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EventPage;
