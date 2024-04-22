import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CustomSelect({ title, options, selectOption, field, element, header,active }) {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    const handleInputClick = (e) => {
        e.stopPropagation(); // Bu, input tıklandığında toggleClass'ın çalışmasını engeller
    };

    return (
        <div onClick={toggleClass} className={`${active===false ? "pointer-events-none bg-black" : null } relative transition-all duration-500 w-full h-[40px] overflow-hidden ${isActive ? "active-select" : ""}`}>
            <div className={`relative h-[40px] ${active===false ? "bg-[#383838]" : "bg-[#1F1F1F]" }  flex justify-between rounded-[5px] border-[2px] border-[#252525] p-[5px]`}>
                <h1 className='text-[#9CA3AF]'>{title}</h1>
                <ArrowDropDownIcon className="w-[30px] text-[#9CA3AF]" />
            </div>
            <div className='menu-container min-[552px]:mt-[10px]'>
                <div className='mobile flex flex-col'>
                    <div className='flex flex-col items-center justify-center gap-[10px]  h-auto bg-[#1F1F1F] rounded-t-[10px] pt-[10px] pb-[15px]'>
                        <sapn className="min-[552px]:hidden bg-white rounded-[10px] w-[60px] h-[5px] flex"></sapn>
                        <h1 className={`min-[552px]:hidden text-white select-header-title`}>{header}</h1>
                        {element === "input" ? <input type="text" placeholder="Axtar..." className='outline-none w-[95%] h-[40px] min-[552px]:w-[98%] rounded-[5px] p-[5px] text-[#9CA3AF] bg-black' onClick={handleInputClick}></input> : null}
                    </div>
                    <ul className={`w-full bg-[#1F1F1F] transition-all duration-500 rounded h-[250px] scroll overflow-y-scroll ${isActive ? "" : "hidden"}`}>
                        {options?.map((option, index) => (
                            <li key={index} onClick={() => selectOption(field, option, index)}
                                className="cursor-pointer hover:text-white flex items-center text-[#9CA3AF] border-b-[1px] border-[#111111] text-[18px] h-[45px] p-[5px] pl-[10px]">{option}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CustomSelect;
