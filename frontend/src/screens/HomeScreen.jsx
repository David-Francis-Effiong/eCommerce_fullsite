import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  // Local state to store products fetched from the backend
  const [products, setProducts] = useState([]);

  // useEffect hook to fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from the proxied backend API
        const { data } = await axios.get('/api/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {/* Iterate over products array and render a Product component for each */}
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
