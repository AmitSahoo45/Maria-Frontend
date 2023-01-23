import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai'

import { ratingsConverter, ratingColor } from '../../constants/working-function'

import styles from './ProductDisplay.module.scss'

const ProductDisplay = ({ index, item, paths }) => {
    return (
        <div key={index} className={`${styles.product_display}`}>
            <div className="h-64 w-full relative">
                <Image
                    layout='fill'
                    objectFit='cover'
                    src={item.img}
                    alt={item.type}
                />
            </div>
            <div className={`${styles.text_container}`}>
                <div className={`w-11/2 mx-auto ${styles.tc_box}`}>
                    <h3 className="text-[15px]">{item.bname}</h3>
                    <h4 className='text-[12px] text-slate-700 font-medium'>{item.descrip}</h4>
                    <div className="mt-[3px] flex items-end flex-wrap font-medium">
                        <h4 className="text-[14px] mr-[3px]">Rs. {item.disMRP}</h4>
                        <h4 className="text-[10px] text-slate-500 line-through mb-[1px] mr-[3px]">Rs. {item.orgMRP}</h4>
                        <h4 className="text-[12px] text-red-600">({item.disPER}% off)</h4>
                    </div>
                    <div className="w-full h-[0.5px] mt-[5px] bg-black"></div>
                    <div className='flex items-center w-full flex-col mt-[7px]'>
                        <Link href={`/products/${paths[0]}/${item.id}`}>
                            <button className="bg-green-300 p-[3px] w-full font-light rounded-[3px] text-[12px]">
                                View Product
                            </button>
                        </Link>
                        <button className="flex items-center justify-center bg-white p-[3px] w-full font-light rounded-[3px] text-[14px] mt-[5px] text-red-500">
                            <AiOutlineHeart />&nbsp;Wishlist
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[10px] right-[10px] bg-white p-[3px] text-xs flex rounded-[2px]">
                <div className='flex items-center'>
                    <span>{item.rating}</span>
                    <AiOutlineStar className={`ml-[2px] ${ratingColor(item.rating)}`} />
                </div>
                <span className='mx-[2px]'>|</span>
                <span>{ratingsConverter(item.pplrated)}</span>
            </div>
        </div>
    )
}

export default ProductDisplay