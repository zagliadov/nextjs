import { Button } from '@mui/material';
import { FC } from 'react';



type IAddItemToCartProps = {
    title: string, 
    body: string, 
    price: string, 
    id: number, 
    url: string, 
    size: string, 
    delivery: string,
    setSizeEmpty: (boolean) => void,
    setDeliveryEmpty: (boolean) => void,
    handleClose: (boolean) => void,
}

const GoodsButtonAddItemToCart: FC<IAddItemToCartProps> = (
    { title, body, price, id, url, size, delivery, setSizeEmpty, setDeliveryEmpty, handleClose  }) => {

    const addItemToCart = () => {
        if (delivery !== null ) setDeliveryEmpty(true);
        if (size !== null ) setSizeEmpty(true);
        if(delivery === null) return
        if(size === null) return
        localStorage.setItem(`'${id}'`, JSON.stringify({ title, body, price, id, url, size, delivery }))
        handleClose(true);
    }



    return (
        <Button onClick={addItemToCart}>
            В корзину
        </Button>
    );
};

export default GoodsButtonAddItemToCart;