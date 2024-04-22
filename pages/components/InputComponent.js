function Input({ type, placeholder, name, onChange, value, error }){
    return(
        <>
        <input
        type={type}
        placeholder={placeholder}
        className="w-full text-[#E6E6E6] bg-[#1A1A1A] outline-none p-[3px] h-[40px]  pl-2 rounded-[5px]"
        name={name}
        onChange={onChange}
        value={value}
    
    >
    </input>
    {error && <div className="w-[90%] text-start text-[#AB0003]">{error}</div>}
    </>
    )
}
export default Input