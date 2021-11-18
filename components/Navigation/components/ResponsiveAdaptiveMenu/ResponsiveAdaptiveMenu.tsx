import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';




const ResponsiveAdaptiveMenu: FC = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
                sx={{ display: { md: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                sx={{
                    '& .MuiPaper-root': {
                        display: 'flex',
                        width: '200px',
                        marginTop: '9px',
                        marginLeft: '-39px',
                    }
                }}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link href={`/profile`} passHref>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                            <Typography sx={{ ml: '1rem' }}>
                                Profile
                            </Typography>
                        </ListItemIcon>
                    </MenuItem>
                </Link>
                <Link href={`/shopping-cart`} passHref>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                            <Typography sx={{ ml: '1rem' }}>
                                Shopping Cart
                            </Typography>
                        </ListItemIcon>
                    </MenuItem>
                </Link>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <LogoutIcon />
                        <Typography sx={{ ml: '1rem' }}>
                            Logout
                        </Typography>
                    </ListItemIcon>
                </MenuItem>
            </Menu>
        </>
    );
};

export default ResponsiveAdaptiveMenu;