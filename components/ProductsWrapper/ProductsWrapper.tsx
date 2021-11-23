import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import FixedShoppingBasketIcon from '../FixedShoppingBasketIcon/FixedShoppingBasketIcon';


const ProductsWrapper: FC = ({ children }) => {

   

    return (
        <Grid container spacing={2}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
            }}>
            {children}
            <FixedShoppingBasketIcon />
            <Typography
                variant="body1"
                component="p"
                sx={{
                    position: 'fixed',
                    top: '40%',
                    left: '95%',
                }}
            >
                1
            </Typography>
        </Grid>


    );
};

export default ProductsWrapper;