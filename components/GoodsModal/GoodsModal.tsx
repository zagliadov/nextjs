import { Backdrop, Box, CardContent, CardMedia, Fade, IconButton, Modal, Typography } from '@mui/material';
import { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import GoodsModalForm from '../GoodsModalForm/GoodsModalForm';
import GoodsButtonAddItemToCart from '../GoodsButtonAddItemToCart/GoodsButtonAddItemToCart';
import { IGoodsModalProps } from '../../interface/interface';

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




const GoodsModal: FC<IGoodsModalProps> = ({ open, handleClose, title, body, price, id, url, sizeOption, deliveryOption }) => {

    const [size, setSize] = useState<string>(null);
    const [delivery, setDelivery] = useState<string>(null);
    // In the GoodsButtonAddItemToCart component checks for the size and 
    // delivery fields filled in, and if they are not filled, the setEmpty 
    // gets true, empty is sent to the GoodsModalForm to display a message 
    // depending on the value
    const [sizeEmpty, setSizeEmpty] = useState<boolean>(false);
    const [deliveryEmpty, setDeliveryEmpty] = useState<boolean>(false);

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
                                empty={sizeEmpty}
                                name={`size`}
                                formOption={sizeOption}
                                defaultValue={``} />
                            <GoodsModalForm setItem={setDelivery}
                                label={`Достака`}
                                empty={deliveryEmpty}
                                name={`delivery`}
                                formOption={deliveryOption}
                                defaultValue={``} />

                            <GoodsButtonAddItemToCart
                                setSizeEmpty={setSizeEmpty}
                                setDeliveryEmpty={setDeliveryEmpty}
                                handleClose={handleClose}
                                title={title}
                                body={body}
                                size={size}
                                delivery={delivery}
                                price={price}
                                id={id}
                                url={url} />
                        </CardContent>

                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};

export default GoodsModal;

