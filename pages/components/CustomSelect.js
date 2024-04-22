import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function CustomSelect({title,options,onClick,selectOption,field,element}){
    return(
        <div onClick={onClick}
        className="relative transition-all duration-500 w-full h-[40px] overflow-hidden">
       <div className="relative h-[40px]  bg-[#1F1F1F] flex justify-between rounded border-[2px] border-[#252525] p-[5px]">
          {element==="input" ? <input type="text" placeholder={title} className='outline-none h-full text-[#9CA3AF] bg-[#1F1F1F]'></input> : <h1 className='text-[#9CA3AF]'>{title}</h1>}
           <ArrowDropDownIcon style={{rotate:"-90deg"}} className="absolute h-full w-[30px] right-0 top-0 text-[#9CA3AF]" />
       </div>
       <ul className=" w-full text-[#9CA3AF] bg-[#1F1F1F] transition-all duration-500 rounded mt-2 h-[250px] scroll overflow-y-scroll">
           {options?.map((car, index) => (
               <li key={index} onClick={() => selectOption(field,car,index)}
                   className="hover:bg-black h-[40px] p-[5px]">{car}</li>
           ))}
       </ul>
   </div>
    )
}
export default CustomSelect