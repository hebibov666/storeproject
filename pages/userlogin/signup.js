import Link from "next/link"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
function Signup(){
  return(
      <div className="banner w-full overflow-hidden pt-[60px] pb-[50px] flex items-center justify-center h-[100vh]">
<div className=" relative overflow-hidden flex bg-[#F8F8F8] p-[20px] flex-col items-center gap-[30px] w-[40%]">
<Link href="/" className="absolute top-2 left-2">
<ArrowCircleLeftIcon className="arrow absolute text-white bg-blue-600 top-2 left-2 rounded-full shadow-sm shadow-black" fontSize="large"></ArrowCircleLeftIcon>
</Link>
  <div className="z-[1]">
      <h1 className="text-xl font-bold">Sign Up</h1>
  </div>
  <div className="flex flex-col items-center w-full gap-[20px]">
      <form className="flex z-[1] flex-col gap-[20px] w-full items-center">
      <label for="fileInput" className="nouser p-2 text-[#a9a9a9] bg-white border-2 border-[#F0F0F0] rounded-full outline-none h-[100px] w-[100px]" >Profile photo:</label>
  <input type="file" id="fileInput" class="hidden" />
          <input type="text" placeholder="User name" className="p-2 w-full border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"></input>
          <input type="email" placeholder="Email adress" className="p-2 w-full  border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"></input>
          <input type="password" placeholder="Password" className="p-2 w-full border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"></input>
      <button type="submit"  className="p-2 h-[45px] w-full bg-[#0B5CFF] font-bold border-2 border-white text-white  rounded-[7px] outline-none">Create account</button>
      </form>
<div className="flex gap-[10px] w-full justify-end pr-2">
<h1 >Already have a account?</h1>
<Link href="/userlogin/signin">
<p className="text-blue-500 font-bold">Sign in</p>
</Link>
</div>
  </div>

</div>
      </div>
  )
}
export default Signup