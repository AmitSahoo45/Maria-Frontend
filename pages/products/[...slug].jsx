import React from 'react'
import { useRouter } from 'next/router'

const Product = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div>
            Slug : {slug.map(item => (<p>{item}</p>))}
        </div>
    )
}

export default Product