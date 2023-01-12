import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('api/products')
      .then(res => res.json())
      .then(data => setProducts(data))

  }, [])

  if (!products) return (<h1>Loading...</h1>);

  return (
    <div>

      <ul className="Menu">
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/'}>
          <li>Products</li>
        </Link>
        <Link to={'/'}>
          <li>Ingyom</li>
        </Link>
        <Link to={'/'}>
          <li>Bingyom</li>
        </Link>
      </ul>
      <div>
        <h1>Products:</h1>
      </div>
      <div className="cardContainer">
        <Link to={'/order'}>
          <div className="card" >
            <div>
              <img src="./musk.jpg" alt="" />
            </div>
            <div>
              <h2>Name: A</h2>
              <h2>In Stock : {products[0].inStock}</h2>
            </div>
          </div>
        </Link>
        <Link to={'/order'}>
          <div className="card" >
            <div>
              <img src="./musk.jpg" alt="" />
            </div>
            <div>
              <h2>Name: B</h2>
              <h2>In Stock : {products[0].inStock}</h2>
            </div>
          </div>
        </Link>
        <Link to={'/order'}>
          <div className="card" >
            <div>
              <img src="./musk.jpg" alt="" />
            </div>
            <div>
              <h2>Name: C</h2>
              <h2>In Stock : {products[0].inStock}</h2>
            </div>
          </div>
        </Link>

      </div>

    </div>
  );
}

export default Home;
