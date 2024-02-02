import Link from "next/link";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useFormik } from "formik";
import * as Yup from "Yup";
import axios from "axios";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { resizeImage } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/router";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [image, setImage] = useState("/nouser.jpg");
const router=useRouter()
  const initialValues = {
    username: "",
    email: "",
    password: "",
    file: null,
  };
  const onSubmit = async (values, e) => {
    const payload = {
      username: values.username,
      email: values.email,
      password: values.password,
      file: image != "/nouser.jpg" ? image : undefined,
    };

    try {
      setLoading(true);
      const response = await axios.post("/api/adduser", payload);
      if (!response.status === 200) {
        console.log("Xeta");
      }
    router.push("/")
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const resizeImageAndSet = (imageFile) => {
    if (imageFile && !imageFile.type.startsWith("image/")) {
      console.log("Error file is not an image");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = async (event) => {
      const imageDataUrl = event.target?.result?.toString() || "";

      try {
        const resizedFile = await resizeImage(imageDataUrl);
        setImage(resizedFile);
      } catch (error) {
        console.log(error);
        return;
      }
    };
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email adress").required("Required"),
    password: Yup.mixed().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

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
              // className="nouser p-2 text-[#a9a9a9] bg-white border-2 border-[#F0F0F0] rounded-full outline-none h-[100px] w-[100px]"
            >
              <Image
                src={image}
                width={100}
                height={100}
                className="rounded-full"
                alt="User Profile Picture"
              />
            </label>
            <input
              type="file"
              id="fileInput"
              name="file"
              accept=".jpg, .jpeg, .png"
              onChange={(event) => {
                const selectedFile = event.currentTarget.files[0];
                formik.setFieldValue("file", selectedFile);
                resizeImageAndSet(selectedFile);
              }}
              className="hidden"
            />
            {error && <p className="w-full pl-[5px]">{error}</p>}
            <input
              type="text"
              placeholder="User name"
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              className="p-2 w-full border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
            ></input>
            {formik.errors.username ? (
              <p className="w-full pl-[5px] text-red-400 mt-[-15px]">
                {formik.errors.username}
              </p>
            ) : null}
            <input
              type="email"
              placeholder="Email address"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              className="p-2 w-full  border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
            ></input>
            {formik.errors.email ? (
              <p className="w-full pl-[5px] text-red-400 mt-[-15px]">
                {formik.errors.email}
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
              className="p-2 h-[45px] flex items-center justify-center w-full bg-[#0B5CFF] font-bold border-2 border-white text-white  rounded-[7px] outline-none"
            >
              {loading === true ? (
                <CircularProgress
                  className="text-white mt-[-10px]"
                  fontSize="small"
                />
              ) : (
                <h1>Create account</h1>
              )}
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
