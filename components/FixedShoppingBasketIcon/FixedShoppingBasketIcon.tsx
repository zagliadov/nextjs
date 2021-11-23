import { FC } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Link from 'next/link';

const shopingIcon = {
    position: 'fixed',
    top: '40%',
    left: '90%',
    fontSize: 40,
    color: '#ffa726',
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderRadius: 4,
    transition: '2s',
    animation: 'box 2s infinite',
    '@keyframes box': {
        '0%': {
            boxShadow: `1px 1px 15px 5px rgba(255, 167, 38, 0.3),
            inset 1px 1px 15px 5px rgba(255, 167, 38, 0.3)`
        },
        '50%': {
            boxShadow: `1px 1px 15px 25px rgba(255, 167, 38, 0.3),
            inset 1px 1px 15px 15px rgba(255, 167, 38, 0.3)`,
        },
        '100%': {
            boxShadow: `1px 1px 15px 5px rgba(255, 167, 38, 0.3),
            inset 1px 1px 15px 5px rgba(255, 167, 38, 0.3)`,
        },
    }
} as const;



const FixedShoppingBasketIcon: FC = () => {




    return (
        <Link href='/shopping-cart' passHref>
            <ShoppingBasketIcon sx={shopingIcon} />
        </Link>
    );
};

export default FixedShoppingBasketIcon;