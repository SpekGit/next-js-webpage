import React from 'react';
import Link from "next/link";
import DropDownMenu from "@/components/bricks/drop-down-menu";

const ListOfLinksForHeader = () => {
    return (
        <nav className="flex space-x-4 text-white">
            <div>
                <Link href={"#"} className={"hover:text-color-secondary"}>
                    Home
                </Link>
            </div>
            <div className={"relative flex"}>
                <Link href={"#"} className={"inline hover:text-color-secondary"}>
                    AIF 2023
                </Link>
                <DropDownMenu/>
            </div>
            <div>
                <Link href={"#"} className={"hover:text-color-secondary"}>
                    News
                </Link>
            </div>
            <div>
                <Link href={"#"} className={"hover:text-color-secondary"}>
                    Gallery
                </Link>
            </div>
            <div>
                <Link href={"#"} className={"hover:text-color-secondary"}>
                    About Kazakhstan
                </Link>
            </div>
        </nav>
    );
};

export default ListOfLinksForHeader;