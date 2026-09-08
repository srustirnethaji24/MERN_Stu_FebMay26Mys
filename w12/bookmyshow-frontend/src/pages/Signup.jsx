import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setError("All fields are required.");
      return;
    }
    if (loading) return;
    try {
      setLoading(true);
      const response = await registerUser(form);
      setSuccess(response.message || "Registration successful.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={styles.container}>
      <h1>Create Account</h1>
      <p style={styles.subtitle}>Join BookMyShow and start booking tickets.</p>
      {error && <div style={styles.error}>{error}</div>}
      {success && <div style={styles.success}>{success}</div>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} disabled={loading} required />
        <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} disabled={loading} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} disabled={loading} required />
        <button type="submit" disabled={loading}>{loading ? "Creating Account..." : "Signup"}</button>
      </form>
      <p style={styles.footer}>Already have an account? <Link to="/login">Login</Link></p>
    </section>
  );
}

const styles = {
  container: { maxWidth: "450px", margin: "40px auto", background: "#fff", padding: "30px", borderRadius: "8px", border: "1px solid #ddd" },
  subtitle: { marginTop: "10px", color: "#666" },
  form: { display: "flex", flexDirection: "column", gap: "15px", marginTop: "25px" },
  error: { marginTop: "20px", padding: "12px", background: "#ffebee", color: "#c62828", borderRadius: "4px" },
  success: { marginTop: "20px", padding: "12px", background: "#e8f5e9", color: "#2e7d32", borderRadius: "4px" },
  footer: { marginTop: "20px" },
};
