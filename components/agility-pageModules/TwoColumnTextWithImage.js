import React from "react";
import {AgilityImage} from "@agility/nextjs";
import { renderHTML } from "@agility/nextjs";

const TwoColumnTextWithImage = ({module}) =>{
    const {fields} = module;

    return (
        <div className="flex flex-col relative max-w-screen-xl py-8 mx-auto">
            <div>
                <h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight ml-auto md:text-left">
                    {fields.title}
                </h2>
            </div>
            <div className={`${fields.textLayout == "bot" ?"order-last" : ""} flex flex-row`}>
                <div
                    className={`${!fields.secondColumn ? "w-7/8 mx-auto" : "w-1/2"} list-disc mt-4 px-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200`}
                    dangerouslySetInnerHTML={renderHTML(fields.firstColumn)}
                />
                <div
                    className={`${!fields.secondColumn ? "hide" : "w-1/2"} list-disc mt-4 px-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200`}
                    dangerouslySetInnerHTML={renderHTML(fields.secondColumn)}
                />
            </div>

            <div className="my-6">
                <AgilityImage src={fields.image.url} width="1280" height="768" className="rounded-lg"></AgilityImage>
            </div>
        </div>
    );
}
export default TwoColumnTextWithImage;