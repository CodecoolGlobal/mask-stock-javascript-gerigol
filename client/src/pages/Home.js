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
      <div>
        <h1>Products:</h1>
      </div>
      <Link to={'/order'}>
        <div className="card" style={{ backgroundColor: '#C0C0C0', width: '500px', borderRadius: '30px', marginLeft: '30px' }}>
          <div>
            <img src="./musk.jpg" alt="" style={{ width: '500px', borderRadius: '30px' }} />
          </div>
          <div style={{ padding: '20px' }}>
            <h2>Name: Mask</h2>
            <h2>In Stock : {products[0].inStock}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Home;
