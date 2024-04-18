import { useState } from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function SearchFilter(){
  const [active,setActive]=useState(false)
  const openSelect=()=>{
    setActive(active===false ? true : false)
  }
    return(
<div className="w-[20%] p-[10px] flex flex-col gap-[15px] items-center">
<div className="select-container w-[200px]">
    <div className="select-header relative border-[1px] flex justify-between rounded-[5px] border-[#EBEDF3] p-[5px]">
      <h1>Choose make</h1>
      <ArrowDropDownIcon onClick={openSelect} className="bg-[#EBEDF3] absolute h-full w-[30px] right-0 top-0"/>
    </div>
    <div className={`${active===true ? "select-body transition-all duration-500 border-[1px] border-[#EBEDF3] scroll rounded-[5px]  mt-2 h-[300px] overflow-y-scroll" : "hidden"}`}>
        <ul>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Huawei</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Samsung</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Xiaomi</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Iphone</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Sony</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Oppo</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Nokia</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Motorola</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Vertu</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Xperia</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Realme</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Infinix</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Iphone</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Sony</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Oppo</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Nokia</li>
        </ul>
    </div>
</div>
{/*Second select dropdown */}
<div className="select-container w-[200px]">
    <div className="select-header relative border-[1px] flex justify-between rounded-[5px] border-[#EBEDF3] p-[5px]">
      <h1>Choose model</h1>
      <ArrowDropDownIcon onClick={openSelect} className="bg-[#EBEDF3] absolute h-full w-[30px] right-0 top-0"/>
    </div>
    <div className={`${active===true ? "select-body transition-all duration-500 border-[1px] border-[#EBEDF3] scroll rounded-[5px]  mt-2 h-[300px] overflow-y-scroll" : "hidden"}`}>
        <ul>
        <li className="hover:bg-[#EBEDF3] p-[5px]">Huawei</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Samsung</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Xiaomi</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Iphone</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Sony</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Oppo</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Nokia</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Motorola</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Vertu</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Xperia</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Realme</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Infinix</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Iphone</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Sony</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Oppo</li>
            <li className="hover:bg-[#EBEDF3] p-[5px]">Nokia</li>
        </ul>
    </div>
</div>
</div>
    )
}
export default SearchFilter