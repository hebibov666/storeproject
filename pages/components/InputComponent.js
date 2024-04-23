function Input({ type, placeholder, name, onChange, value, error,onlyNumber}){
    return(
        <>
        <input
        type={type}
        placeholder={placeholder}
        className="number w-full text-[#ffffffd5] bg-[#111111] outline-none p-[3px] h-[40px]  pl-2 rounded-[5px]"
        name={name}
        onChange={onChange}
        value={value}
        onInput={onlyNumber} 
    >
    </input>
    {error && <div className="w-full mt-[-10px] pl-[2px] text-start text-[#F77462]">{error}</div>}
    </>
    )
}
export default Input