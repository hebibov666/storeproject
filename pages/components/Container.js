function Container({children}){
    return(
        <div className="w-full h-auto min-h-[100vh] flex flex-col items-center justify-start gap-[70px] ">
{children}
            </div>
    )
}
export default Container