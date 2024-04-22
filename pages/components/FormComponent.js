function Form({children,onSubmit}){
    return(
        <form onSubmit={onSubmit}  className="flex mt-[70px] min-[552px]:mt-[140px]  pb-[50px] flex-col gap-[20px] items-center justify-center w-[50%] max-[552px]:w-[90%] max-[552px]:h-full">
           {children}
            </form>
    )
}
export default Form