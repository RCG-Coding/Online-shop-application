import React,{useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProductComponent from './ProductComponent';
import {SetProducts} from '../redux/actions/ProductActions';
import axios from 'axios';

const ProductListing = () => {
    const products = useSelector((state) => state);
    console.log(products);
    const dispatch = useDispatch();

    const fetchProducts = async() => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("products : ", products)
return (
    <div className='ml-24 mt-5 text-xl'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing;