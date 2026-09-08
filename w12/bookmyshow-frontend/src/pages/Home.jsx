import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section>
      <section style={styles.hero}>
        <h1>Welcome to BookMyShow</h1>
        <p>Discover movies, explore shows, and book tickets effortlessly.</p>
        <div style={styles.actions}>
          <button style={styles.primaryButton} onClick={() => navigate("/movies")}>Explore Movies</button>
          <button style={styles.secondaryButton} onClick={() => navigate("/signup")}>Get Started</button>
        </div>
      </section>
      <section>
        <h2>What You Can Do</h2>
        <div style={styles.featureGrid}>
          <FeatureCard title="Browse Movies" description="Explore currently available movies." />
          <FeatureCard title="Book Tickets" description="Reserve seats with ease." />
          <FeatureCard title="Track Bookings" description="View your booking history." />
        </div>
      </section>
    </section>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  hero: { textAlign: "center", padding: "60px 20px" },
  actions: { marginTop: "25px", display: "flex", justifyContent: "center", gap: "15px" },
  primaryButton: { padding: "12px 20px", cursor: "pointer" },
  secondaryButton: { padding: "12px 20px", cursor: "pointer" },
  featureGrid: { marginTop: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" },
  card: { background: "#fff", border: "1px solid #ddd", padding: "20px", borderRadius: "6px" },
};
