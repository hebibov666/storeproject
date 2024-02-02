import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';
import { logindropdown } from '@/lib/constants/categoryVariables';
function Dropdown(){
  const user=useSelector(state=>state.category.user)
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className="dropdown"
        >
     <PersonIcon fontSize='large'/>
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
        <Link href="/userlogin/signin">
        <MenuItem onClick={handleClose}>Login</MenuItem>
        </Link>
        <Link href="/userlogin/signup">
        <MenuItem onClick={handleClose}>Register</MenuItem>
        </Link>
        </Menu>
      </div>
    )
}
export default Dropdown