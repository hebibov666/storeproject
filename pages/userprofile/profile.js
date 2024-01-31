import { useEffect,useState } from "react"
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
function Profile(){
  const user=useSelector(state=>state.category.user)

    return(
<div className="w-full   overflow-hidden z-[999] flex flex-col gap-[15px] bg-white">
<div className="max-[480px]:bg-[#2A2B2E] w-full max-[480px]:pb-[15px]">
<div className="flex items-center justify-center pt-[40px] pl-4">
<img src={user?.image} className="bg-gray-500 border-2 border-black h-[120px] w-[120px] rounded-full"></img>
</div>
<div className="flex justify-start max-[480px]:text-white flex-col gap-[10px] items-center pl-4">
<h1 className="text-xl">{user?.username}</h1>
<h1 className="text-xl">{user?.email}</h1>
</div>
</div>
<UserMenu/>
</div>
    )
}
export default Profile