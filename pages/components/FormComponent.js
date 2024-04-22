function Form({children,onSubmit}){
    return(
        <form onSubmit={onSubmit}  className="flex  pb-[50px]   flex-col gap-[20px] items-center w-[50%] max-[552px]:w-[90%] max-[552px]:h-full">
           {children}
            </form>
    )
}
export default Form