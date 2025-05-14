"use client"

import style from "./style.module.css"
import Image from "next/image";
import { JSX } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Link from "next/link";
interface FoodT {
    id: number;
    name: string;
    price: number;
    image: string;
}
interface FoodProps {
    foods: FoodT[];
}
function Food({ foods }: FoodProps): JSX.Element {
    return (
        <div>

            <Swiper
                spaceBetween={15}
                slidesPerView={1.8}

                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: { slidesPerView: 3, spaceBetween: 30 },

                    900: { slidesPerView: 5, spaceBetween: 30 },
                }}
                modules={[Pagination]}
                className={`mySwiper ${style.swiperContainer}`}
            >
                {foods.map((food, i) => (
                    <SwiperSlide key={i}>
                        <Link href={`/food/${food.id}`}>
                            <div className={style.imgWrapper}>
                                <Image src={food.image} alt={food.name} fill />
                            </div>
                        </Link>
                        <h5 className={style.title}>
                            <Link href={`/food/${food.id}`}>
                                {food.name}
                            </Link>
                        </h5>
                        <div className={style.cart}>
                            <p>${food.price}</p>
                            <Link href={`/food/${food.id}`}>More Details</Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Food