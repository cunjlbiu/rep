import React from "react"
import {renderHTML} from "@agility/nextjs";


const HorizontalTextWithTitle = ({module}) =>{
    const {fields} = module;

    return(
        <div>
            <div className={"max-w-screen-xl mx-auto flex flex-row my-12 justify-evenly  md:flex-col md:mx-5 "}>
                <div className={""}>
                    <p className={"c3 text-primary-blue md:mb-[16px]"}>{fields.caption}</p>
                    <h3 className={"md:text-[32] md:leading-[40px] md:font-semibold"} dangerouslySetInnerHTML={renderHTML(fields.title)}></h3>
                </div>
                <div className={"b1 w-[640px] md:min-w-[335px] md:w-full md:text-[16px] md:leading-[24px] py-[24px]"} dangerouslySetInnerHTML={renderHTML(fields.text)} >
                </div>
                <a className={"lg:hidden md:flex bttn1 w-36 h-12 items-center border-primary-blue rounded-full" +
                    " border-primary-blue border-2 text-primary-blue"} href={fields.mobileButtonLink ? fields.mobileButtonLink.href : ""}>
                    <p className={"mx-auto md:text-[14px]"}>{fields.mobileButtonLink ? fields.mobileButtonLink.text : ""}</p></a>
            </div>
        </div>

    );

}
export default HorizontalTextWithTitle