import React from 'react';
import {InstagramIcon, LinkedinIcon, TelegramIcon, TwitterIcon, YoutubeIcon} from "@/components/bricks/icons";
import Link from "next/link";

const SocialNetworkList = () => {
    return (
        <div>
            <div className={"flex"}>
                <Link href={"#"} className={"mr-5"}>
                    <LinkedinIcon/>
                </Link>
                <Link href={"#"} className={"mr-5"}>
                    <InstagramIcon/>
                </Link>
                <Link href={"#"} className={"mr-5"}>
                    <YoutubeIcon/>
                </Link>
                <Link href={"#"}  className={"mr-5"}>
                    <TwitterIcon/>
                </Link>
                <Link href={"#"} className={"mr-5"}>
                    <TelegramIcon/>
                </Link>
            </div>
        </div>
    );
};

export default SocialNetworkList;