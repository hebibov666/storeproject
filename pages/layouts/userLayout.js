import { useRouter } from "next/router";
import Profile from "../userprofile/profile";
function UserLayout({children}){
    return(
<div className="flex flex-col w-full">
    <div className="flex max-[571px]:flex-col gap-[0px]">
   <Profile/>
    {children}
   </div>
</div>
    )
}
export default UserLayout