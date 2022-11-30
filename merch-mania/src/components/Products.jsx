import { useState, useEffect } from "react";
import styled from "styled-components"; 
import { popularProducts } from "../data"; 
import Product from "./Product"
import axios from "axios"

const Container = styled.div`
    padding: 20px; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;   
`

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `http://localhost:5001/api/products?category=${cat}` : "http://localhost:5001/api/products"); // search based on query category if not use all products 
        setProducts(res.data);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value))) // filtering products through search query 
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if ((sort === "newest")) {
      setFilteredProducts((prev) => [...prev].sort((b,c) => b.createdAt - c.createdAt) // displaying newest items for sort 
      );
    } else if ((sort === "asc")) {
      setFilteredProducts((prev) => [...prev].sort((b, c) => b.price - c.price) // displaying prices sorting higher
      );
    } else {
      setFilteredProducts((prev) => [...prev].sort((b, c) => c.price - b.price) // displaying lower price 
      );
    }
  }, [sort]); 


    return (
        <Container>
            {cat ? filteredProducts.map((item) => (
                <Product item={item} key={item.id} />
            )) : products.slice(0,8).map((item) => (
              <Product item={item} key={item.id} />
            )) }

        </Container>
    )
}

export default Products; 