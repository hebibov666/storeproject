import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
function Navbar(){
    return(
        <div className="bg-white shadow-sm shadow-black rounded-[15px] fixed w-[90%] z-[9999] top-[20px] left-[50%] translate-x-[-50%] h-[60px] flex justify-between p-[5px]">
<div className="flex items-center">
    <img src="./logo.png"></img>
</div>
<div className='flex items-center'>
  <Link href="./userPages/signUp">
  <AccountCircleIcon fontSize='large' className='text-[#8A2BE2]'/>
  </Link>
</div>
        </div>
    )
}
export default Navbar