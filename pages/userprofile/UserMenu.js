"use client"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { userMenuItems } from '@/lib/constants/categoryVariables';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
function UserMenu({settings,setSettings,setPage}) {
    const router=useRouter()
    const [list,setList]=useState(1)
 const ChangeList=(key)=>{
setList(key)
setPage(key)
 }
  return (
    <div className={`${settings===false ? "max-[571px]:hidden flex w-full  noscroll flex-col   gap-[15px] overflow-scroll min-[480px]:gap-[30px]" : "flex bg-white w-full  h-full max-[571px]:fixed relative  left-0 top-0 z-[999]  noscroll flex-col   gap-[15px] overflow-scroll min-[480px]:gap-[30px]"}`}>
   <div className='text-white flex w-full h-[40px] items-center pl-2 gap-[10px] bg-[#242B58] min-[571px]:hidden'>
   <CloseIcon onClick={()=>{setSettings(false)}} className='font-bold'/>
   <h1 className='text-xl'>Settings</h1>
   </div>
      {userMenuItems.map(item => {
      return  <li onClick={()=>ChangeList(item.key)} className={`${list===item.key ? "bg-[#242B58] text-white" : "bg-white"} w-[100%] hover:bg-[#242B58]  hover:text-white  pr-2 list-none flex max-[480px]:h-[50px] justify-between shrink-0  h-[50px] pl-6  max-[480px]:pl-4 flex items-center`}>
      {item.icon}
       <h1 className={`${item.key === 7 ? "text-red-600 text-start w-full  font-bold text-xl" : "pl-4 text-start w-full  text-xl"}`}>
         {item.name}
       </h1>
       <ArrowForwardIosIcon className='text-[#C5C6C9]'></ArrowForwardIosIcon>
     </li>
      })}
    </div>
  );
}

export default UserMenu;
