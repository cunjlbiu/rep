import React from "react";
import {AgilityImage} from "@agility/nextjs";

const Investors = ({module}) =>{
    const {fields} = module;
    //console.log(fields.images.media[0])
    return(
        <div className={"max-w-full justify-between py-6 "}>
            <div className="max-w-screen-xl my-8 mx-auto grid grid-rows-2 justify-center space-y-5">
                <h2 className={"w-max mx-auto"}> {fields.title}</h2>
                <div className={"b1 w-4/5 text-center mx-auto"}>{fields.text}</div>
                <div className="grid grid-rows-1 grid-flow-col justify-evenly py-12">
                    {fields.images.media.map((image, index) =>
                        <div className={"h-10"}>{<AgilityImage src={image.url} width={120}
                                                               height="48"/>}</div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default  Investors