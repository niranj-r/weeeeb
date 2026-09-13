import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page-section-secondary">
      <div className="container" style={{ textAlign: "center", padding: "100px 0" }}>
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="register-button" style={{ display: "inline-block", marginTop: "20px" }}>Go back to Home</Link>
      </div>
    </main>
  );
}

export default NotFound;
