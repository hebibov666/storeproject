function Register(){
    return(
        <div className="banner w-full pt-[60px] pb-[50px] flex items-center justify-center h-full">
<div className=" relative overflow-hidden flex bg-[#F8F8F8] p-[20px] flex-col items-center gap-[30px] w-[40%]">
    <div className="z-[1]">
        <h1 className="text-xl font-bold">Create a store</h1>
    </div>
    <div className="flex flex-col items-center w-full">
        <form className="flex z-[1] flex-col gap-[20px] w-full">
            <input type="text" placeholder="Store name" className="p-2  border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"></input>
            <input type="email" placeholder="Your email adress" className="p-2  border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"></input>
        <select className="p-2 text-[#a9a9a9] border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]">
            <option hidden>Select store type</option>
            <option>Male</option>
            <option>Female</option>
        </select>
        <input type="text" placeholder="Store city adress" className="p-2  border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"></input>
        <label for="fileInput" className="p-2 text-[#a9a9a9] bg-white border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]" >Select store profile photo:</label>
    <input type="file" id="fileInput" class="hidden" />
        <textarea placeholder="Store description" className="p-2 min-w-full max-w-full min-h-[160px] max-h-[160px] border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"></textarea>
        <button type="submit"  className="p-2 bg-[#0B5CFF] font-bold border-2 border-white text-white  rounded-[7px] outline-none h-[40px]">Create</button>
        </form>

    </div>

</div>
        </div>
    )
}
export default Register