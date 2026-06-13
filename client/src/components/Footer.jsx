export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed &amp; Built with ❤️ by <span>Puvaneshwaran M</span> · {new Date().getFullYear()}
      </p>
      <p style={{ marginTop: 8, fontSize: '0.8rem' }}>
        React.js · Node.js · Express.js · Framer Motion
      </p>
    </footer>
  );
}
