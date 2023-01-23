import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import styles from '../styles/components/western.module.scss'
import { Breadcrumbs, ProductDisplay } from '../components';

const Western = () => {
  const router = useRouter()
  const paths = router.route.split('/').filter((path) => path !== '')
  console.log(router, paths)

  const kurta = [
    {
      type: 'KURTA', id: 120001,
      bname: "Antheaa", descrip: 'Smocked Tiered Midi Dress',
      img: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15577328/2021/10/19/3f477c11-9550-4db8-b360-7621b5fddd9b1634625769534-Antheaa-Women-Dresses-7701634625767867-1.jpg',
      orgMRP: 887, disMRP: 3699, disPER: 60,
      rating: 4.1, pplrated: 143,
    },
    {
      type: 'KURTA', id: 120002,
      bname: "Libas", descrip: 'Ethnic Motifs A-Line Dress',
      img: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10842022/2019/11/6/a373d08e-a2fb-4cbf-9a19-dd9679ea0c181573032453223-Libas-Women-Dresses-7681573032451400-1.jpg',
      orgMRP: 887, disMRP: 3699, disPER: 60,
      rating: 2.4, pplrated: 43213,
    },
    {
      type: 'KURTA', id: 120003,
      bname: "ANAYNA", descrip: 'Floral Swirling Volume Dress',
      img: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18390490/2022/5/30/6d64a950-2fe0-4859-9e43-a62c011135721653882322626-Berrylush-Women-Navy-Blue-Floral-Print-Ruffled-Hem-Dress-731-1.jpg',
      orgMRP: 887, disMRP: 3699, disPER: 60,
      rating: 3.5, pplrated: 64
    },
    {
      type: 'KURTA', id: 120004,
      bname: "SASSAFRAS", descrip: 'Dobby Weave Wrap Dress',
      img: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13581134/2021/11/18/77d98e7f-75f2-4dcf-bea2-443a837e95b71637229080165-SASSAFRAS-Dusty-Pink-Self-Design-Dobby-Weave-Wrap-Dress--Bel-1.jpg',
      orgMRP: 887, disMRP: 3699, disPER: 60,
      rating: 1.7, pplrated: 76533
    },
  ]

  return (
    <div className={`w-11/12 ${styles.mainbox_container}`}>
      <Breadcrumbs paths={paths} />
      <div className={`${styles.category_container}`}>
        <h4 className="flex justify-left align-center SortsMillGoudytext text-lg mb-2 pt-2 leading-8 border-t-[1px] border-slate-400">Dresses</h4>
        <div className={`${styles.container}`}>
          {kurta.map((item, index) => (
            <ProductDisplay key={index} item={item} paths={paths} />
          ))}
        </div>
        {/* viewmore button using tailwind css*/}
        <div className="flex justify-end">
          <Link href={`/products/western/dresses`}>
            <button className="mr-3 mt-2 font-extralight text-xs flex items-center hover:animate-bounce hover:text-slate-400">
              View More&nbsp;<MdOutlineKeyboardArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Western

