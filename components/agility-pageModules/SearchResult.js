import React from 'react';
import {BsArrowLeftShort} from "react-icons/bs";

const SearchResult = () => {
    return (
        <div className={"max-w-screen-xl mx-auto flex-row"}>

            <div className={"flex flex-row"}>
                <div className={"row pb-[22px]"}>
                    <a className={"flex"} href="">
                        <BsArrowLeftShort className={"text-primary-darkblue w-[24px] h-[24px]"}/>
                        <p className={"bttn2 text-primary-darkblue"}>Back to FAQ</p>
                    </a>
                </div>
            </div>

            <div className={""}>
                <h1 className={""}>About CineMed</h1>
                <div>

                </div>
            </div>



        </div>
    );
};

export default SearchResult;
