const Header = () => {
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "10vh",
    backgroundColor: "#333333",
    fontSize: "45px",
    fontWeight: "bold",
    color: 'white'
  };
  return (
    <div style={headerStyle}>
      <span>Welcome to our page!</span>
    </div>
  );};

export default Header;
