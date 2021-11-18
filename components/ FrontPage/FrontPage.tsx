import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

const FrontPage: FC = () => {

    return (
        <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h1">
                    Header
                </Typography>
            </Grid>

            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                minHeight: '200px',

            }}>
                <Grid item xs={12} md={6}
                    sx={{
                        paddingTop: '100px',
                        paddingBottom: '200px',
                        textAlign: 'center',
                    }}>
                    Top Left side

                </Grid>

                <Grid item xs={12} md={6}
                    sx={{
                        paddingTop: '100px',
                        textAlign: 'center',
                    }}>
                    Top Right side
                </Grid>

            </Grid>

        </Grid>
    )
}


export default FrontPage;