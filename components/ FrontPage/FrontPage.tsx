import { Grid } from '@mui/material';
import React, {FC} from 'react';

const FrontPage: FC = () => {

    return (
        <Grid container sx={{ border: '1px solid black'}}>
            <Grid item xs={12}>
                Header
            </Grid>

            <Grid item xs={12}>
                body
            </Grid>

        </Grid>
    )
}


export default FrontPage;