import React, {useState} from "react";
import {AgilityImage, renderHTML} from "@agility/nextjs"
import Link from "next/link";

const FindCourse = ({module}) =>{
    const {fields} = module
    const [filter, setFilter] = useState('')
    return(
        <div className={"max-w-screen-xl mx-auto h-96"}>
            <div className={"flex flex-col bg-soft-blue min-w-full h-80 my-12 justify-center space-y-5 rounded-2xl"}>
                <h2 className={"mx-auto"}> {fields.title}</h2>
                <div className={"mx-auto text-center"} dangerouslySetInnerHTML={renderHTML(fields.content)}></div>

                <div className="custom-search mx-auto">
                    <input type="text" className="custom-search-input" placeholder="Search" value={filter} onChange={(e)=>setFilter(e.target.value)}/>
                        <a className="absolute right-[6px] top-[6px] bg-primary-blue text-primary-white rounded-full
                        w-[140px] px-5 py-3 h-[56px] bttn1" href={`${fields.button.href}?filter=${filter}#fil`}>{fields.button.text}</a>
                </div>

            </div>
        </div>
    );



}
export default FindCourse