import Layout from "./layout"
import { useFormik } from "formik"
import axios from "axios"
import Cookies from "js-cookie";
import { useRouter } from "next/router";
function DeleteUser(){
    const router=useRouter()
    const initialValues={
        password:"",
    }
    const onSubmit = async (values, e) => {
        const payload = {
          password: values.password,
        };
        try {
            const jwtToken = Cookies.get("jwtToken");
          const response = await axios.post("/api/deleteUser", payload, {
            headers: {
                jwttoken:jwtToken,
            },
          });
          if (!response.status === 200) {
            console.log("error");
          }
          Cookies.remove("jwtToken");
          localStorage.removeItem("user");
          router.push("/");
        } catch (error) {
          console.log(error);
        }
      };
    const formik=useFormik({
        initialValues,
        onSubmit
    })
    return(
        <Layout>
        <div className="flex flex-col gap-[10px] w-[80%] max-[571px]:w-full">
        <div className="bg-white border-2 border-[#E2E2E2] h-[50px] flex pl-4 items-center max-[571px]:h-[40px]">
                  <h1 className="text-black font-bold text-xl">Delete account</h1>
              </div>
              <div className="flex flex-col pt-[50px] border-2 border-[#E2E2E2] pb-[50px]">
                <h1 className="pl-4">Plaese enter a password for continue</h1>
              <form onSubmit={formik.handleSubmit} className="flex w-[80%] pt-[10px] pl-4 justify-center flex-col gap-[20px]">
              <input type="password" onChange={formik.handleChange} name="password" value={formik.values.password} placeholder="Enter password"  className="p-2 w-full border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"></input>
             <button type="submit" className="bg-red-600 w-[150px] flex items-center justify-center rounded-[5px] h-[40px] font-bold text-white">Delete</button>
              </form>
              </div>
        </div>
     </Layout>
    )
}
export default DeleteUser