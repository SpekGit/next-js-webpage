import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Scrollbar, A11y, Thumbs} from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import 'swiper/css/thumbs';

type SwiperParticipantsProps = {
    props: {swiperContent: React.ReactNode[], };
}

const SwiperParticipants:React.FC<SwiperParticipantsProps> = ({ props }) => {

    //@TODO finish breakpoints
    const breakpoints = {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1400: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 10,
        },
    };

    return (
        <Swiper
            modules={[Scrollbar, A11y, Navigation, Thumbs]}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

            breakpoints={breakpoints}

            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

        >
            {props.swiperContent.map((content, index) => (
                <SwiperSlide key={index}>
                    {content}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperParticipants;