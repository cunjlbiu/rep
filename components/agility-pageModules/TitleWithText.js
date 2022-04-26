import React from "react"
import {renderHTML} from "@agility/nextjs";

const TitleWithText = ({module}) => {
    const {fields} = module;

    return (
        <div className={"max-w-full flex items-center lg:min-h-[450px] md:min-w-[335] md:mt-[45px] md:px-5"}
             style={{backgroundColor: fields.bgColor}}>
            <div className={"max-w-screen-xl mx-auto text-center mdplus:space-y-5 md:space-y-8"}>
                <h1 className={"md:text-[40px] md:leading-[48px]"}
                    dangerouslySetInnerHTML={renderHTML(fields.title)}/>
                <div
                    className={"b1 max-w-screen-xl mx-auto text-center md:w-full md:text-[15px] md:leading-[24px] md:font-light"}
                    dangerouslySetInnerHTML={renderHTML(fields.text)}/>
            </div>
        </div>
    );
}

export default TitleWithText;