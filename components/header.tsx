import React from 'react';
import Link from "next/link";
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
        <header className={"absolute w-full top-4 z-2 text-20"}>
            <div className={"container"}>
                <div className={"flex items-center justify-between"}>
                    <Link href={"#"}> <LogoWithLink/></Link>
                    <ListOfLinksForHeader/>
                    <SocialNetworkList/>
                    <Link href={'/'}>Log in</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;