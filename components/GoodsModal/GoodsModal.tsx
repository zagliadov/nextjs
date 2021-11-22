import { Backdrop, Box, CardContent, CardMedia, Fade, FormControl, IconButton, InputLabel, Modal, NativeSelect, Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const modalContent: any = {
    position: 'absolute' as 'absolute',
    top: '0%',
    left: '0%',
    width: "100%",
    height: "100%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'scroll',
};

const closeButton: any = {
    position: 'absolute' as 'absolute',
    top: '5%',
    left: '85%',
}
const card: any = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '100px',
    width: 'auto',
    border: '1px solid red',
    alignItems: 'center',
};

const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    minWidth: '60%',
    boxSizing: 'border-box',
} as const

const formControlStyle = {
    paddingTop: '20px',
}


const GoodsModal: FC<any> = ({ open, handleClose, title, body, price, id, url }) => {

    const [size, setSize] = useState<string>('');
    const [delivery, setDelivery] = useState<string>('');
    const handleSetSize = (e) => {
        setSize(e.target.value)
    }

    const handleSetDelivery = (e) => {
        setDelivery(e.target.value)
    }

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


                            <FormControl sx={formControlStyle}
                                onChange={(e) => handleSetSize(e)}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Размер
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'women s'}
                                    inputProps={{
                                        name: 'size',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={'women s'}>Женская S</option>
                                    <option value={'women m'}>Женская M</option>
                                    <option value={'unisex s'}>Унисекс S</option>
                                    <option value={'unisex m'}>Унисекс M</option>
                                    <option value={'unisex l'}>Унисекс L</option>
                                    <option value={'unisex xl'}>Унисекс XL</option>
                                    <option value={'unisex xll'}>Унисекс XLL</option>
                                </NativeSelect>
                            </FormControl>

                            <FormControl sx={formControlStyle}
                                onChange={(e) => handleSetDelivery(e)}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Доставка
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'По Украине'}
                                    inputProps={{
                                        name: 'delivery',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={'ukraine'}>По Украине</option>
                                    <option value={'world'}>По миру + 190 грн</option>

                                </NativeSelect>
                            </FormControl>
                        </CardContent>

                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};

export default GoodsModal;