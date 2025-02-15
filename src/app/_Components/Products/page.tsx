'use client'
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Link from 'next/link';
// import {product} from 'interfaces/product.ts'
import { product } from '../../_interfaces/product';

export default function Products () {
  const [products, setproducts] = useState([])
    function getProducts(){
        axios.get('https://fakestoreapi.com/products').
        then((res)=>{console.log(res.data)
        
          setproducts(res.data)})
        .catch((err)=>console.log(err)
        )
        
    }
    
    useEffect(()=>{
        getProducts()
    },[])

  return (
    <div className='row '>
      {products.map((product:product)=> <div key={product.id} className="item w-full   md:w-1/2 lg:w-1/4 p-0 md:p-3">
      <div className="shadow p-5 rounded-lg ">
        <div className="img ">

        <img src={product.image} className='w-full py-10 h-[200px] object-contain' alt="" />
      </div>
        <span className='font-semibold  block text-lg text-Dark'>{product.title.split(" ").slice(0,3).join(" ")}</span>
        <span className='  block text-[13px] my-3 text-textGray whitespace-break-spaces'>{product.description.split(" ").slice(0,9).join(" ")}...</span>
        <span className='text-Dark block font-semibold  text-[20pxpx] '>{product.price}$</span>
        <Link href={`ProductDetails/${product.category}/${product.id}`}>
        <button className='btn bg-Dark text-white my-3' >show details</button>
        </Link>
        </div>
      </div>
      

      )}
    </div>
  )
}
