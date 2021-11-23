import { Card, Grid } from '@mui/material';
import { FC } from 'react';
import { IPropsGoodsList } from '../../interface/interface';
import GoodsListDetail from '../GoodsListDetail/GoodsListDetail';


const GoodsList: FC<IPropsGoodsList> = ({ products }) => {
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
                                url={product.url}
                                title={product.title}
                                body={product.body}
                                id={product.id}
                                price={product.price} 
                                sizeOption={product.sizeOption}
                                deliveryOption={product.deliveryOption} />

                        </Card>

                    </Grid>
                )
            })}
        </>
    );
};

export default GoodsList;