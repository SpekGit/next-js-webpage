import React from 'react';
import LogoWithLink from "@/components/bricks/logo-with-link";
import ListOfLinksForFooter from "@/components/bricks/list-of-links-for-footer";
import SocialNetworkList from "@/components/social-network-list";

const Footer = () => {
    return (
        <footer className={"relative mt-auto"} >
            <div style={{backgroundColor: "#071c44", padding: "30px 0"}} >
                <div className={"container"}>
                    <div className={"flex items-center justify-between"}>
                        <LogoWithLink/>
                        <ListOfLinksForFooter/>
                        <SocialNetworkList/>
                    </div>
                    <div className={"flex justify-center mt-1"} style={{color: "#3f4f6c"}}>
                        <p>© 2023 AIF. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;