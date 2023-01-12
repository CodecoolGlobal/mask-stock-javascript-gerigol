import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const h1Style = {
  margin: "15px",
  width: "10%",
};
const centerDiv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  if (!products) return <h1>Loading...</h1>;
  return (
    <div>
      <div style={centerDiv}>
        <h1 style={h1Style}>Products:</h1>
      </div>
      <hr
        style={{
          width: "80%",
          color: "gray",
          backgroundColor: "gray",
          marginTop: "35px",
          marginBottom: "75px",
        }}
      ></hr>
      <div
        className="card"
        style={{
          width: "500px",
          borderRadius: "30px",
          marginLeft: "30px",
        }}
      >
        <div>
          <img
            src="./musk.jpg"
            alt=""
            style={{ width: "500px", borderRadius: "30px" }}
          />
        </div>
        <div
          style={{
            padding: "20px",
            color: "black",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <h3>Really awesome mask</h3>
            <h4>There are only {products[0].inStock} pieces left!</h4>
          </div>

          <div style={{ display: "flex", alignItems:"flex-end"}}>
            <Link to={"/order"} style={{ textDecoration: "none" , marginBottom: "20px"}}>
                <Button variant="contained">
                  Add to cart
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
