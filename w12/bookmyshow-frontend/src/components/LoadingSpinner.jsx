export default function LoadingSpinner() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner} />
      <p>Loading...</p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #ddd",
    borderTop: "4px solid #d32f2f",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};
