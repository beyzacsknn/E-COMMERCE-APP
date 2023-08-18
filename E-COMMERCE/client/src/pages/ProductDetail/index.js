import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchProductList, fetchProduct } from '../../api';
import {Box, Text, Button} from "@chakra-ui/react";
import moment from "moment";


function ProductDetail() {

    const {product_id} = useParams();

    const { isLoading, isError, data } = useQuery(["product", product_id], () => {
		return fetchProduct(product_id);
	});

    if (isLoading)
        {
            return <div>Loading...</div>
        }

    if (isError)
        {
            return <div>Error...</div>
        }    

        console.log(data)

  return (
    <div className="div">
        <Button colorScheme='pink'  > Add to Basket</Button>
        <Text>Product Detail {product_id}</Text>
        
    </div>
    
  )
}

export default ProductDetail