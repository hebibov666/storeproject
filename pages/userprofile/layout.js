import { useRouter } from "next/router";
import Profile from "./profile"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Layout({children}){
    const router=useRouter()
    return(
<div className="flex flex-col w-full">
    <div className="flex items-center w-full h-[50px] bg-[#8A2BE2] text-white pl-2 gap-[10px]">
        <ArrowBackIcon onClick={()=>{router.push("/")}} className="font-bold text-[35px]"/>
        <h1 className="text-white font-bold text-xl">My Profile</h1>
    </div>
   <div className="flex max-[571px]:flex-col gap-[10px] p-[5px]">
   <Profile/>
    {children}
   </div>
</div>
    )
}
export default Layout