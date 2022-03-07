import React from "react";
import {AgilityImage} from "@agility/nextjs";

const ImageRowsWithTitle = ({module}) =>{
    const {fields} = module;

    return(
        <div className="max-w-screen-xl my-8 mx-auto">
            <div>
                {!fields.title ? "":(<h1 className="font-display text-xl font-black text-secondary-500 md:text-3xl lg:text-2xl tracking-wide text-left mt-20 lg:leading-tight ml-auto md:text-left">{fields.title}</h1>
                )}
                <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200 w-1/2 pb-4">{fields.text}</p>
            </div>
            <div className="grid grid-rows-1 grid-flow-col justify-between">
            {fields.images.media.map((image, index) =>
                <div><AgilityImage src={image.url} width="300" height="200"/></div>
            )}
            </div>
        </div>
    );
};
export default  ImageRowsWithTitle