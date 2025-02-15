"use client";
import axios from "axios";
import React, {  useEffect, useState } from "react";
import Star from '@mui/icons-material/StarBorderPurple500Outlined';
import Link from "next/link";
import { useParams } from "next/navigation";
import { product,ProductDetails } from '../../_interfaces/product';

export default function Details() {
   const params =useParams();
   
   
  const [ProductDetails, setProductDetails] = useState<ProductDetails | null>(null);
  const [ProductCategory, setProductCategory] = useState([]);
  const Details =params.Details;
  const category = Array.isArray(Details) ? Details[0]: undefined ;
  const id = Array.isArray(Details) ? Details[1]: undefined ;
  function getProductDetails() {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data)
        setProductDetails(res.data)

      })
      .catch((err) => console.log(err));
  }

  function getCategory(){
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then((res)=>{console.log(res.data)
      setProductCategory(res.data)
    }
    ).catch((err)=>console.log(err)
    )
  }
  useEffect(() => {
    getProductDetails();
    getCategory()
  }, []);
  
  if(ProductDetails){
     return(
    // details

    <>
    
   <div className="flex flex-col md:flex-row p-5 justify-around items-start">
    
  <div className="img w-full md:w-1/4 p-5">
 
    <img src={ProductDetails?.image} className="w-full " alt="" />
  </div>
  <div className="content w-full md:w-2/4 p-5 flex flex-col gap-2">
   <span className="bg-backGery text-Dark p-2 font-semibold w-[50px] text-center  rounded text-[14px]">New!</span>
    <h2 className="font-semibold text-[25px]" >{ProductDetails?.title}</h2>
    <span className="text-textGray" >{ProductDetails?.category}</span>
    <span className="font-semibold text-[25px] text-Dark">{ProductDetails?.price}$</span>
    <p className="text-textGray text-[13px]" >{ProductDetails?.description}</p>
    <span className="flex items-center gap-1">{ProductDetails?.rating?.rate} <Star className="text-Dark !text-[18px]"/></span>
    <button className="btn bg-Dark text-white !rounded my-2"><span className="!animate-pulse block ">Add To Cart</span> </button>
  </div>

  </div>
  <div className="row">


 {
  ProductCategory?.map((product:product)=><div key={product.id} className="item w-full   md:w-1/2 lg:w-1/4 p-0 md:p-3">
  <div className="shadow p-5 rounded-lg ">
    <div className="img flex items-center justify-center ">

    <img src={product.image} className='w-full py-10 h-[200px] object-contain' alt="" />
  </div>
    <span className='font-semibold  block text-lg text-Dark'>{product.title.split(" ").slice(0,3).join(" ")}</span>
    <span className='  block text-[13px] my-3 text-textGray whitespace-break-spaces'>{product.description.split(" ").slice(0,9).join(" ")}...</span>
    <span className='text-Dark block font-semibold  text-[20pxpx] '>{product.price}$</span>
    <Link href={`/ProductDetails/${product.category}/${product.id}`}>
    <button className='btn bg-Dark text-white my-3' >show details</button>
    </Link>
    </div>
  </div>)
 }  </div></>
) 
   
  }
  else{
    return(
      <div className="flex items-center justify-center  h-screen">
        <span className="loader"></span>
    
      </div>
      )

  }

}
