import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

interface IProductsProps {
    type: string;
    title: string;
    alt: string;
}

const ProductsListDetails: FC<IProductsProps> = ({ type, title, alt }) => {


    return (
        <Box sx={{
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(66, 165, 245, 0.2)',
            boxSizing: 'border-box',
            display: ((type === alt) ? 'flex' : 'none'),
            transition: 'background-color 1s',
            '&: hover': {
                backgroundColor: 'rgba(66, 165, 245, 0.7)',
            }
        }}>
            <Typography variant="h4" sx={{
                textAlign: 'center',
                fontFamily: 'Roboto sans-serif',
                paddingBottom: '20px',
                color: '#ffffff',
            }}>
                {title}
            </Typography>
            <Link href={`/${alt}`} passHref>
                <Button sx={{
                    minWidth: '30%',
                    color: '#ffffff',
                    fontSize: '23px',
                    fontFamily: 'Roboto sans-serif',
                    backgroundColor: '#1976d2',
                    marginTop: '100px',
                    '&: hover': {
                        backgroundColor: '#1565c0'
                    }
                }}> Покажите все </Button>
            </Link>

        </Box>
    );

};

export default ProductsListDetails;