import React, { FC, useState } from 'react'
import { IProps } from '../../interface/interface';
import { Card, CardMedia } from '@mui/material';
import { Grid } from "@mui/material";
import ProductsListDetails from '../ProductsListDetails/ProductsListDetails';


const ProductsList: FC<IProps> = ({ products }) => {

    const [alt, setAlt] = useState<string>('');

    return (
        <>
            {products.map(product => {
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
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                        }}
                            onMouseOver={(e: any) => {
                                if (e.target.alt !== product.type) return
                                setAlt(e.target.alt)
                            }}
                            onMouseLeave={() => setAlt('')}
                        >

                            <CardMedia
                                component="img"
                                image={`${product.url}`}
                                alt={`${product.type}`}
                            />

                            <ProductsListDetails
                                type={product.type}
                                title={product.title}
                                alt={alt} />



                        </Card>
                    </Grid>
                )
            })}
        </>
    )
}


export default ProductsList;