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
                    <a className="flex bttn1 w-36 h-12 items-center justify-center bg-primary-blue text-primary-white rounded-full">
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
                    className="flex bttn1 w-36 h-12 items-center justify-center bg-primary-blue text-primary-white rounded-full"
                >
                    {text}
                </a>
            );
        }
    };

    return (
        <div className="relative px-8" style={{backgroundColor: fields.bgColor}}>

            <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
                <div className="md:w-6/12 flex-shrink-0 relative">
                    <img src={fields.image.url}/>
                </div>
                <div
                    className={`md:w-6/12 mt-16 md:mt-0 ${
                        fields.imagePosition != "right"
                            ? `md:ml-12 lg:ml-16 md:order-last`
                            : `md:mr-12 lg:mr-16 md:order-first`
                    }`}
                >
                    <div className="g:py-8 text-center justify-center md:text-left space-y-5">
                        <div className={"c3 text-primary-blue"}>{fields.caption}</div>
                        <h3 className={`${
                            fields.imagePosition != "right"
                                ? `pr-8`
                                : `pr-8`
                        }`}>
                            {fields.title}
                        </h3>
                        <div className="b1 space-y-5" dangerouslySetInnerHTML={renderHTML(fields.content)} >

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
