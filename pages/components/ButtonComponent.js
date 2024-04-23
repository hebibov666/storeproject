function Button({text,type,onClick,background}){
    return(
        <button
        onClick={onClick}
        type={type}
        style={{background:`${background}`}}
className={`text-white font-bold w-full p-[3px] h-[40px] flex items-center justify-center rounded-[5px]`}
>{text}</button>
    )
}
export default Button