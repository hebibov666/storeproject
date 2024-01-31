import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { userMenuItems } from '@/lib/constants/categoryVariables';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function UserMenu() {
  return (
    <div className='flex max-[480px]:rounded-t-[15px] noscroll flex-col min-[480px]:p-[5px] min-[480px]:flex-row w-full pl-4 max-[480px]:pl-0 gap-[15px] overflow-scroll min-[480px]:gap-[30px]   mt-[30px] max-[480px]:mt-[5px]'>
      {userMenuItems.map(item => {
        const menuItemContent = item.href ? (
          <Link href={item.href}>
            <li className='w-auto flex justify-start shrink-0 h-[40px] max-[480px]:h-[50px] max-[480px]:border-none list-none border-[1px] border-grey-600 flex p-3 max-[480px]:pr-0 max-[480px]:pl-4 pr-6 pl-6 items-center'>
             {item.icon}
              <h1 className={`${item.key === 7 ? "text-red-600 text-start w-full  font-bold text-xl" : "pl-4 text-start w-full text-black text-xl"}`}>
                {item.name}
              </h1>
              <ArrowForwardIosIcon className='min-[480px]:hidden text-[#C5C6C9]'></ArrowForwardIosIcon>
            </li>
          </Link>
        ) : (
          <li className='w-auto list-none flex max-[480px]:h-[50px] justify-between shrink-0 max-[480px]:border-none h-[40px] max-[480px]:pr-0 pr-6 pl-6  max-[480px]:pl-4 border-[1px] border-grey-600 flex items-center' key={item.key}>
           {item.icon}
            <h1 className={`${item.key === 6 ? "text-red-600 text-start w-full pl-4  font-bold text-xl w-full" : "pl-4 text-start w-full text-black text-xl"}`}>
              {item.name}
            </h1>
            <ArrowForwardIosIcon className='min-[480px]:hidden  text-[#C5C6C9]'></ArrowForwardIosIcon>
          </li>
        );

        return menuItemContent;
      })}
    </div>
  );
}

export default UserMenu;
