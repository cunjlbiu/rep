import React from "react";
import Link from "next/link";
import {AgilityImage, renderHTML} from "@agility/nextjs"
import {FaCheck} from "react-icons/fa";

const AORNHero = ({module}) => {
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
        <div style={{backgroundColor: fields.bgColor}} className={"h-[1600px]"}>
            <div className={"max-w-screen-xl mx-auto flex flex-row my-8"}>
                <div className={"w-7/12"}>
                    <img src={fields.logo.url}/>
                    <h1 className={"pr-6 w-[751px]"}>{fields.title}</h1>
                    <p className={"b1 w-8/12 pl-12 border-secondary-green border-l-2 my-6"}>{fields.text}</p>
                </div>
                <div className={"translate-y-12"}>
                    <img className={"scale-[1.3]"} src={fields.image.url}/>
                </div>
            </div>

            <div className={"bg-soft-green"}>
                <div className={"max-w-screen-xl mx-auto"}>
                    <div className={" mx-auto bg-primary-white rounded-xl border-2 border-soft-green -translate-y-1/2 py-16 px-32 text-center mt-28 "}>
                        <p className={"b1"}>Our continued education offerings are perfect for training new perioperative nurses as well as experienced
                            registered nurses who are looking to transition into the perioperative suite from another specialty.</p><br/>
                        <p className={"b1"}>Pay per course, assigning only the videos suitable for your students, or purchase an Annual subscription
                            <br/>to unlock complete access to our entire library of AORN online curriculum.</p>
                    </div>
                    <div className={"grid grid-cols-2 "}>
                        <h3 className={"w-[640px] h-[200px]"}>
                            We deliver consistent evidence-based perioperative training for…
                        </h3>


                        <div className={"space-y-6 pl-32 "}>
                            <div className={"flex flex-auto space-x-6"}>
                                <div><FaCheck className={"text-primary-blue"}></FaCheck></div>
                                <div><p className={"b2"}>Registered Nurses currently enrolled in Periop 101</p></div>
                            </div>
                            <div className={"flex flex-auto space-x-6"}>
                                <div><FaCheck className={"text-primary-blue"}></FaCheck></div>
                                <div><p className={"b2"}>Registered nurses transferring to the perioperative suite from other nursing specialties</p></div>
                            </div>
                            <div className={"flex flex-auto space-x-6"}>
                                <div><FaCheck className={"text-primary-blue"}></FaCheck></div>
                                <div><p className={"b2"}>Sterile processing team members</p></div>
                            </div>
                            <div className={"flex flex-auto space-x-6"}>
                                <div><FaCheck className={"text-primary-blue"}></FaCheck></div>
                                <div><p className={"b2"}>Non-RN perioperative team members (e.g. surgical technologist, surgical assistants/aids)</p></div>
                            </div>
                            <div className={"flex flex-auto space-x-6"}>
                                <div><FaCheck className={"text-primary-blue"}></FaCheck></div>
                                <div><p className={"b2"}>Other RNs involved in operative/invasive procedures in non-traditional OR settings (e.g. Endoscopy, OB, Cath Lab, Radiology)</p></div>
                            </div>
                            <div className={"flex flex-auto space-x-6"}>
                                <div><FaCheck className={"text-primary-blue"}></FaCheck></div>
                                <div><p className={"b2"}>Nurse managers interested in leveraging video content for in-services</p></div>
                            </div>
                        </div>

                        <div className={" rounded-xl z-50 -translate-y-32 "} dangerouslySetInnerHTML={renderHTML(fields.video)}></div>

                    </div>

                </div>
            </div>
            <div className={"bg-white h-60 w-full -translate-y-60"}></div>
        </div>
    )
};

export default AORNHero;