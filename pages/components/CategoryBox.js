import Link from "next/link"
function CategoryBox({categories}){
    return(
        <>
    {categories.map(category=>{
        return      <Link href="storepages/stores">
            <div className="box flex flex-col h-full rounded-[10px] bg-black hover:bg-orange-600 w-full max-[632px]:w-1/1 sm:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/1">
        <div className="w-full h-auto flex items-center justify-center">
        <img src={category.img} className="rounded-t-[10px] object-cover "></img>
        </div>
        <div className="text-white h-[40px] flex items-start pl-4 p-2 rounded-b-[10px]">
            <h1>{category.title}</h1>
        </div>
        </div>
        </Link>
    })}
    </>
    )
}
export default CategoryBox