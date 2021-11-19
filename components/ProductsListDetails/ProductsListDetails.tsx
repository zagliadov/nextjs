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
<<<<<<< HEAD
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(117, 190, 218, 0.2)',
=======
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(66, 165, 245, 0.2)',
>>>>>>> 9177e73f64ae1a7b4ed98683c46ef6ccb3b4ca45
            boxSizing: 'border-box',
            display: ((type === alt) ? 'flex' : 'none'),
            transition: 'background-color 1s',
            '&: hover': {
<<<<<<< HEAD
                backgroundColor: 'rgba(117, 190, 218, 0.7)',
            }
        }}>
            <Typography variant="h5" sx={{
                textAlign: 'center',
=======
                backgroundColor: 'rgba(66, 165, 245, 0.7)',
            }
        }}>
            <Typography variant="h4" sx={{
                textAlign: 'center',
                fontFamily: 'Roboto sans-serif',
>>>>>>> 9177e73f64ae1a7b4ed98683c46ef6ccb3b4ca45
                paddingBottom: '20px',
                color: '#ffffff',
            }}>
                {title}
            </Typography>
            <Link href={`/${alt}`} passHref>
                <Button sx={{
<<<<<<< HEAD
                    width: '30%',
                    color: '#ffffff',
                    backgroundColor: 'silver',
                    marginTop: '20px',
                    '&: hover': {
                        backgroundColor: '#51aa97'
=======
                    minWidth: '30%',
                    color: '#ffffff',
                    fontSize: '23px',
                    fontFamily: 'Roboto sans-serif',
                    backgroundColor: '#1976d2',
                    marginTop: '100px',
                    '&: hover': {
                        backgroundColor: '#1565c0'
>>>>>>> 9177e73f64ae1a7b4ed98683c46ef6ccb3b4ca45
                    }
                }}> Покажите все </Button>
            </Link>

        </Box>
    );

};

export default ProductsListDetails;