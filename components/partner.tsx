import React from 'react';
import Link from "next/link";

const Partner = (props: {name: string, link: string}) => {
    return (
        <div>
            <h2> {props.name} </h2>
            <Link href={"#"}>
                <img alt={"photo"} src={props.link}/>
            </Link>
        </div>
    );
};

export default Partner;