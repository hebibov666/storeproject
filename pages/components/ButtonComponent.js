function Button({text,type,onClick}){
    return(
        <button
        onClick={onClick}
        type={type}
className="bg-blue-600 text-white font-bold w-[90%] p-[3px] h-[40px] flex items-center justify-center rounded-[5px]"
>{text}</button>
    )
}
export default Button