import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Lazy } from "swiper";
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter, FiFacebook } from 'react-icons/fi'

import styles from '../styles/Home.module.scss'
import { CAROUSEL_LD } from '../constants/imageFunc'

import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maria fashion - The pinnacle of fashion</title>
        <meta name="description" content="Maria fashion - The pinnacle of modernity" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>
      <section className={styles.container}>

        <div className={styles.leftbox}>

          <motion.div
            className={styles.modelContainer}
            transition={{ duration: 0.75, type: 'tween', stiffness: 100 }}
            whileInView={{ x: [-50, 0], opacity: [0, 1], duration: 0.75 }}
          >
            <div className={styles.mimg}>
              <div className={styles.landing_model}>
                <Image src='/assets/modelLD2.jpg' width={300} height={400} />
              </div>
              <div className={styles.cave_style}></div>
            </div>
          </motion.div>

          <div className={styles.textbox}>
            <p>Maria is guided by its principle of producing thoughtful and timeless pieces that honor tradition and femininity.</p>
            <button className="button-design01">
              View Details
            </button>
          </div>

          <div className={styles.socialBox}>
            <a href="">
              <AiOutlineInstagram />
            </a>
            <a href="">
              <FiTwitter />
            </a>
            <a href="">
              <FiFacebook />
            </a>
          </div>
        </div>
        {/* ---------------------- */}
        <div className={styles.rightbox}>
          <div className={styles.punchText}>
            <h2>
              Designed for women.<br />
              <span>By women.</span>
            </h2>
          </div>
          {/* To be Decided */}
          <div
            className={styles.modelContainer}
            // transition={{ duration: 0.75, type: 'tween', stiffness: 100 }}
            // whileInView={{ x: [50, 0], opacity: [0, 1], duration: 0.75 }}
          >
            <div>
              <div className={styles.backgroundBox}></div>
              <div>
                <Image src='/assets/modelLD1.png' width={240} height={400} />
              </div>
            </div>
          </div>

          <div className={styles.textbox}>
            <p>material</p>
            <p>designers</p>
            <p>process</p>
          </div>
        </div>
      </section>

      <section className={styles.Slider}>
        <Swiper
          pagination={{ dynamicBullets: true, clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          loop={true}
          lazy={true}
          modules={[Pagination, Navigation, Autoplay, Lazy]}
          className="mySwiper"
        >
          {CAROUSEL_LD.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles.SwiperSlide}>
                <Image
                  src={image}
                  alt='Maria fashion'
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <motion.section
        transition={{ duration: 0.75, type: 'tween', stiffness: 100, ease: 'easeInOut' }}
        whileInView={{ y: [70, 0], opacity: [0, 1], duration: 0.75 }}
        className={styles.arrivals}>
        <h3 className="font-light text-2xl leading-8">New Arrivals</h3>
        <div className="w-full flex align-center justify-center">
          <div className={styles.arrivals_Container}>

            <div className={`w-full h-[220px] overflow-hidden bg-pink-200 relative ${styles.card}`}>
              <motion.div
                whileInView={{ scale: [1.2, 1], opacity: [0, 0.2, 0.4, 0.6, 0.8, 1], duration: 1, animationDelay: 1 }}
                className="w-full h-full relative">
                <Image
                  src='/assets/arrivals_model_01.png'
                  alt='Tops'
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <div className={styles.textBox}>
                <div className='bg-white w-[90%] h-full rounded-md text-left p-3'>
                  <h5 className="text-xs font-extralight">Tops</h5>
                  <div className="text-sm font-bold flex justify-between align-center">
                    <h5>her by invictus</h5>
                    <h5 className='text-green-500'>₹494</h5>
                  </div>
                  <div className="mt-3 flex justify-between align-center">
                    <div>
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                    </div>
                    <button className="py-1 px-3 bg-green-400 rounded-md text-xs">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`w-full h-[220px] overflow-hidden bg-red-200 relative ${styles.card}`}>
              <motion.div
                whileInView={{ scale: [1.2, 1], opacity: [0, 0.2, 0.4, 0.6, 0.8, 1], duration: 1, animationDelay: 1 }}
                className="w-full h-full relative">
                <Image
                  src='/assets/arrivals_model_02.png'
                  alt='PlaySuits'
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <div className={styles.textBox}>
                <div className='bg-white w-[90%] h-full rounded-md text-left p-3'>
                  <h5 className="text-xs font-extralight">Jumpsuits</h5>
                  <div className="text-sm font-bold flex justify-between align-center">
                    <h5>Athena</h5>
                    <h5 className='text-green-500'>₹1199</h5>
                  </div>
                  <div className="mt-3 flex justify-between align-center">
                    <div>
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                    </div>
                    <button className="py-1 px-3 bg-green-400 rounded-md text-xs">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`w-full h-[220px] overflow-hidden bg-red-300 relative ${styles.card}`}>
              <motion.div
                whileInView={{ scale: [1.2, 1], opacity: [0, 0.2, 0.4, 0.6, 0.8, 1], duration: 1, animationDelay: 1 }}
                className="w-full h-full relative">
                <Image
                  src='/assets/arrivals_model_03.png'
                  alt='Maria fashion'
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <div className={styles.textBox}>
                <div className='bg-white w-[90%] h-full rounded-md text-left p-3'>
                  <h5 className="text-xs font-extralight">Shrugs</h5>
                  <div className="text-sm font-bold flex justify-between align-center">
                    <h5>Sera</h5>
                    <h5 className='text-green-500'>₹1583</h5>
                  </div>
                  <div className="mt-3 flex justify-between align-center">
                    <div>
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                    </div>
                    <button className="py-1 px-3 bg-green-400 rounded-md text-xs">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`w-full h-[220px] overflow-hidden bg-pink-300 relative ${styles.card}`}>
              <motion.div
                whileInView={{ scale: [1.2, 1], opacity: [0, 0.2, 0.4, 0.6, 0.8, 1], duration: 1, animationDelay: 1 }}
                className="w-full h-full relative">
                <Image
                  src='/assets/arrivals_model_04.png'
                  alt='Saree'
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <div className={styles.textBox}>
                <div className='bg-white w-[90%] h-full rounded-md text-left p-3'>
                  <h5 className="text-xs font-extralight">Saree</h5>
                  <div className="text-sm font-bold flex justify-between align-center">
                    <h5>Banarasi Silk</h5>
                    <h5 className='text-green-500'>₹1507</h5>
                  </div>
                  <div className="mt-3 flex justify-between align-center">
                    <div>
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                      <Image src='/assets/star.png' alt="Star" width="20" height="20" />
                    </div>
                    <button className="py-1 px-3 bg-green-400 rounded-md text-xs">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="flex justify-end">
          <button className="cta flex">
            <span className="hover-underline-animation"> Show more </span>
            <svg className="mt-1" id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
              <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
            </svg>
          </button>
        </div>
      </motion.section>

      <motion.section
        className="w-[90%] mx-auto"
        transition={{ duration: 1, type: 'tween', stiffness: 100, ease: 'easeInOut' }}
        whileInView={{ y: [50, 0], opacity: [0, 1], duration: 0.75 }}>
        {/* <div className="flex">

          </div> */}
        <h3 className="font-light text-2xl leading-8">Top Brands</h3>
        <div className="flex justify-evenly items-center flex-wrap w-full mt-2">
          <img width='170' height='50'
            src="/images/Logo/Biba.png" alt="Biba"
            className='m-5 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer' />
          <img width='100' height='50'
            src="/images/Logo/HM.png" alt="H&M"
            className='m-5 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer' />
          <img width='150' height='50'
            src="/images/Logo/MarksAndSpencer.png" alt="Marks and Spencer"
            className='m-5 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer' />
          <img width='120' height='60'
            src="/images/Logo/Only.png" alt="Only"
            className='m-5 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer' />
          <img
            src="/images/Logo/VeroAndModa.png" alt="Vero Moda"
            className='m-5 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer w-[150px] h-[40px]' />
        </div>
        <h4 className="flex justify-end font-light text-sm">and many more</h4>
      </motion.section>

      
    </div >
  )
}

{/* <div className="w-full"></div>
<div className="w-full"></div>
<div className="w-full"></div> */}
