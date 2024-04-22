import { useEffect,useState } from "react";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";
export default function Home() {
  return (
    <main>
    <Navbar/>
    <SearchFilter/>
    </main>
  );
}
