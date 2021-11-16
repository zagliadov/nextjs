import React, { FC } from 'react'
import Link from 'next/link';
import { IProps } from '../../interface/interface';


const PostsList: FC<IProps> = ({ posts }) => {

    return (
        <ul>
            {posts.map(post => {
                return (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}


export default PostsList;