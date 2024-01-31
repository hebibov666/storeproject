import { useEffect, useState } from "react"
import Dropdown from "./Dropdown"
import Link from "next/link";
import { useSelector } from "react-redux";
function Navbar(){
  const user=useSelector(state=>state.category.user)
  
    return(
        <div className="w-full h-[70px] bg-blue-600 flex items-center justify-between pr-2">
<div className="flex items-center">
    <h1 className="text-xl text-white font-bold pl-2">Store</h1>
</div>
<div className="flex gap-[10px] items-center">
    <button className="create bg-white text-black rounded-[5px] h-[35px] p-[5px] flex items-center justify-center">Create store</button>
    {user!=null ? <Link href="/userprofile/profile">
    <img className="w-[50px] h-[50px] rounded-full object-cover" src={user?.image}></img>
    </Link>: <Dropdown/>}
</div>
        </div>
    )
}
export default Navbar