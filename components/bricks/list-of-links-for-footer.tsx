import React from 'react';
import Link from "next/link";

const ListOfLinksForFooter = () => {
    return (
        <div>
            <ul className={"flex flex-wrap space-x-4"} style={{color: "#8c99af"}}>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>AIF 2023</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>About Kazakhstan</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>News</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>Gallery</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>Contact us</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>FAQ</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>Privacy Policy</Link>
                </li>
            </ul>
        </div>
    );
};

export default ListOfLinksForFooter;