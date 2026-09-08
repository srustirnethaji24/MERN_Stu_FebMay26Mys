import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if (!form.email.trim() || !form.password.trim()) {
      setError("Email and password are required.");
      return;
    }
    if (loading) return;
    try {
      setLoading(true);
      const response = await loginUser(form);
      const token = response.data?.token;
      const user = response.data?.user;
      if (!token || !user) throw new Error("Invalid login response received.");
      login(token, user);
      const from = location.state?.from?.pathname;
      if (user.role === "admin") navigate(from || "/admin/dashboard", { replace: true });
      else navigate(from || "/", { replace: true });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={styles.container}>
      <h1>Login</h1>
      <p style={styles.subtitle}>Welcome back to BookMyShow.</p>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} disabled={loading} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} disabled={loading} required />
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      </form>
      <p style={styles.footer}>Don't have an account? <Link to="/signup">Signup</Link></p>
    </section>
  );
}

const styles = {
  container: { maxWidth: "450px", margin: "40px auto", background: "#fff", padding: "30px", borderRadius: "8px", border: "1px solid #ddd" },
  subtitle: { marginTop: "10px", color: "#666" },
  form: { display: "flex", flexDirection: "column", gap: "15px", marginTop: "25px" },
  error: { marginTop: "20px", padding: "12px", background: "#ffebee", color: "#c62828", borderRadius: "4px" },
  footer: { marginTop: "20px" },
};
