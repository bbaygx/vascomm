"use client"

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { carousel, parfume } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function page() {

    const breakpoints = {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }

    return (
        <div>
            <div className="carousel w-10/12 mx-auto py-5 rounded-md">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    
                    autoplay

                >
                    <SwiperSlide>
                        <Image src={carousel} alt='carousel'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={carousel} alt='carousel'/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <main className='md:w-10/12 mx-auto py-6 px-6 sm:px-0'>
                <div className="py-6" id='terbaru'>
                    <h1 className='text-3xl font-serif font-semibold'>Terbaru</h1>
                    <div className="products py-6">
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    autoplay
                    breakpoints={breakpoints}
                    
                >
                    <SwiperSlide>
                        <div className="p-6 cursor-pointer flex justify-center hover:shadow-lg duration-500 ease-in-out hover:border rounded-md">
                        <div>
                        <Image src={parfume} alt='carousel'/>
                            <Link href="#">
                                <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                <h4 className='text-blue-600'>IDR 100.000.00</h4>
                            </Link>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-6 cursor-pointer flex justify-center hover:shadow-lg duration-500 ease-in-out hover:border rounded-md">
                        <div>
                        <Image src={parfume} alt='carousel'/>
                            <Link href="#">
                                <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                <h4 className='text-blue-600'>IDR 100.000.00</h4>
                            </Link>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-6 cursor-pointer flex justify-center hover:shadow-lg duration-500 ease-in-out hover:border rounded-md">
                        <div>
                        <Image src={parfume} alt='carousel'/>
                            <Link href="#">
                                <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                <h4 className='text-blue-600'>IDR 100.000.00</h4>
                            </Link>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-6 cursor-pointer flex justify-center hover:shadow-lg duration-500 ease-in-out hover:border rounded-md">
                        <div>
                        <Image src={parfume} alt='carousel'/>
                            <Link href="#">
                                <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                <h4 className='text-blue-600'>IDR 100.000.00</h4>
                            </Link>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-6 cursor-pointer flex justify-center hover:shadow-lg duration-500 ease-in-out hover:border rounded-md">
                        <div>
                        <Image src={parfume} alt='carousel'/>
                            <Link href="#">
                                <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                <h4 className='text-blue-600'>IDR 100.000.00</h4>
                            </Link>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-6 cursor-pointer flex justify-center hover:shadow-lg duration-500 ease-in-out hover:border rounded-md">
                        <div>
                        <Image src={parfume} alt='carousel'/>
                            <Link href="#">
                                <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                <h4 className='text-blue-600'>IDR 100.000.00</h4>
                            </Link>
                        </div>
                        </div>
                    </SwiperSlide>

                    </Swiper>
                    </div>
                </div>
                <div className="py-7 px-4" id='product_tersedia'>
                <h1 className='text-3xl font-serif font-semibold'>Product Terbaru</h1>
                    <div className="grid py-6 grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="p-6 flex justify-center cursor-pointer hover:shadow-lg duration-200 hover:border rounded-md">
                        <div className="card">
                            <Image src={parfume} alt='carousel' className='p-3'/>
                                <Link href="#">
                                    <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                    <h4 className='text-blue-600'>IDR 100.000.00</h4>
                                </Link>
                        </div>
                    </div>
                    <div className="p-6 flex justify-center cursor-pointer hover:shadow-lg duration-200 hover:border rounded-md">
                        <div className="card">
                            <Image src={parfume} alt='carousel' className='p-3'/>
                                <Link href="#">
                                    <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                    <h4 className='text-blue-600'>IDR 100.000.00</h4>
                                </Link>
                        </div>
                    </div>
                    <div className="p-6 flex justify-center cursor-pointer hover:shadow-lg duration-200 hover:border rounded-md">
                        <div className="card">
                            <Image src={parfume} alt='carousel' className='p-3'/>
                                <Link href="#">
                                    <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                    <h4 className='text-blue-600'>IDR 100.000.00</h4>
                                </Link>
                        </div>
                    </div>
                    <div className="p-6 flex justify-center cursor-pointer hover:shadow-lg duration-200 hover:border rounded-md">
                        <div className="card">
                            <Image src={parfume} alt='carousel' className='p-3'/>
                                <Link href="#">
                                    <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                    <h4 className='text-blue-600'>IDR 100.000.00</h4>
                                </Link>
                        </div>
                    </div>
                    <div className="p-6 flex justify-center cursor-pointer hover:shadow-lg duration-200 hover:border rounded-md">
                        <div className="card">
                            <Image src={parfume} alt='carousel' className='p-3'/>
                                <Link href="#">
                                    <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                    <h4 className='text-blue-600'>IDR 100.000.00</h4>
                                </Link>
                        </div>
                    </div>
                    <div className="p-6 flex justify-center cursor-pointer hover:shadow-lg duration-200 hover:border rounded-md">
                        <div className="card">
                            <Image src={parfume} alt='carousel' className='p-3'/>
                                <Link href="#">
                                    <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                    <h4 className='text-blue-600'>IDR 100.000.00</h4>
                                </Link>
                        </div>
                    </div>
                    <div className="p-6 flex justify-center cursor-pointer hover:shadow-lg duration-200 hover:border rounded-md">
                        <div className="card">
                            <Image src={parfume} alt='carousel' className='p-3'/>
                                <Link href="#">
                                    <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                    <h4 className='text-blue-600'>IDR 100.000.00</h4>
                                </Link>
                        </div>
                    </div>
                    <div className="p-6 flex justify-center cursor-pointer hover:shadow-lg duration-200 hover:border rounded-md">
                        <div className="card">
                            <Image src={parfume} alt='carousel' className='p-3'/>
                                <Link href="#">
                                    <h2 className='text-xl font-serif font-semibold'>Enodia</h2>
                                    <h4 className='text-blue-600'>IDR 100.000.00</h4>
                                </Link>
                        </div>
                    </div>

                    </div>
                </div>
                <div className="flex justify-center" id='see_more'>
                    <Button className='bg-white hover:bg-gray-100 text-blue-500 border border-blue-500'>Lihat lebih banyak</Button>
                </div>
            </main>
        </div>
    )
}
