import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import React, {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingProducts, gotProducts, fetchingProductsFailed } from '../slice_reducers/productsSlice';
import { selectProducts } from '../slice_reducers/productsSlice';
import './../styles/products.css';
import {Link} from 'react-router-dom';
import LoadingIcon from './LoadingIcon';
import API_Endpoint from './../config/server';

const axios = require('axios');

  
const Products = () => {



   return (
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
              
      </div>
    )
}

export default Products
