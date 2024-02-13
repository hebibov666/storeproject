import { useState } from "react";
import { Formik, useFormik } from "formik";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import Image from "next/image";
import axios from "axios";
import { resizeImage } from "@/lib/utils";
import Alert from "../components/alertcomponents/SuccessAlert";
import UserLayout from "../layouts/userLayout";

function EditProfile() {
  const user = useSelector((state) => state.category.user);
  const [update,setUpdate]=useState(false)
  const [image, setImage] = useState("/nouser.jpg");
  const initialValues = {
    username: "",
    email: "",
    file: null,
  };

  const onSubmit = async (values, e) => {
    const payload = {
      username: values.username,
      email: values.email,
      image: image,
    };

    // console.log(newData);

    try {
      const jwtToken = Cookies.get("jwtToken");
      console.log(jwtToken);
      const response = await axios.post("/api/updateUser", {
        newData: JSON.stringify(payload),
      },
      );
      console.log(response);
      if (response.status === 200) {
        const newJwtToken = response.data.data.newToken;
  
        // Cookie'yi güncelleyin
        document.cookie = "jwtToken=" + newJwtToken + "; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/";
        const userData={
          username:response.data.data.data.name,
         email:response.data.data.data.email,
        image:response.data.data.data.image,
        }
      localStorage.setItem("user", JSON.stringify(userData));
      } else {
        console.log("Error updating user information");
      }
    } catch (error) {
      console.log(error);
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
        setImage(() => resizedFile);
      } catch (error) {
        console.log(error);
        return;
      }
    };
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
      <div className="flex flex-col w-[80%] max-[571px]:w-full gap-[10px]">
        <div className="bg-[#242B58]   h-[50px] flex pl-4 items-center  max-[571px]:h-[40px]">
          <h1 className="text-white font-bold text-xl">Edit Profile</h1>
        </div>
        <div className="flex relative justify-center   pb-[50px]">
         <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col w-[80%] gap-[20px] pt-[50px]"
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
            <input
              onChange={formik.handleChange}
              name="username"
              value={formik.values.username}
              placeholder="Username"
              className="p-2 w-full border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
            ></input>
            <input
              onChange={formik.handleChange}
              name="email"
              value={formik.values.email}
              placeholder="Email"
              className="p-2 w-full border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
            ></input>
            <button
              type="submit"
              className="bg-black text-white w-[150px] flex items-center justify-center rounded-[5px] h-[40px] font-bold"
            >
              Save
            </button>
          </form>
        </div>
      </div>
  
  );
}
export default EditProfile;
