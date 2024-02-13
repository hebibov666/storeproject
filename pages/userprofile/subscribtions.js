import UserLayout from "../layouts/userLayout"
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
function Subscribtions(){
    return(

          <div className="flex flex-col w-[80%] max-[571px]:w-full">
          <div className="bg-[#242B58]  h-[50px] flex pl-4 items-center  max-[571px]:h-[40px]">
                    <h1 className="text-white font-bold text-xl">Subscribtions</h1>
                </div>
                <div className="flex h-full flex-col justify-center items-center max-[571px]:pt-[100px]">
                    <SubscriptionsOutlinedIcon className="text-[100px] max-[450px]:text-[70px] text-[#C8C8C8]"/>
                    <p className="text-[20px] text-[#909090]">No subscribtions yet!</p>
                </div>
          </div>

    )
}
export default Subscribtions