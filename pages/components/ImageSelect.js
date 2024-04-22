function ImageSelect(){
    return(
        <>
         <label
                        for="fileInput"
                        className="w-[100px] h-[100px] rounded-full border-[1px] border-[#252525] overflow-hidden">
                        <img src="../nouser.jpg" className="w-full h-full object-cover"></img>
                    </label>
                    <input type="file" id="fileInput" className="hidden"></input>
        </>
    )
}
export default ImageSelect