import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/router";
function Header({title}){
    const router = useRouter()
    return(
        <div className="fixed top-0 left-0 z-[1] bg-[#1A1A1A] w-full flex justify-center items-center h-[50px]">
        <ArrowBackIcon onClick={() => { router.push("/")}}  className="absolute text-[#E6E6E6] left-4 cursor-pointer" />
        <h1 className="font-bold text-[#E6E6E6]">{title}</h1>
    </div>
    )
}
export default Header