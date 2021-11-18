import Navigation from '../Navigation/Navigation';
import {AppBar, Toolbar} from '@mui/material'

export default function Header() {
    return (
        <header>
            <AppBar>
                <Toolbar>
                    <Navigation />
                </Toolbar>
                
            </AppBar>
                    
                
        </header>
    )
}
