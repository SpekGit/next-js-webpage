import React from 'react';

const AboutAif = () => {
    return (
        <div className={"container"}>
            <div className={"grid grid-cols-[1fr_1.4fr] my-[100px] mx-auto gap-[92px]"}>
                <div className={"image-container h-[550px] rounded-[5px]"}>
                    <img src={"https://astanainternationalforum.org/assets/images/about-aif2.png"} alt={"photo"}/>
                </div>
                <div className={"pt-[70px]"}>
                    <h5 className={"text-[64px] font-light"}>About the <span className={"font-extrabold"}>AIF</span></h5>
                    <p className={"mb-[30px] leading-[30px] text-justify text-xl"}>
                        As the international community moves towards an era of growing polarization and geopolitical
                        division, Kazakhstan is launching a new platform for dialogue - the Astana International Forum - in order
                        to unite efforts to address key global challenges.
                    </p>
                    <p className={"mb-[30px] leading-[30px] text-justify text-xl"}>
                        The forum will serve as a platform for high-level delegates from foreign governments,
                        international organizations, businesses, and academic circles to engage in dialogue and seek solutions to
                        problems such as climate change, food shortages, and energy security.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutAif;