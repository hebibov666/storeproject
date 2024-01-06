"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
function Products(){
    const [showAll,setShowAll]=useState(false)
    const [products,setProducts]=useState([])
    const router=useRouter()
    const {pathname}=router
useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=20')
    .then(res=>res.json())
    .then(json=>setProducts(json))
    console.log(products)
},[])

const getAllProducts=()=>{
    router.push("/components/Products")
  }

  useEffect(()=>{
    if(pathname=== "/"){
        setShowAll(false)
    }else{
        setShowAll(true)
    }
  },[pathname])
    return(
<div className="flex flex-col p-[20px]">
 <div className="flex justify-between items-center">
  <h1 className="font-bold text-[22px]">Discounted products</h1>
 {showAll===false ?  <p onClick={getAllProducts} className="cursor-pointer">Show all</p> : null}
 </div>
<div className={`noscroll ${showAll===false ? "overflow-scroll" : "flex-wrap"} flex w-full h-auto pt-[20px] pb-[20px]  gap-[10px] p-[20px]`}>
{products.map(product=>{
    return <div className="relative w-[200px] border-2 border-grey-500 shrink-0 h-[300px] flex flex-col">
<span className="absolute bg-red-600 rounded-[5px] flex items-center justify-center text-white w-[50px] left-[3px] top-[3px] font-bold ">20%</span>
<div className="w-full h-[200px] p-[10px]">
    <img src={product.image} className="h-full obejct-cover"></img>
</div>
<div className="flex flex-col p-2 gap-[10px]">
    <h1 className="truncate font-bold">{product.title}</h1>
    <h1 className="text-red-700 font-bold text-[20px]">{product.price + " $"}</h1>
</div>
    </div>
})}
</div>
</div>
    )
}
export default Products