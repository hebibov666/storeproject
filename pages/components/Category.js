import CategoryBox from "./CategoryBox";
import AnimatedComponent from "../Animated";
import Link from "next/link";
function Category() {
  const categories = [
    {
      img: "./womenbanner.png",
      title: "Women stores",
    },
    {
      img: "./menbanner.png",
      title: "Men stores",
    },
    {
      img: "./phone.png",
      title: "Phone stores",
    },
    {
      img: "./laptop.png",
      title: "Laptop stores",
    },
    {
      img: "./homeproducts.png",
      title: "Hosehold stores",
    },
    {
      img: "./sport.png",
      title: "Sport stores",
    },
    {
      img: "./beauty.png",
      title: "Cosmetic stores",
    },
  ];
  return (
    <div className="flex flex-col pt-[30px]">
      <div className="pl-4">
        <h1 className="font-bold text-[22px]">Select store type</h1>
      </div>
      <div className="grid pt-[10px] grid-cols-auto min-[400px]:grid-cols-2  sm:grid-cols-2 md:grid-cols-2 min-[600px]:grid-cols-2 min-[855px]:grid-cols-3 p-[10px] items-center lg:grid-cols-3 xl:grid-cols-4  gap-4">
      <CategoryBox categories={categories} />
      </div>
    </div>
  );
}
export default Category;
