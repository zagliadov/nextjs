import { Card, Grid, Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { IPropsGoodsList } from '../../interface/interface';
import GoodsListDetail from '../GoodsListDetail/GoodsListDetail';
import FixedShoppingBasketIcon from '../FixedShoppingBasketIcon/FixedShoppingBasketIcon';

const GoodsList: FC<IPropsGoodsList> = ({ products }) => {

    const [store, setStore] = useState<number>(0);

    // setStore is used to re-render the Typography element, 
    // which displays the number of product items in localStorage

    useEffect(() => {
        if(localStorage.getItem('products')) {
            setStore(JSON.parse(localStorage.getItem('products')).length);
        }
    }, [store])


    return (
        <>
            {products && products.map((product) => {
                return (
                    <Grid item xs={12} sm={12} md={6} lg={4} key={product.id}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Card sx={{
                            maxWidth: '600px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                        }}>
                            <GoodsListDetail
                                setStore={setStore}
                                url={product.url}
                                title={product.title}
                                body={product.body}
                                id={product.id}
                                price={product.price}
                                sizeOption={product.sizeOption}
                                deliveryOption={product.deliveryOption} />

                        </Card>

                        <FixedShoppingBasketIcon />
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                position: 'fixed',
                                top: '39%',
                                left: '96%',
                            }}
                        >
                            {store}
                        </Typography>

                    </Grid>
                )
            })}
        </>
    );
};

export default GoodsList;