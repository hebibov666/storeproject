import { useRouter } from "next/router";
import Profile from "./profile"
function Layout({children}){
    return(
<div className="flex flex-col w-full">
    <div className="flex max-[571px]:flex-col gap-[10px]">
   <Profile/>
    {children}
   </div>
</div>
    )
}
export default Layout