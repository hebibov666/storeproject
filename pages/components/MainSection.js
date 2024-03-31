import SliderSection from "./Slider"

function MainSection(){
    return(
        <div className="w-full flex gap-[20px] min-h-[100vh]">
<div className="flex w-[50%] items-center justify-center pl-[30px]">
    <p className="max-[640px]:text-2xl lg:text-4xl sm:text-4xl text-start font-bold w-full">
Avtomobil axtarırsınız?<br></br>
<b className="text-[#8A2BE2]">Furious</b> ilə Mükəmməl Avtomobilinizi kəşf edin</p>
</div>
<SliderSection/>
        </div>
    )
}
export default MainSection