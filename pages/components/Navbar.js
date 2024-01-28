import Dropdown from "./Dropdown"

function Navbar(){
    return(
        <div className="w-full h-[50px] bg-blue-600 flex items-center justify-between pr-2">
<div className="flex items-center">
    <h1 className="text-xl text-white font-bold pl-2">Store</h1>
</div>
<div className="flex gap-[10px]">
    <Dropdown/>
</div>
        </div>
    )
}
export default Navbar