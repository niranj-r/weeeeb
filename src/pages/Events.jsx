import { useState } from "react";
import EventList from "../components/EventList";
import events from "../data/events";

function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Technical", "Workshop", "Cultural", "Sports"];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || event.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="page-section-dark">
      <div className="container">
        <h2>Events</h2>
        <div className="filters">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <EventList events={filteredEvents} />
      </div>
    </main>
  );
}

export default Events;
