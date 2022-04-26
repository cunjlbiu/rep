import React from 'react'
import {renderHTML} from "@agility/nextjs";

const AvatarWithText = ({module}) =>{
    const {fields} = module
    console.log(fields)
    return(
        <div className={"max-w-full bg-soft-purple py-24 md:py-12 md:px-5"}>
            <div className={"max-w-screen-xl mx-auto flex items-center text-center flex-col space-y-6"}>
                <div className={"rounded-full content-center w-[120px] h-[120px]"}>
                    <img src={fields.image.url}/>
                </div>
                <div className={"avatarText"} dangerouslySetInnerHTML={renderHTML(fields.title)}></div>
                <div className={"avatarName"}>{fields.text}</div>
            </div>
        </div>
    )
}

export default AvatarWithText