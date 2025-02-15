export type product ={
    id:string ,
    image:string,
    title:string,
    description:string,
    price:string,
    category:string
}  
export type ProductDetails ={
    image:string,
    title:string,
    description:string,
    price:string,
    category:string,
    rating:Rating
}  

type Rating ={
    rate:string
}