import React from 'react';
import Link from "next/link";
import Timer from "@/components/bricks/timer";
import {DiagArrow} from "@/components/bricks/icons";

const Registration = () => {
    return (
        <div className={"relative h-[200px] bottom-0 w-full bg-timer-bg bg-center"}>
            <div className={"container flex items-center justify-center h-full"}>
                <Timer/>
                <Link className={"text-white py-[15px] px-[30px] rounded inline-flex justify-center items-center " +
                    "font-medium bg-color-secondary w-[30%] m-5 max-w-[350px] relative"} href={"#"}>
                    Register
                    <DiagArrow/>
                </Link>

            </div>
        </div>
    );
};

export default Registration;