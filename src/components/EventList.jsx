import EventCard from "./EventCard";

function EventList({ events }) {
  if (!events || events.length === 0) {
    return <div className="empty-state">No events found.</div>;
  }

  return (
    <div className="events-grid">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
