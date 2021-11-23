import { Backdrop, Box, CardContent, CardMedia, Fade, FormControl, IconButton, InputLabel, Modal, NativeSelect, Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import GoodsModalForm from '../GoodsModalForm/GoodsModalForm';

const modalContent = {
    position: 'absolute' as 'absolute',
    top: '0%',
    left: '0%',
    width: "100%",
    height: "100%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'scroll',
} as const;

const closeButton = {
    position: 'absolute' as 'absolute',
    top: '5%',
    left: '85%',
} as const;

const card = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '100px',
    width: 'auto',
    border: '1px solid red',
    alignItems: 'center',
} as const;

const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    minWidth: '60%',
    boxSizing: 'border-box',
} as const;


type IGoodsModalProps = {
    open: boolean,
    handleClose: any,
    title: string,
    body: string,
    price: string,
    id: number,
    url: string,
}

const GoodsModal: FC<IGoodsModalProps> = ({ open, handleClose, title, body, price, id, url }) => {

    const [size, setSize] = useState<string>('');
    const [delivery, setDelivery] = useState<string>('');

    const formOptionSize = [
        { 'women s': 'Женская S' },
        { 'women m': 'Женская M' },
        { 'unisex s': 'Унисекс S' },
        { 'unisex m': 'Унисекс M' },
        { 'unisex l': 'Унисекс L' },
        { 'unisex xl': 'Унисекс XL' },
        { 'unisex xll': 'Унисекс XLL' },
    ];
    const formOptionDelivery = [
        {'ukraine': 'По Украине'},
        {'world': 'По миру + 190 грн'}
    ];


    useEffect(() => {
        console.log(size, delivery)
    }, [size, delivery])


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={modalContent}>
                    <IconButton onClick={handleClose} sx={closeButton}>
                        <CloseIcon />
                    </IconButton>
                    <Box sx={card}>
                        <CardMedia
                            component="img"
                            image={`${url}`}
                            alt={`${title}`}
                            sx={{ maxWidth: '600px', minWidth: '100px' }}
                        />
                        <CardContent sx={cardContentStyle}>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {body}
                            </Typography>
                            <Typography variant="h5" color="text.secondary"
                                sx={{ paddingTop: '10px' }}>
                                {price} грн.
                            </Typography>



                            <GoodsModalForm setItem={setSize}
                                label={`Размер`}
                                name={`size`}
                                formOption={formOptionSize}
                                defaultValue={`women s`} />
                            <GoodsModalForm setItem={setDelivery}
                                label={`Достака`}
                                name={`delivery`}
                                formOption={formOptionDelivery}
                                defaultValue={`Украина`} />

                        </CardContent>

                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};

export default GoodsModal;

