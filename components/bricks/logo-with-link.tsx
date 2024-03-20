import React from 'react';
import Image from "next/image";
import Link from "next/link";

const LogoWithLink = () => {
    return (
        <Link href={"#"}>
            <Image src={"/Logo.png"} alt={"logo"} width={123} height={70}/>
        </Link>
    );
};

export default LogoWithLink;