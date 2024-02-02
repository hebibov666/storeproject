import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
export const storetypes=[
    {
        name:"Men store",
        category:"Men"
    },
    {
        name:"Women store",
        category:"Women"
    },
    {
        name:"Telephone store",
        category:"Telephone"
    },
    {
        name:"Laptop store",
        category:"Laptop"
    }


];
export const userMenuItems=[
    {
        key:1,
        name:"Favorites",
        href:"/userprofile/favorites",
        icon:<FavoriteBorderOutlinedIcon className='text-[#C5C6C9]'/>
    },
    {
        key:2,
        name:"Orders",
        href:"/userprofile/orders",
        icon:<LocalShippingOutlinedIcon className='text-[#C5C6C9]'/>
    },
    {
        key:3,
        name:"Edit profile",
        href:"/userprofile/editprofile",
        icon:<EditOutlinedIcon className='text-[#C5C6C9]'/>
    },
    {
        key:4,
        name:"Subscribtions",
        href:"/userprofile/subscribtions",
        icon:<SubscriptionsOutlinedIcon className='text-[#C5C6C9]'/>
     
    },
    {
        key:5,
        name:"Log out",
        icon:<LogoutOutlinedIcon className='text-[#C5C6C9]'/>
      
    },
    {
        key:6,
        name:"Delete account",
        href:"/userprofile/deleteuser",
        icon:<DeleteOutlineOutlinedIcon className='text-[#C5C6C9]'/>
       
    }
]

export const logindropdown=[
    {
        key:1,
        name:"Account",
        href:"/userprofile/profile"
    },
    {
        key:1,
        name:"Create store",
        href:"/storepages/createstore"
    }
]