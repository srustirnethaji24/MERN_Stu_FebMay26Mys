import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLayout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <section style={styles.container}>
      <aside style={styles.sidebar}>
        <h2>Admin Panel</h2>
        <nav style={styles.nav}>
          <NavLink to="/admin" end style={getNavStyle}>Dashboard</NavLink>
          <NavLink to="/admin/movies" style={getNavStyle}>Movies</NavLink>
          <NavLink to="/admin/shows" style={getNavStyle}>Shows</NavLink>
          <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </nav>
      </aside>
      <main style={styles.content}>
        <Outlet />
      </main>
    </section>
  );
}

function getNavStyle({ isActive }) {
  return {
    textDecoration: "none",
    color: isActive ? "#d32f2f" : "#333",
    fontWeight: isActive ? "bold" : "normal",
  };
}

const styles = {
  container: { display: "flex", minHeight: "100vh" },
  sidebar: { width: "250px", background: "#fff", borderRight: "1px solid #ddd", padding: "25px" },
  nav: { display: "flex", flexDirection: "column", gap: "15px", marginTop: "25px" },
  content: { flex: 1, padding: "30px" },
  logoutButton: { marginTop: "20px", padding: "10px", cursor: "pointer" },
};
