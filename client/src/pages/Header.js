const Header = () => {
    const headerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
        backgroundColor: "antiquewhite",
        fontSize: "45px",
      }
  return (
    <div
      style={headerStyle}
    >
      Welcome to our page!
    </div>
  );
};

export default Header;
