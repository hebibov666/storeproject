"use client"
import { useEffect,useState } from "react"
import UserMenu from "./UserMenu";
import { useSession } from "next-auth/react";
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from "react-redux";
import { setUserData } from "../react-redux/categorySlice";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import Favorites from "./favorites";
import Orders from "./orders";
import EditProfile from "./editprofile";
import Subscribtions from "./subscribtions";
import DeleteUser from "./deleteuser";
function Profile(){
  const dispatch=useDispatch()
  const router=useRouter()
 const {data:session}=useSession()
const [settings,setSettings]=useState(false)
const [page,setPage]=useState(1)

const renderComponent=()=>{
    switch (page){
        case 1:
        return(
            <Favorites/>
        )
        case 2:
        return (
            <Orders/>
        )
        case 3:
            return (
                <EditProfile/>
            )
            case 4:
                return (
                    <Subscribtions/>
                )
                case 5:
                    alert("OK")
                case 6:
                    return (
                        <DeleteUser/>
                    )
    }
}
    return(
<div className="w-full flex max-[571px]:flex-col">
<div className={`w-[350px]   max-[571px]:w-full h-auto flex flex-col gap-[15px] bg-white`}>
<div className="bg-[#242B58] relative pb-[30px] flex flex-col items-center w-full max-[480px]:pb-[15px]">
<ArrowBackIcon onClick={()=>{router.push("/")}} className="font-bold text-[35px] absolute top-2 left-2 text-white"/>
<div className="flex items-center justify-center pt-[20px] pl-4">
<img src={session?.user.image} className="bg-gray-500 border-2 border-black h-[90px] w-[90px] rounded-full"></img>
</div>
<div className="flex justify-center pb-[20px] text-white flex-col gap-[10px] items-center pl-4">
<h1 className="text-[18px] mt-[15px]">{session?.user.username}</h1>
<h1 className="text-[15px]">{session?.user.email}</h1>
</div>
<SettingsIcon onClick={()=>{setSettings(true)}} className="text-white font-bold min-[581px]:hidden absolute left-2 bottom-2"/>
</div>
<UserMenu setPage={setPage} settings={settings} setSettings={setSettings}/>
</div>
{renderComponent()}
</div>
    )
}
export default Profile