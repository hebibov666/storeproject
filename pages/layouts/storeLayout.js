import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
function StoreLayout({children}){
    return(
  <div>
     <Navbar/>
    {children}
  </div>
    )
}
export default StoreLayout