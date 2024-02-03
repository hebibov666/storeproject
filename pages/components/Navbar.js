import { useEffect, useState } from "react"
import Dropdown from "./Dropdown"
import { signIn,signOut,useSession } from "next-auth/react";
import Link from "next/link";
function Navbar(){
const {data:session}=useSession()
  
    return(
        <div className="w-full h-[70px] bg-blue-600 flex items-center justify-between pr-2">
<div className="flex items-center">
    <h1 className="text-xl text-white font-bold pl-2">Store</h1>
</div>
<div className="flex gap-[10px] items-center">
    <button className="create bg-white text-black rounded-[5px] h-[30px] p-[5px] flex items-center justify-center">Create store</button>
    {session?.user ? (
     <Link href="/userprofile/layout">
            <img className="w-[40px] h-[40px] rounded-full object-cover" src={session?.user.image}></img>
     </Link>
    ) : (<Dropdown/>)}
</div>
        </div>
    )
}
export default Navbar