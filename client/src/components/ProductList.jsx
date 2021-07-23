import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const ProductList = props => {
    const { submitState, setSubmitState } = props;

    // Create an empty list of all of our products
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data.allProducts))
            .catch(err => console.log(err))
    }, [submitState]);

    return (
        <ul>
        {products.map((product, i) => {
            return (
                    <li key={i}><Link to={`/products/${product._id}`}>{product.title}</Link></li>
                    )
                })}
        </ul>
    )
}

export default ProductList;