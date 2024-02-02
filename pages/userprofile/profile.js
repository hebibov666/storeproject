import { useEffect,useState } from "react"
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import SettingsIcon from '@mui/icons-material/Settings';
function Profile({showProfile}){
  const user=useSelector(state=>state.category.user)
const [settings,setSettings]=useState(false)
    return(
<div className={`w-[350px]  max-[571px]:w-full h-full  overflow-hidden flex flex-col gap-[15px] bg-white`}>
<div className="bg-[#8A2BE2] relative pb-[10px] flex flex-col items-center w-full max-[480px]:pb-[15px]">
<div className="flex items-center justify-center pt-[20px] pl-4">
<img src={user?.image} className="bg-gray-500 border-2 border-black h-[90px] w-[90px] rounded-full"></img>
</div>
<div className="flex justify-center text-white flex-col gap-[10px] items-center pl-4">
<h1 className="text-[18px] mt-[15px]">{user?.username}</h1>
<h1 className="text-[15px]">{user?.email}</h1>
</div>
<SettingsIcon onClick={()=>{setSettings(true)}} className="text-white font-bold min-[581px]:hidden absolute left-2 bottom-2"/>
</div>
<UserMenu settings={settings} setSettings={setSettings}/>
</div>
    )
}
export default Profile