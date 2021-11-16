import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';







export default function Navigation() {

    return (
        <nav>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/about'}><a>About</a></Link>
            <Link href={'/posts'}><a>Posts</a></Link>


        <style jsx>{`
            nav {
                display: flex;
                align-items: center;
                justify-content: space-around;
                position: fixed;
                height: 60px;
                left: 0;
                top: 0;
                right: 0;
                background-color: silver;
            }
            nav a {
                color: #fff;
                font-weight: bold;
                font-size: 24px;
                text-decoration: none;
            }

        
        `}</style>

        </nav>
    )
}
