import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CustomSelect({ title, options,selectOption,field,element,header,active}){
{/*
  // title: Seçim qutusunun üst hissəsində göstəriləcək başlıq mətni.
 // options: İstifadəçinin seçə biləcəyi seçimlərin siyahısı.
 // selectOption: İstifadəçinin seçim etdiyi zaman field option və index dəyərlərini ana komponentə ötürür. Və formikdə uyğun fieldin dəyərini dəyişir
// field: Ul listdən  seçilən seçimin formikdə hansı fieldi dəyişdirəcəyini göstərmək üçün istifadə olunur.
 // element: Seçim qutusunun başlığında göstəriləcək elementin növünü göstərir (input və ya h1).
// header: Mobil cihazlarda açılır menünün başlığını göstərir.
 // active: Seçim qutusunun aktiv və ya deaktiv olacağını təyin etmək üçündür.
*/}

    // Seçim qutusunun açılıb bağlanmasını nəzarət etmək üçün bir state.
    const [isActive, setIsActive] = useState(false);

    // Seçim qutusunun açılıb bağlanmasını təmin edən funksiya.
    const toggleClass = () => {
        setIsActive(!isActive);
    };

    // Input elementinə klikləndiyi zaman seçim qutusunun bağlanmasını önləmək üçün istifadə olunan funksiya.
    const handleInputClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div onClick={toggleClass} className={`${active === false ? "pointer-events-none border-0" : null} relative w-full h-[40px] overflow-hidden ${isActive ? "active-select" : " "}`}>
            <div className={`relative h-[40px] ${active === false ? "bg-[#3B3B3B] border-0" : "bg-[#111111]"} pl-2 flex justify-between items-center rounded-[5px] p-[5px]`}>
                <h1 className='text-[#ffffffd5]'>{title}</h1>
                <ArrowDropDownIcon style={isActive === true ? { rotate: "180deg" } : { rotate: "0deg" }} className="w-[30px] transition-all duration-500 text-[#ffffffd5]" />
            </div>
            <div className='menu-container min-[552px]:mt-[10px] h-auto'>
                <div className='mobile bg-[#111111] flex flex-col rounded-t-[10px]'>
                    <div className='flex flex-col items-center justify-center gap-[10px] h-auto pt-[10px] pb-[5px]'>
                        <span className="min-[552px]:hidden bg-white rounded-[10px] w-[60px] h-[5px] flex"></span>
                        <h1 className={`min-[552px]:hidden text-white select-header-title`}>{header}</h1>
                        {element === "input" ? <input type="text" placeholder="Axtar..." className='outline-none w-[95%] h-[40px] min-[552px]:w-[98%] rounded-[7px] p-[5px] text-[#9CA3AF] bg-[#1F1F1F]' onClick={handleInputClick}></input> : null}
                    </div>
                    <ul className={`w-full bg-[#111111] h-auto max-h-[250px] scroll overflow-y-scroll`}>
                        {options?.map((option, index) => (
                            <li key={index} onClick={() => selectOption(field, option, index)}
                                className="cursor-pointer hover:text-[#ffffffd5] flex items-center text-[#9CA3AF] border-b-[1px] border-[#111111] text-[18px] h-[45px] pl-[10px]">{option}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CustomSelect;
