import React from "react"
import {renderHTML} from "@agility/nextjs";

const TitleWithText = ({module}) => {
    const {fields} = module;

    return(
        <div className={"max-w-full py-10"} style={{backgroundColor: fields.bgColor}}>
            <div className={"max-w-screen-xl mx-auto text-center space-y-5"}>
                <h1 dangerouslySetInnerHTML={renderHTML(fields.title)}></h1>
                <div className={"b1 max-w-screen-xl mx-auto text-center"} dangerouslySetInnerHTML={renderHTML(fields.text)}/>
            </div>
        </div>
    );
}

export default TitleWithText