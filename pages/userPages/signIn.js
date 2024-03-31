import Link from "next/link"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/router";
function SignIn(){
    const router=useRouter()
    return(
        <div className="w-full h-[100vh] flex items-center justify-center max-[552px]:items-start">
<div className="flex border-[2px] border-[#F5F5F5] pb-[50px] shadow-md shadow-[#F5F5F5]  flex-col gap-[20px] items-center w-[50%] max-[552px]:w-full max-[552px]:h-full">
    <div className="relative bg-[#F5F5F5] w-full flex justify-center items-center h-[50px]">
    <ArrowBackIcon onClick={()=>{router.push("/")}} className="absolute left-4 cursor-pointer"/>
<h1 className="font-bold">Sign In</h1>
    </div>
<form className="w-full flex flex-col gap-[15px] items-center">
<input 
type="text" 
placeholder="Username" 
className="w-[90%] outline-none p-[3px] h-[40px] border-[2px] border-[#E8E8E8] pl-2 rounded-[5px]">
</input>
<input 
type="password" 
placeholder="Password" 
className="w-[90%] outline-none p-[3px] h-[40px]  border-[2px] border-[#E8E8E8] pl-2 rounded-[5px]">
</input>
<button
className="bg-blue-600 text-white font-bold w-[90%] p-[3px] h-[40px] flex items-center justify-center rounded-[5px]"
>Login</button>
<Link href="./signUp" className="w-[90%] flex justify-end ">
<p className="w-[90%] text-end text-blue-600">Don't have a account? SignUp</p>
</Link>
</form>
</div>
        </div>
    )
}
export default SignIn