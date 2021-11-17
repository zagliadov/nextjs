import React, { FC } from 'react';
import MenuList from '@mui/material/MenuList';
import Link from 'next/link';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';


const AdaptiveMenu: FC = () => {


    return (
        <MenuList sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href={`/profile`} passHref>
                <MenuItem>
                    <ListItemIcon sx={{ color: 'inherit' }}>
                        <AccountCircleIcon />
                        <Typography sx={{ ml: '1rem' }}>
                            Profile
                        </Typography>
                    </ListItemIcon>
                </MenuItem>
            </Link>
            <Link href={`/shopping-cart`} passHref>
                <MenuItem>
                    <ListItemIcon sx={{ color: 'inherit' }}>
                        <ShoppingCartIcon />
                        <Typography sx={{ ml: '1rem' }}>
                            Shopping Cart
                        </Typography>
                    </ListItemIcon>
                </MenuItem>
            </Link>
            <MenuItem>
                <ListItemIcon sx={{ color: 'inherit' }}>
                    <LogoutIcon />
                    <Typography sx={{ ml: '1rem' }}>
                        Logout
                    </Typography>
                </ListItemIcon>
            </MenuItem>
        </MenuList>
    );
};

export default AdaptiveMenu;