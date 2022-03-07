import React from "react";
import {AgilityImage} from "@agility/nextjs";

const Logos = ({module}) =>{
    const {fields} = module;

    return(
        <div className={"max-w-full bg-soft-blue h-64 justify-between py-6 "}>
            <div className="max-w-screen-xl my-8 mx-auto grid grid-rows-2 justify-center space-y-5">
                <div><caption className={"c1 w-max mx-auto"}>We collaborate with 200+ leading universities and companies</caption></div>
                <div className="grid grid-rows-1 grid-flow-col justify-evenly">
                    {fields.images.media.map((image, index) =>
                        <div className={"h-10"}>{<AgilityImage src={image.url} width={image.metaData.pixelWidth}
                                            height="48"/>}</div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default  Logos