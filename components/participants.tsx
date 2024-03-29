import React from 'react';
import SwiperParticipants from "@/components/bricks/swiper-participants";

const placeHolders:React.ReactNode[] = [
    <div className={"flex items-center justify-center w-[300px] h-[300px] bg-gray-200"}>
        <h3 className={"text-color-primary text-[24px] font-semibold"}>
            Participant
        </h3>
    </div>,
    <div className={"flex items-center justify-center w-[300px] h-[300px] bg-gray-200"}>
        <h3 className={"text-color-primary text-[24px] font-semibold"}>
            Participant
        </h3>
    </div>,
    <div className={"flex items-center justify-center w-[300px] h-[300px] bg-gray-200"}>
        <h3 className={"text-color-primary text-[24px] font-semibold"}>
            Participant
        </h3>
    </div>,
    <div className={"flex items-center justify-center w-[300px] h-[300px] bg-gray-200"}>
        <h3 className={"text-color-primary text-[24px] font-semibold"}>
            Participant
        </h3>
    </div>,
    <div className={"flex items-center justify-center w-[300px] h-[300px] bg-gray-200"}>
        <h3 className={"text-color-primary text-[24px] font-semibold"}>
            Participant
        </h3>
    </div>,
    <div className={"flex items-center justify-center w-[300px] h-[300px] bg-gray-200"}>
        <h3 className={"text-color-primary text-[24px] font-semibold"}>
            Participant
        </h3>
    </div>,
    <div className={"flex items-center justify-center w-[300px] h-[300px] bg-gray-200"}>
        <h3 className={"text-color-primary text-[24px] font-semibold"}>
            Participant
        </h3>
    </div>,
    <div className={"flex items-center justify-center w-[300px] h-[300px] bg-gray-200"}>
        <h3 className={"text-color-primary text-[24px] font-semibold"}>
            Participant
        </h3>
    </div>,
    <div className={"flex items-center justify-center w-[300px] h-[300px] bg-gray-200"}>
        <h3 className={"text-color-primary text-[24px] font-semibold"}>
            Participant
        </h3>
    </div>
];
const Participants = () => {
    return (
        <div className={"container"}>
            <div className={"flex items-center justify-between mt-20 mx-0 mb-[50px]"}>
                <h2 className={"text-color-primary text-[64px] font-semibold"}>
                    Participants
                </h2>
            </div>
            <div className={"container relative my-[40px] "}>
                <SwiperParticipants props={{swiperContent: placeHolders}}/>
            </div>
        </div>
    );
};

export default Participants;