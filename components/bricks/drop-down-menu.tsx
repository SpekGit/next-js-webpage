import React, {useState} from 'react';
import {DropdownIcon} from "@/components/bricks/icons";

const DropDownMenu = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpened(!isOpened);
    };

    return (
        <>
                <button onClick={()=>{toggleDropdown()}}>
                    <DropdownIcon isUp={isOpened}/>
                </button>
                <ul className={"absolute z-[3] bg-white p-4 transition rounded easy-in-out text-black text-base font-medium origin-[85%_0%] top-full " + (isOpened ? "scale-100" : "scale-0")}>
                    <a href="#" className={"hover:text-color-secondary"}>
                        <li>Speakers</li>
                    </a>
                    <a href="#" className={"hover:text-color-secondary"}>
                        <li>Program</li>
                    </a>
                    <a href="#" className={"hover:text-color-secondary"}>
                        <li>AIF Guide</li>
                    </a>
                    <a href="#" className={"hover:text-color-secondary"}>
                        <li>Media</li>
                    </a>
                    <a href="#" className={"hover:text-color-secondary"}>
                        <li>Partners</li>
                    </a>
                </ul>
        </>
    );
};

export default DropDownMenu;