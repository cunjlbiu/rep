import React from "react";
import {AgilityImage, renderHTML} from "@agility/nextjs"
import Link from "next/link";

const FindCourse = ({module}) =>{
    const {fields} = module

    return(
        <div className={"max-w-screen-xl mx-auto h-96"}>
            <div className={"flex flex-col bg-soft-blue min-w-full h-80 my-12 justify-center space-y-5 rounded-2xl"}>
                <h2 className={"mx-auto"}> {fields.title}</h2>
                <div className={"mx-auto text-center"} dangerouslySetInnerHTML={renderHTML(fields.content)}></div>

                <div className="custom-search mx-auto">
                    <input type="text" className="custom-search-input" placeholder="Search"/>
                        <button className="custom-search-botton" type="submit">Find a course</button>
                </div>

            </div>
        </div>
    );



}
export default FindCourse