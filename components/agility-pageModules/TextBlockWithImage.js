import React from "react";
import {AgilityImage, renderHTML} from "@agility/nextjs"
import Link from "next/link";

const TextBlockWithImage = ({ module }) => {
    // get module fields
    const { fields } = module;

    // function to check whether or not the url is absolute
    const isUrlAbsolute = (url) =>
        url.indexOf("://") > 0 || url.indexOf("//") === 0;

    // function to generate proper link
    const generateLink = (url, target, text) => {
        // if relative link, use next/link
        if (isUrlAbsolute(url) === false) {
            return (
                <Link href={url} title={text} target={target}>
                    <a className="flex bttn1 w-36 h-12 items-center justify-center md:mx-auto bg-primary-blue text-primary-white rounded-full">
                        {text}
                    </a>
                </Link>
            );
        } else {
            // else use anchor tag
            return (
                <a
                    href={url}
                    title={text}
                    target={target}
                    className="flex bttn1 w-36 h-12 items-center justify-center md:mx-auto bg-primary-blue text-primary-white rounded-full"
                >
                    {text}
                </a>
            );
        }
    };

    return (
        <div className="relative lg:px-8 md:px-5" style={{backgroundColor: fields.bgColor}}>

            <div className="flex flex-col lg:flex-row md:flex-columns justify-between max-w-screen-xl mx-auto py-20 md:py-5 md:pb-[64px] items-center ">
                <div className="lg:w-6/12 md:w-full flex-shrink-0 md:pt-[52px] relative md:order-last">
                    <img src={fields.image.url}/>
                </div>
                <div
                    className={`lg:w-6/12 md:w-full mt-16 md:mt-0 ${
                        fields.imagePosition != "right"
                            ? `lg:ml-16 md:ml-{0px} lg:order-last md:lg:order-last`
                            : `lg:mr-16 md:mr-{0px} lg:order-first md:lg:order-last`
                    }`}
                >
                    <div className="g:py-8 text-center justify-center lg:text-left  space-y-5">
                        <div className={"c3 text-primary-blue md:flex"}>{fields.caption}</div>
                        <h3 className={`${
                            fields.imagePosition != "right"
                                ? `lg:pr-8 md:pr-0 md:text-primary-darkblue md:text-[35px] md:text-left`
                                : `lg:pr-8 md:pr-0 md:text-primary-darkblue md:text-[35px] md:text-left`
                        }`}>
                            {fields.title}
                        </h3>
                        <div className="b1 space-y-5 md:text-left md:text-base" dangerouslySetInnerHTML={renderHTML(fields.content)} >

                        </div>
                        {fields.primaryButton &&
                            generateLink(
                                fields.primaryButton.href,
                                fields.primaryButton.target,
                                fields.primaryButton.text
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextBlockWithImage;
