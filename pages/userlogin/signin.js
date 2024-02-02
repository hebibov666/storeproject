import Link from "next/link";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/router";
import * as Yup from "Yup";
function Signin() {
  const router = useRouter();
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = async (values, e) => {
    const payload = {
      username: values.username,
      password: values.password,
    };
    try {
      const response = await axios.post("/api/userSignIn", payload);
      if (!response.status === 200) {
        console.log("error");
      }
      // API'den gelen JWT token'ını alın
      var jwtToken = response.data.data.token;

      // Cookie'yi oluşturun
      document.cookie =
        "jwtToken=" +
        jwtToken +
        "; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/";
        const userData={
          username:response.data.data.username,
         email:response.data.data.email,
        image:response.data.data.image,
        }
      localStorage.setItem("user", JSON.stringify(userData));
      router.push("/userprofile/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Please enter username"),
    password: Yup.mixed().required("Please enter password"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="banner w-full overflow-hidden pt-[60px] pb-[50px] flex items-center justify-center h-[100vh]">
      <div className=" relative max-[480px]:w-[90%] max-[640px]:w-[60%] overflow-hidden flex bg-[#F8F8F8] p-[20px] flex-col items-center gap-[30px] w-[40%]">
        <Link href="/">
          <ArrowCircleLeftIcon
            className="arrow absolute text-white bg-blue-600 top-2 left-2 rounded-full shadow-sm shadow-black"
            fontSize="large"
          ></ArrowCircleLeftIcon>
        </Link>
        <div className="z-[1]">
          <h1 className="text-xl font-bold">Sign In</h1>
        </div>
        <div className="flex flex-col items-center w-full gap-[20px]">
          <form
            onSubmit={formik.handleSubmit}
            className="flex z-[1] flex-col gap-[20px] w-full items-center"
          >
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="User name"
              name="username"
              className="p-2 w-full border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
            ></input>
            {formik.errors.username ? (
              <p className="w-full pl-[5px] text-red-400 mt-[-15px]">
                {formik.errors.username}
              </p>
            ) : null}
            <input
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              className="p-2 w-full border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
            ></input>
            {formik.errors.password ? (
              <p className="w-full pl-[5px] text-red-400 mt-[-15px]">
                {formik.errors.password}
              </p>
            ) : null}
            <button
              type="submit"
              className="p-2 w-full bg-[#0B5CFF] font-bold border-2 border-white text-white  rounded-[7px] outline-none h-[40px]"
            >
              Login
            </button>
          </form>
          <div className="flex gap-[10px] w-full justify-end pr-2">
            <h1>Dont have a account?</h1>
            <Link href="/userlogin/signup">
              <p className="text-blue-500 font-bold">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signin;
