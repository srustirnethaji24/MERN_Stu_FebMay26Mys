import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main style={styles.container}>
        <Outlet />
      </main>
    </>
  );
}

const styles = { container: { maxWidth: "1200px", margin: "0 auto", padding: "25px" } };
