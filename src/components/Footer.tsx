export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        borderTop: "1px solid #eee",
        marginTop: "2rem",
        textAlign: "center",
      }}
    >
      &copy; {new Date().getFullYear()} My PWA App
    </footer>
  );
}
