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
                    <a className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6
                    font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-primary-700
                    focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
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
                    className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6
                    font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none
                    focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition
                    ease-in-out duration-150"
                >
                    {text}
                </a>
            );
        }
    };
    return (
        <div style={{backgroundColor: fields.bgColor}} className={"lg:h-[1600px] md:mt-[90px] "}>
            <div className={"lg:max-w-screen-xl mx-auto lg:flex lg:flex-row my-8 md:mx-5 md:mb-[30px]"}>
                <div className={"lg:w-7/12"}>
                    {fields?.logo?.url ? <img src={fields.logo.url}/> : ""}
                    <h1 className={"pr-6 lg:w-[751px] md:hidden"}>{fields.title}</h1>
                    <h2 className={"lg:hidden mobile"}>{fields.title}</h2>
                    <p className={"b1 lg:w-8/12 pl-12 md:pl-4 border-secondary-green border-l-2 my-6"}>{fields.text}</p>
                </div>
                <div className={"flex justify-evenly space-x-2 mt-3 lg:hidden"}>
                    <a href={"https://cine-med.com/aornonline/"} className={"text-white w-[157px] h-[48px] rounded-full text-primary-blue hover:bg-primary-blue " +
                        "hover:text-white active:scale-90 border-2 border-primary-blue text-center py-1 self-center"}>
                        <span className={"bttn1"}>Log in</span>
                    </a>
                    <a href={"https://cine-med.com/aornonline/contact"} className={"bttn1 text-white w-[157px] h-[48px] rounded-full bg-primary-blue " +
                        "text-center py-2 self-center"}>
                        Sign up
                    </a>
                </div>
                <div className={"lg:translate-y-12 md:overflow-hidden pt-8"}>
                    <img className={"scale-[1.3] md:scale-120"} src={fields.image.url}/>
                </div>
            </div>

            <div className={"bg-soft-green md:pb-10"}>
                <div className={"max-w-screen-xl mx-auto md:mx-5"}>
                    <div style={{backgroundImage:`url(${fields?.textBg?.url})`}} className={"mx-auto bg-elipse bg-primary-white rounded-xl border-2 md:max-w-[700px] border-soft-green " +
                        "-translate-y-1/2 lg:py-16 lg:px-32 text-center mt-28 md:-mb-32 mdplus:-mb-12 "}>
                        <p className={"b1"}>Our continued education offerings are perfect for training new perioperative
                            nurses as well as experienced
                            registered nurses who are looking to transition into the perioperative suite from another
                            specialty.</p><br/>
                        <p className={"b1"}>Pay per course, assigning only the videos suitable for your students, or
                            purchase an Annual subscription
                            <br/>to unlock complete access to our entire library of AORN online curriculum.</p>
                    </div>
                    <div className={"lg:grid lg:grid-cols-2"}>
                        <h3 className={"lg:w-[640px] lg:h-[200px] md:hidden"}>
                            We deliver consistent evidence-based perioperative training for…
                        </h3>
                        <h3 className={"lg:w-[640px] lg:h-[200px] mobile lg:hidden"}>
                            We deliver consistent evidence-based perioperative training for…
                        </h3>

                        <div className={" flex justify-center rounded-xl lg:hidden my-8"}
                             dangerouslySetInnerHTML={renderHTML(fields.mVideo)}/>


                        <div className={"space-y-10 lg:pl-32 overflow-auto"}>
                            <div className={"flex flex-auto space-x-6 md:space-x-3"}>
                                <div><FaCheck className={"text-primary-blue"}></FaCheck></div>
                                <div><p className={"b2 text-[24px]"}>Registered Nurses currently enrolled in Periop
                                    101</p></div>
                            </div>
                            <div className={"flex flex-auto space-x-6 md:space-x-3"}>
                                <div><FaCheck className={"text-primary-blue"}/></div>
                                <div><p className={"b2"}>Registered nurses transferring to the perioperative suite
                                    from other nursing specialties</p></div>
                            </div>
                            <div className={"flex flex-auto space-x-6 md:space-x-3"}>
                                <div><FaCheck className={"text-primary-blue"}/></div>
                                <div><p className={"b2"}>Sterile processing team members</p></div>
                            </div>
                            <div className={"flex flex-auto space-x-6 md:space-x-3"}>
                                <div><FaCheck className={"text-primary-blue"}/></div>
                                <div><p className={"b2"}>Non-RN perioperative team members (e.g. surgical technologist,
                                    surgical assistants/aids)</p></div>
                            </div>
                            <div className={"flex flex-auto space-x-6 md:space-x-3"}>
                                <div><FaCheck className={"text-primary-blue"}/></div>
                                <div><p className={"b2"}>Other RNs involved in operative/invasive procedures in
                                    non-traditional OR settings (e.g. Endoscopy, OB, Cath Lab, Radiology)</p></div>
                            </div>
                            <div className={"flex flex-auto space-x-6 md:space-x-3"}>
                                <div><FaCheck className={"text-primary-blue"}/></div>
                                <div><p className={"b2"}>Nurse managers interested in leveraging video content for
                                    in-services</p></div>
                            </div>
                        </div>

                        <div className={" md:hidden rounded-xl lg:z-50 lg:-translate-y-52"}
                             dangerouslySetInnerHTML={renderHTML(fields.video)}/>

                    </div>

                </div>
            </div>
            <div className={"md:hidden bg-white h-80 w-full -translate-y-80"}/>
        </div>
    )
};

export default AORNHero;