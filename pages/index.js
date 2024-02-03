import { useEffect,useState } from "react";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Category/>
    </main>
  );
}
