import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <section className="hero-header">
        <div className="hero-text-content">
          <div className="hero-date-text">October 15-18, 2026</div>
          <div className="host-info">Hosted by CSE department of MBCET</div>
          <h1 className="hero-headline">HASH'26</h1>
          <div className="hero-theme-statement">BUILD. BREAK. CREATE.</div>
          <div>
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
      </section>

      <section className="page-section-secondary">
        <div className="container">
          <h2>Announcements</h2>
          {loading && <p>Loading...</p>}
          {error && <p>Could not load announcements</p>}
          {!loading && !error && (
            <div className="announcements-list">
              {posts.map((post) => (
                <div key={post.id} className="announcement-item">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
