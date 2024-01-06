
import CategoryBox from "./CategoryBox"
import AnimatedComponent from "../Animated"
function Category(){
    const categories=[
        {
            img:"./womenbanner.png",
            title:"Women stores"
        },
        {
            img:"./menbanner.png",
            title:"Men stores"
        },
        {
            img:"./phone2.png",
            title:"Smartphone stores"
        },
        {
            img:"./laptop2.png",
            title:"Laptop stores"
        }
    ]
    return(
      <div className="flex flex-col pt-[30px]">
        <div className="pl-4">
            <h1 className="font-bold text-[22px]">Select store type</h1>
        </div>
        <div className="grid pt-[10px] grid-cols-1 min-[400px]:grid-cols-2  sm:grid-cols-2 md:grid-cols-2 min-[600px]:grid-cols-2 min-[855px]:grid-cols-3 p-[10px] items-center lg:grid-cols-3 xl:grid-cols-3 gap-4">
<CategoryBox categories={categories}/>
        </div>
      </div>
    )
}
export default Category