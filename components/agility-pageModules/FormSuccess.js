import React from 'react'
import {renderHTML} from "@agility/nextjs";

const FormSuccess = ({module}) =>{
    const {fields} = module;
    
    
    console.log(fields.formLink)


    return(
        <div className={"flex flex-grow self-center min-h-[70vh] pb-12"} style={{backgroundColor:fields.bgColor}}>
            <div className={"max-w-screen-xl mx-auto space-y-5 my-auto"}>
                <h1 className={"text-center text-primary-darkblue"}>
                    {fields.title}
                </h1>
                <div className={"b1 text-primary-darkblue"} dangerouslySetInnerHTML={renderHTML(fields.text)}></div>
                <div className={"flex flex-row justify-center space-x-4"}>
                    <a className={"flex bttn1 w-36 h-12 items-center border-primary-blue rounded-full border-primary-blue border-2 text-primary-blue"}
                       href={"https://cinemed-agility.vercel.app/home"}><p className={"mx-auto"}>Back Home</p></a>

                    {fields?.formLink ?
                        <a className={"flex bttn1 w-36 h-12 items-center bg-primary-blue rounded-full"}
                       href={fields?.formLink?.href}><p className={"mx-auto text-primary-white"}>{fields?.formLink?.text}</p></a> : ""}
                </div>
            </div>
        </div>
    );
}
export default FormSuccess