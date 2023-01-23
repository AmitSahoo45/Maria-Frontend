import React from 'react'
import Link from 'next/link'

const Breadcrumbs = ({ paths }) => {
    return (
        <div className='text-xl'>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center text-sm SortsMillGoudytext capitalize">
                        <a>Home</a>
                    </li>
                    {paths.map((path, index) => (
                        <>
                            <p key={index} className="inline-flex items-center text-sm SortsMillGoudytext capitalize">/</p>
                            <li className={`inline-flex items-center text-sm SortsMillGoudytext capitalize ${paths[paths.length]}`}>
                                <a>{path}</a>
                            </li>
                        </>
                    ))}
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumbs