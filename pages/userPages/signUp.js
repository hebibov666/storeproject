import Link from "next/link"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/router";
import { Formik, useFormik } from "formik"
import * as Yup from "yup"
function SignUp(){
const router=useRouter()
    const initialValues={
        username:"",
        email:"",
        password:"",
        number:"",
        image:null,
    }
    const validationSchema=new Yup.object({
        username:Yup.string().required("Please eter username"),
        email:Yup.string().email().required("Please enter email"),
        number:Yup.string().required("Please enter phone number"),
        password:Yup.mixed().required("Please enter password")
    })
    const formik=useFormik({
        initialValues,
        validationSchema
    })
    return(
        <div className="w-full h-auto min-h-[100vh] flex items-center justify-center max-[552px]:items-start">
<div className="flex border-[2px] border-[#F5F5F5] pb-[50px] shadow-md shadow-[#F5F5F5]  flex-col gap-[20px] items-center w-[50%] max-[552px]:w-full max-[552px]:h-full">
    <div className="relative bg-[#F5F5F5] w-full flex justify-center items-center h-[50px]">
        <ArrowBackIcon onClick={()=>{router.push("/")}} className="absolute left-4 cursor-pointer"/>
<h1 className="font-bold">Sign Up</h1>
    </div>
<form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-[15px] items-center">
<label 
for="fileInput"  
className="w-[100px] h-[100px] rounded-full border-[1px] border-[#E8E8E8] overflow-hidden">
    <img src="../nouser.jpg" className="w-full h-full object-cover"></img>
</label>
        <input type="file" id="fileInput" className="hidden"></input>
<input 
type="text" 
placeholder="Username" 
name="username"
onChange={formik.handleChange}
value={formik.values.username}
className="w-[90%] outline-none p-[3px] h-[40px] border-[2px] border-[#E8E8E8] pl-2 rounded-[5px]">
</input>
{formik.errors.username ? <p className="text-start text-red-400 w-[90%] mt-[-10px] pl-[2px]">{formik.errors.username}</p> : null}
<input 
type="text" 
placeholder="Email" 
name="email"
onChange={formik.handleChange}
value={formik.values.email}
className="w-[90%] outline-none p-[3px] h-[40px]  border-[2px] border-[#E8E8E8] pl-2 rounded-[5px]">
</input>
{formik.errors.email ? <p className="text-start text-red-400 w-[90%] mt-[-10px] pl-[2px]">{formik.errors.email}</p> : null}
<input 
type="text" 
placeholder="Phone number" 
name="number"
onChange={formik.handleChange}
value={formik.values.number}
className="w-[90%] outline-none p-[3px] h-[40px]  border-[2px] border-[#E8E8E8] pl-2 rounded-[5px]">
</input>
{formik.errors.number ? <p className="text-start text-red-400 w-[90%] mt-[-10px] pl-[2px]">{formik.errors.number}</p> : null}
<input 
type="password" 
placeholder="Password" 
name="password"
onChange={formik.handleChange}
value={formik.values.password}
className="w-[90%] outline-none p-[3px] h-[40px]  border-[2px] border-[#E8E8E8] pl-2 rounded-[5px]">
</input>
{formik.errors.password ? <p className="text-start text-red-400 w-[90%] mt-[-10px] pl-[2px]">{formik.errors.password}</p> : null}
<button
className="bg-blue-600 text-white font-bold w-[90%] p-[3px] h-[40px] flex items-center justify-center rounded-[5px]"
>Create account</button>
<Link href="./signIn" className="w-[90%] flex justify-end ">
<p className="w-[90%] text-end text-blue-600">Already have a account? SignIn</p>
</Link>
</form>
</div>
        </div>
    )
}
export default SignUp