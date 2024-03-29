import React from 'react';
import Link from "next/link";
import Image from "next/image";
import ListOfLinksForHeader from "@/components/bricks/list-of-links-for-header";
import SocialNetworkList from "@/components/social-network-list";
import LogoWithLink from "@/components/bricks/logo-with-link";

let links: { linkName: string; linkHref: string }[] = [
    { linkName: "Home", linkHref: "/" },
    { linkName: "AIF 2023", linkHref: "/" },
    { linkName: "News", linkHref: "/" },
    { linkName: "Gallery", linkHref: "/" },
    { linkName: "About Kazakhstan", linkHref: "/" }
];

const Header = () => {
    return (
        <header className={"absolute w-full top-8 z-[2] text-lg"}>
            <div className={"container"}>
                <div className={"flex items-center justify-between"}>
                    <LogoWithLink/>
                    <ListOfLinksForHeader/>
                    <SocialNetworkList/>
                    <Link className={"text-white hover:text-color-secondary"} href={'/'}>Log in</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;