import React, { FC } from 'react';
import ResponsiveAdaptiveMenu from './components/ResponsiveAdaptiveMenu/ResponsiveAdaptiveMenu';
import Link from 'next/link';
import AdaptiveMenu from './components/AdaptiveMenu/AdaptiveMenu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';


const Navigation: FC = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link href={`/`} passHref>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        > <HomeIcon />
                        </IconButton>
                    </Link>
                    {/* ResponsiveAdaptiveMenu displayed on screen xs */}
                    <ResponsiveAdaptiveMenu />
                    {/* AdaptiveMenu displayed on screen xs and higher*/}
                    <AdaptiveMenu />

                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default Navigation;
