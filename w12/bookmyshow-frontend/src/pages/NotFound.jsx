import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section style={styles.container}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate("/")}>Return Home</button>
    </section>
  );
}

const styles = {
  container: { minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", textAlign: "center" },
};
