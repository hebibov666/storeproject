import Link from "next/link";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useFormik } from "formik";
import axios from "axios";
function Signup() {
  const initialValues={
    username:"",
    email:"",
    password:"",
  }
  const onSubmit = async (values, e) => {
    // const formdata = new FormData();
    // formdata.append("username", values.username);
    // formdata.append("email", values.email);
    // formdata.append("password", values.password);

    const payload = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axios.post("/api/adduser", payload);
      if (!response.status === 200) {
        console.log("Xeta");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

const validate=values=>{
  const errors={}
  if(!values.username){
    errors.username="Please enter username"
  }
}
       
  const formik=useFormik({
    initialValues,
    onSubmit,
    validate,
   
  })

  return (
    <div className="banner w-full overflow-hidden pt-[60px] pb-[50px] flex items-center justify-center h-[100vh]">
      <div className=" relative overflow-hidden flex max-[480px]:w-[90%] max-[640px]:w-[60%] bg-[#F8F8F8] p-[20px] flex-col items-center gap-[30px] w-[40%]">
        <Link href="/" className="absolute top-2 left-2">
          <ArrowCircleLeftIcon
            className="arrow absolute text-white bg-blue-600 top-2 left-2 rounded-full shadow-sm shadow-black"
            fontSize="large"
          ></ArrowCircleLeftIcon>
        </Link>
        <div className="z-[1]">
          <h1 className="text-xl font-bold">Sign Up</h1>
        </div>
        <div className="flex flex-col items-center w-full gap-[20px]">
          <form
          onSubmit={formik.handleSubmit}
            // // action="/api/adduser"
            // method="POST"
            className="flex z-[1] flex-col gap-[20px] w-full items-center"
          >
            <label
              htmlFor="fileInput"
              className="nouser p-2 text-[#a9a9a9] bg-white border-2 border-[#F0F0F0] rounded-full outline-none h-[100px] w-[100px]"
            >
              Profile photo:
            </label>
            <input type="file" id="fileInput" name="file" className="hidden" />
            <input
              type="text"
              placeholder="User name"
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              className="p-2 w-full border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
            ></input>
            <input
              type="email"
              placeholder="Email address"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              className="p-2 w-full  border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              className="p-2 w-full border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
            ></input>
            <button
              type="submit"
              className="p-2 h-[45px] w-full bg-[#0B5CFF] font-bold border-2 border-white text-white  rounded-[7px] outline-none"
            >
              Create account
            </button>
          </form>
          <div className="flex gap-[10px] w-full justify-end pr-2">
            <h1>Already have a account?</h1>
            <Link href="/userlogin/signin">
              <p className="text-blue-500 font-bold">Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
