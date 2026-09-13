import { useState } from "react";

function EventCard({ event }) {
  const [seatsLeft, setSeatsLeft] = useState(event.seats);

  const handleRegister = () => {
    if (seatsLeft > 0) {
      setSeatsLeft(seatsLeft - 1);
    }
  };

  return (
    <article className="event-feature-card">
      <div className="event-index">{event.id < 10 ? `0${event.id}` : event.id}</div>
      <h3>{event.name}</h3>
      <p>Category: {event.category}</p>
      <p>Fee: ₹{event.fee}</p>
      <p>Seats Left: {seatsLeft}</p>
      <button 
        onClick={handleRegister} 
        className="register-button" 
        disabled={seatsLeft === 0}
      >
        {seatsLeft === 0 ? "SOLD OUT" : "Register"}
      </button>
    </article>
  );
}

export default EventCard;
