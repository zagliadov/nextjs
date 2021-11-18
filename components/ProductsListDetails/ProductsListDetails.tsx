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
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(117, 190, 218, 0.2)',
            boxSizing: 'border-box',
            display: ((type === alt) ? 'flex' : 'none'),
            transition: 'background-color 1s',
            '&: hover': {
                backgroundColor: 'rgba(117, 190, 218, 0.7)',
            }
        }}>
            <Typography variant="h5" sx={{
                textAlign: 'center',
                paddingBottom: '20px',
                color: '#ffffff',
            }}>
                {title}
            </Typography>
            <Link href={`/${alt}`} passHref>
                <Button sx={{
                    width: '30%',
                    color: '#ffffff',
                    backgroundColor: 'silver',
                    marginTop: '20px',
                    '&: hover': {
                        backgroundColor: '#51aa97'
                    }
                }}> Покажите все </Button>
            </Link>

        </Box>
    );

};

export default ProductsListDetails;