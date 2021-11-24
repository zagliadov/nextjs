import { CardContent, CardMedia, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { IGoods } from '../../interface/interface';
import GoodsModal from '../GoodsModal/GoodsModal';

const GoodsListDetail: FC<IGoods> = ({ 
    url, 
    title, 
    body, 
    id, 
    price, 
    sizeOption, 
    deliveryOption, 
    setStore,
}) => {

    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = (): void => {
        setOpen(false);
    };


    return (
        <>
            {open ?
                <GoodsModal
                    setStore={setStore}
                    open={open}
                    handleClose={handleClose}
                    url={url}
                    id={id}
                    title={title}
                    body={body}
                    price={price} 
                    sizeOption={sizeOption}
                    deliveryOption={deliveryOption} />
                :
                <>
                    <CardMedia
                        component="img"
                        image={`${url}`}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => handleOpen()}
                        alt={`${title}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {body}
                        </Typography>
                        <Typography variant="h5" color="text.secondary"
                            sx={{ textAlign: 'center', paddingTop: '10px' }}>
                            {price} грн.
                        </Typography>
                    </CardContent>
                </>
            }
        </>
    );
};

export default GoodsListDetail;