import { useEffect,useState } from "react";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import { setUserData } from "./react-redux/categorySlice";
import { useDispatch } from "react-redux";
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
      <Navbar/>
      <Category/>
    </main>
  );
}
