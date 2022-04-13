import React, {useState} from "react";
import {AgilityImage, renderHTML} from "@agility/nextjs";
import {FaSearch} from "react-icons/fa";
import Link from "next/link";

const FindCourse = ({module}) =>{
    const {fields} = module
    const [filter, setFilter] = useState('')
    return(
        <div className={"max-w-screen-xl mx-auto h-96 md:min-h-[460px] md:w-full"}>
            <div className={"flex flex-col bg-soft-blue min-w-full py-12  my-12 justify-center space-y-5 rounded-2xl"}>
                <h2 className={"mx-auto"}> {fields.title}</h2>
                <div className={"mx-auto text-center w-[490px]"} dangerouslySetInnerHTML={renderHTML(fields.content)}></div>

                <div className=" bg-white rounded-full relative w-[480px] h-[68px] md:h-[48px] mx-auto md:w-[303px]">
                    <input type="text" className="h-[30px] w-[280px] md:top-[11px] top-[18px] md:w-3/4  left-11 absolute focus:outline-none" placeholder="Search" value={filter} onChange={(e)=>setFilter(e.target.value)}/>
                    <FaSearch className={"absolute top-[26px] md:top-[19px] left-5 text-primary-grey"} />
                        <a className="lg:absolute md:hidden right-[6px] top-[6px] bg-primary-blue text-primary-white rounded-full
                        w-[140px] px-5 py-3 h-[56px] bttn1" href={`${fields.button.href}?filter=${filter}#fil`}>{fields.button.text}</a>
                </div>
                <a className="hidden md:block right-[6px] top-[6px] bg-primary-blue text-primary-white rounded-full
                        w-[303px] px-5 py-2 h-[48px] bttn1 text-center mx-auto" href={`${fields.button.href}?filter=${filter}#fil`}>{fields.button.text}</a>
            </div>
        </div>
    );



}
export default FindCourse