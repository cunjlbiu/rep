import React from "react";
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs"

const HomeHeading  = ({module}) => {
    const {fields} = module;
    const isUrlAbsolute = (url) =>
        url.indexOf("://") > 0 || url.indexOf("//") === 0;

    const generateLink = (url, target, text) => {
        // if relative link, use next/link
        if (isUrlAbsolute(url) === false) {
            return (
                <Link href={url} title={text} target={target}>
                    <a className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
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
                    className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                    {text}
                </a>
            );
        }
    };
    return(
        <div style={{backgroundColor: fields.bgColor}}>
            <div className={"max-w-screen-xl md:mx-{20px} md:content-center flex m-auto flex-row my-8 md:flex-col"}>
                <div className={"lg:w-6/12 md:w-full md:justify-center md:items-center"}>
                    <div className={"md:flex md:justify-center"}>
                        <caption className={"c3 text-primary-blue w-max md:text-[14px]"}>{fields.blueText}</caption>
                    </div>
                    <div className={"md:min-w-[335px] md:pt-10 md:w-full"}>
                        <h1 className = {"md:text-[44px] md:leading-[3rem] md:text-primary-darkblue md:px-5"}>{fields.title}</h1>
                        <div className = {"md:px-5"}>
                            <p className={"b1 w-8/12 pl-12 border-primary-blue left-border my-6 md:w-full md:pl-4 md:pr-5"}>{fields.text}</p>
                        </div>
                    </div>
                    <div className={"flex flex-row items-center space-x-4 my-6 md:ml-5 md:justify-center"}>
                        <a className={"flex bttn1 w-36 h-12 items-center bg-primary-blue rounded-full"} href={fields.leftButton.href}><p className={"mx-auto text-primary-white md:text-[14px]"}>{fields.leftButton.text}</p></a>
                        <a className={"flex bttn1 w-36 h-12 items-center border-primary-blue rounded-full border-primary-blue border-2 text-primary-blue"} href={fields.rightButton.href}><p className={"mx-auto md:text-[14px]"}>{fields.rightButton.text}</p></a>
                    </div>
                </div>
                <div className={"lg:w-6/12 md:w-full md:justify-center md:items-center"}>
                    <img className={"transform lg:-translate-y-16"} src={fields.image.url}/>
                </div>
            </div>
        </div>
    )
};

export default HomeHeading;