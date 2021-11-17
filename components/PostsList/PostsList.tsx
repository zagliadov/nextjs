import React, { FC } from 'react'
import Link from 'next/link';
import { IProps } from '../../interface/interface';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Grid } from "@mui/material";

const PostsList: FC<IProps> = ({ posts }) => {

    console.log(posts[2].body.length)

    const textCuter = (text: any): any => {
        if(text.length > 100) {
            return text.length = 100 + '...'
        }
    }


    return (
        <>
            {posts.map(post => {
                return (
                    <Grid item xs={6} key={post.id}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardMedia
                                component="img"
                                image={`${post.thumbnailUrl}`}
                                alt={`${post.title}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.body}
                                    
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link href={`/post/[id]`} as={`/post/${post.id}`} passHref>
                                    <Button>In detail</Button>
                                </Link>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </>
    )
}


export default PostsList;