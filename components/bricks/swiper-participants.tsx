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

    let renderBulletForLargeScreen:(index: number, className: string) => string = (index, className) => {

        return '<span class="!h-[2px] !opacity-100 !rounded-[0px] !w-full !m-0 bg-black 3s:!mx-[5px] 3s:!h-[12px] 3s:!min-w-[12px] ' + className + '"></span>';
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
        <div>
            <Swiper
                modules={[A11y, Navigation, Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

                breakpoints={breakpoints}

                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                pagination={{ clickable: true, el: '.swiper-pagination', renderBullet: renderBulletForLargeScreen }}
            >
                {props.swiperContent.map((content, index) => (
                    <SwiperSlide key={index}>
                        {content}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={"flex justify-center items-center"}>
                <button className="custom-prev cursor-pointer transition-all ease-in-out duration-200 3s:scale-0">
                    <SwiperPrev/>
                </button>
                <div className="swiper-pagination !w-[66%] h-full !static flex"/>
                <button className="custom-next cursor-pointer transition-all ease-in-out duration-200 3s:scale-0">
                    <SwiperNext/>
                </button>
            </div>
        </div>
    );
};

//swiper-pagination flex content-between justify-center items-center !w-[30%]

//swiper-pagination flex content-between justify-center items-center !w-[30%] swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal

export default SwiperParticipants;