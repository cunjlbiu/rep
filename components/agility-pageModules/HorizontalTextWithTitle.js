import React from "react"
import {renderHTML} from "@agility/nextjs";


const HorizontalTextWithTitle = ({module}) =>{
    const {fields} = module;

    return(
        <div>
            <div className={"max-w-screen-xl mx-auto flex flex-row my-12"}>
                <div className={"w-6/12"}>
                    <p className={"c3 text-primary-blue"}>{fields.caption}</p>
                    <h3 dangerouslySetInnerHTML={renderHTML(fields.title)}></h3>
                </div>
                <div className={"w-6/12 b1"} dangerouslySetInnerHTML={renderHTML(fields.text)} >
                </div>
            </div>
        </div>

    );

}
export default HorizontalTextWithTitle