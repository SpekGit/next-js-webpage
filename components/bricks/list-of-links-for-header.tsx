import React from 'react';
import Link from "next/link";

const ListOfLinksForHeader = () => {
    return (
        <nav className="flex space-x-4 text-white">
            <Link href={"#"} className={"hover:text-color-secondary"}>
                Home
            </Link>
            <Link href={"#"} className={"hover:text-color-secondary"}>
                AIF 2023
            </Link>
            <Link href={"#"} className={"hover:text-color-secondary"}>
                News
            </Link>
            <Link href={"#"} className={"hover:text-color-secondary"}>
                Gallery
            </Link>
            <Link href={"#"} className={"hover:text-color-secondary"}>
                About Kazakhstan
            </Link>
        </nav>
    );
};

export default ListOfLinksForHeader;