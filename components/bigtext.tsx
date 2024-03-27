import React from 'react';
import H1Text from "@/components/bricks/h1-text";

const Bigtext = () => {
    return (
        <div className={"relative h-[700px] pt-[250px] text-center"} >
            <div className={"absolute -z-[1] top-0 w-full h-[700px] before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:z-[1] before:bg-video-cover"}>
                <video src={"https://astanainternationalforum.org/assets/video/main-page-video.mp4"} autoPlay={true}
                       loop={true} muted={true} className={"w-full h-full object-cover"}></video>
            </div>
            <div className={"container"}>
                <div>
                    <h1 className={"text-white text-7xl font-extralight"}>Empowering People, Uniting Nations:</h1>
                    <h1 className={"text-white text-7xl"}>Building a Better World Together</h1>
                </div>
                <p className={"mx-auto px-40 text-center flex flex-col my-8 text-3xl text-white font-bold"}>
                    13-14 June 2024
                    <span className={"leading-none font-extralight"}>
                        Astana, Kazakhstan
                    </span>
                </p>
                <a className={"m-4 bg-color-secondary font-medium inline-flex px-8 py-4 rounded text-white"} href={'#'}>AIF Booklet</a>
                <a className={"m-4 bg-color-secondary font-medium inline-flex px-8 py-4 rounded text-white"} href={'#'}>AIF Programme</a>
            </div>
        </div>
    );
};

export default Bigtext;