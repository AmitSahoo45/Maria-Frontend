import React from 'react'
import { useRouter } from 'next/router'

const Product = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div>
        </div>
    )
}

export default Product