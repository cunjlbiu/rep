import React from 'react'
import {renderHTML} from "@agility/nextjs";

const AvatarWithText = ({module}) =>{
    const {fields} = module
    console.log(fields)
    return(
        <div className={"max-w-full bg-soft-purple py-12 md:px-5"}>
            <div className={"max-w-screen-xl mx-auto flex items-center  text-center flex-col space-y-6"}>
                <div className={"rounded-full content-center w-20 h-20"}>
                    <img src={fields.image.url}/>
                </div>
                <h3 className={"max-w-screen-xl"} dangerouslySetInnerHTML={renderHTML(fields.title)}></h3>
                <div className={"b3"}>{fields.text}</div>
            </div>
        </div>
    )
}

export default AvatarWithText