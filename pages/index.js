import { useEffect } from "react";
import AboutUs from "./components/AboutUs";
import Category from "./components/Category";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { setUserData } from "./react-redux/categorySlice";
import { useDispatch } from "react-redux";
import Profile from "./userprofile/profile";
export default function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
    if (typeof window !== 'undefined') {
     const user=JSON.parse(localStorage.getItem("user"))
     dispatch(setUserData(user))
    }
  },[dispatch])
  return (
    <main>
      <Navbar />
      <Category/>
      <Products/>
      <AboutUs/>
      <Introduction/>
    </main>
  );
}
