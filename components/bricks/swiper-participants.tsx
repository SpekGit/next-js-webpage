import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, A11y, Thumbs, Pagination} from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/a11y';
import 'swiper/css/pagination';
import {SwiperNext, SwiperPrev} from "@/components/bricks/icons";

type SwiperParticipantsProps = {
    props: {swiperContent: React.ReactNode[], };
}

const SwiperParticipants:React.FC<SwiperParticipantsProps> = ({ props }) => {

    let renderbBullet:Function = (index:number, className:string) => {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }

    const breakpoints = {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    };

    return (
        <div >
            <Swiper
                modules={[A11y, Navigation, Pagination]}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

                breakpoints={breakpoints}

                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                pagination={{ clickable: true, el: '.swiper-pagination'}}


                preventInteractionOnTransition={true}
            >
                {props.swiperContent.map((content, index) => (
                    <SwiperSlide key={index}>
                        {content}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
            <div className="swiper-controls flex justify-between w-[calc(66.666%+100px)] left-[50%]">
                <button className="custom-prev p-2 cursor-pointer transition-all ease-in-out duration-200">
                    <SwiperPrev/>
                </button>
                <button className="custom-next p-2 cursor-pointer transition-all ease-in-out duration-200">
                    <SwiperNext/>
                </button>
            </div>
        </div>
    );
};

export default SwiperParticipants;