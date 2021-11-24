import { Button } from '@mui/material';
import { FC, useState } from 'react';
import { IAddItemToCartProps } from '../../interface/interface';



const GoodsButtonAddItemToCart: FC<IAddItemToCartProps> = ({
    title,
    body,
    price,
    id,
    url,
    size,
    delivery,
    setSizeEmpty,
    setDeliveryEmpty,
    handleClose,
    setStore,
}) => {

    let arr = JSON.parse(localStorage.getItem('products')) || [];
 

    const addItemToCart = () => {
        if (delivery !== null) setDeliveryEmpty(true);
        if (size !== null) setSizeEmpty(true);
        if (delivery === null) return
        if (size === null) return

        
        arr.push({title, body, price, id, url, size, delivery} )
        localStorage.setItem(`products`, JSON.stringify(arr));

        // if (localStorage.getItem('ally-supports-cache')) {
        //     setStore(localStorage.length - 1);
        // }
        // if (!localStorage.getItem('ally-supports-cache')) {
        //     setStore(localStorage.length);
        // }
        if(localStorage.getItem('products')) {
            setStore(JSON.parse(localStorage.getItem('products')).length);
        }
        handleClose(true);
    }



    return (
        <Button onClick={addItemToCart}>
            В корзину
        </Button>
    );
};

export default GoodsButtonAddItemToCart;