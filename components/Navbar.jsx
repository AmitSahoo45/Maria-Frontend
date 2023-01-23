import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'

import styles from '../styles/components/navbar.module.scss'

const Navbar = () => {
    return (
        <div className={`${styles.mainnav} flex justify-between p-2`}>
            <div className="logo">
                <Link href={'/'}>
                    <a>
                        <Image
                            src='/images/maria_Logo.png'
                            alt='Maria fashion'
                            width={100}
                            height={50}
                        />
                    </a>
                </Link>
            </div>
            <nav aria-label="navigation" className='nav'>
                <ul className={styles.navbar}>
                    <Link href={'/western'}><a className='hover-underline-animate'><li>Western</li></a></Link>
                    <Link href={'/indian'}><a className='hover-underline-animate'><li>Indian</li></a></Link>
                    <Link href={'/others'}><a className='hover-underline-animate'><li>Sports</li></a></Link>
                </ul>
            </nav>
            <div className={styles.icons}>
                <Link href={'/'}><a><AiOutlineSearch /></a></Link>
                <Link href={'/'}><a><AiOutlineUser /></a></Link>
                <Link href={'/'}><a><AiOutlineShoppingCart /></a></Link>
            </div>
        </div>
    )
}

export default Navbar