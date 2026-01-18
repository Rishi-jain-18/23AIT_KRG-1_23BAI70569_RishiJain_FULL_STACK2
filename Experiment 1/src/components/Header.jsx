const Header = ({ title }) => {
  return (
    <header
      style={{
        backgroundColor: "#2e7d32",   // dark green
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 30px",
        borderRadius: "10px"
      }}
    >
      <h1 style={{ margin: 0 }}>{title}</h1>

      {/* Optional navigation items */}
      <nav style={{ display: "flex", gap: "20px" }}>
      </nav>
    </header>
  );
};

export default Header;
