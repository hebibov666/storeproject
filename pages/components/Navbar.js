import { useEffect, useState } from "react"
import Dropdown from "./Dropdown"
import { signIn,signOut,useSession } from "next-auth/react";
import Link from "next/link";
import StoreIcon from '@mui/icons-material/Store';
function Navbar(){
const {data:session}=useSession()
  console.log(session)
    return(
        <div className="w-full h-[60px] bg-[#242B58] flex items-center justify-between pr-2">
<div className="flex items-center">
    <h1 className="text-xl text-white font-bold pl-2">Store</h1>
</div>
<div className="w-[35%] flex items-center bg-white pr-[3px]  h-[40px] rounded-[5px] max-[750px]:absolute top-[50px] left-0 max-[750px]:w-full max-[750px]:border-4 border-[#242B58] max-[750px]:rounded-[0px]">
    <input type="text" placeholder="Search product" className="rounded-[10px] outline-none w-full border-white h-[35px] max-[750px]:h-full pl-2"></input>
<button className="bg-[#242B58] text-white h-[35px] max-[750px]:h-[30px] w-[80px] rounded-[5px] max-[750px]:rounded-[0px] font-bold">Axtar</button>
</div>
<div className="flex w-auto gap-[10px] max-[500px]:gap-[0px] items-center">
    <button className="create bg-white hover:bg-transparent hover:text-white max-[500px]:bg-transparent max-[500px]:text-white text-black rounded-[5px] h-[35px] w-[35px] p-[5px] flex items-center justify-center"><StoreIcon fontSize="large"/></button>
    {session?.user ? (
     <Link href="/layouts/userLayout">
            <img className="w-[40px] h-[40px] max-[500px]:w-[35px] max-[500px]:h-[35px] rounded-full object-cover" src={session?.user.image}></img>
     </Link>
    ) : (<Dropdown/>)}
</div>
        </div>
    )
}
export default Navbar