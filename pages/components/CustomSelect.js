import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function CustomSelect({title,options,onClick,selectOption,field,element}){
    return(
        <div onClick={onClick}
        className="relative transition-all duration-500 w-full h-[40px] overflow-hidden">
       <div className="relative h-[40px]  bg-[#1F1F1F] flex justify-between rounded border-[2px] border-[#252525] p-[5px]">
          {element==="input" ? <input type="text" placeholder={title} className='outline-none h-full text-[#9CA3AF] bg-[#1F1F1F]'></input> : <h1 className='text-[#9CA3AF]'>{title}</h1>}
           <ArrowDropDownIcon  className="w-[30px] text-[#9CA3AF]" />
       </div>
      <div className='mobile flex flex-col'>
      <div className='flex flex-col items-center justify-center gap-[15px] h-[70px] bg-[#1F1F1F] rounded-t-[10px] mt-[10px]'>
        <h1 className='text-white select-header-title'>Ban növü</h1>
      </div>
      <ul className=" w-full  bg-[#1F1F1F] transition-all duration-500 rounded h-[250px] scroll overflow-y-scroll">
           {options?.map((car, index) => (
               <li key={index} onClick={() => selectOption(field,car,index)}
                   className="hover:bg-black flex items-center text-[#9CA3AF] border-b-[1px] border-black text-[18px] h-[45px] p-[5px]">{car}</li>
           ))}
       </ul>
      </div>
   </div>
    )
}
export default CustomSelect