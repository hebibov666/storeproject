import AboutUs from "./components/AboutUs";
import Category from "./components/Category";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function Home() {
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
