const Header = () => {
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "10vh",
    backgroundColor: "antiquewhite",
    fontSize: "45px",
    fontWeight: "bold",
  };
  return (
    <div style={headerStyle}>
      <span>Welcome to our page!</span>
    </div>
  );};

export default Header;
