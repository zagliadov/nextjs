import { Grid } from '@mui/material';
import { FC } from 'react';

const ProductsWrapper: FC = ({ children }) => {
    return (
        <Grid container spacing={2}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
            }}>
            {children}
        </Grid>


    );
};

export default ProductsWrapper;