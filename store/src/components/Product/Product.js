import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import './Product.css';
function Product() {
    const [products, setProducts]=useState([]);
    const [all ,setAll]=useState([]);
    const getProducts=async()=>{
        try {
            await axios.get('http://localhost:4000/all').then(res=>{
                setProducts(res.data);
                setAll(res.data);
                console.log(res.data);
                // setBrand(Array.from(new Set(res.data)));

            }).catch(err=>console.log(err));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getProducts();
    },[]);
    let brands=Array.from(new Set(products.map((item)=>item.brandName)));
    brands.unshift('All');
    const filterCategories=(name)=>{
        if(name==='All'){
            setProducts(all);
        }
        else{
        let categores=products.filter((item)=>item.brandName===name);
           setProducts(categores);
        };
    };

  return (
    <div className='products section__padding'>
    <ul>
      {brands&&brands.map((product,index)=>{
        return <li key={index} onClick={()=>filterCategories(product)}>{product}</li>
      })} 
    </ul>
    <div className='cards'>
        {products&&products.map((product,index)=><Card imageUrl={product.imageUrl} title={product.brandName} description={product.name} price={product.price} key={index}/>)}
    </div>
    </div>
  )
}

export default Product