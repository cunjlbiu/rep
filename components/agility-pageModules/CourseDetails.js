import React, {useState} from "react";
import {BiLeftArrowAlt} from "react-icons/bi";
import {HiLocationMarker} from "react-icons/hi";
import {GiOpenBook} from "react-icons/gi"

const CourseDetails = ({module}) => {
    const {fields} = module

    return (
        <div className={"max-w-screen-xl mx-auto"}>


            <div className={"flex text-primary-darkblue flex-row items-center"}>
                <div className={" flex text-[18px] text-color"}>
                    < BiLeftArrowAlt/>
                </div>
                <div className={"flex pl-[14px]"}>
                    <p className={"bttn2"}>Back to the courses</p>
                </div>
            </div>


            <div className={"flex pt-[24px]"}>

                {/*  */}

                <div className={"flex flex-col max-w-[864px]"}>

                    <div className={"flex flex-col"}>
                        <h3>Energy-Generating Devices: Safety Precautions (includes Electrosurgery)</h3>
                    </div>


                    {/*    */}

                    <div className={"flex pt-[26px] text-primary-darkblue"}>
                        <div className={"text-[20px] "}>
                            <HiLocationMarker/>
                        </div>
                        <div className={"flex ml-[10px]"}>
                            <a className={"b2 underline"} href="#">UK, London 31 N Worple Way, SW14 8QA</a>
                        </div>
                    </div>


                    {/*    */}

                    <div className={"flex mt-[24px] relative"}>
                        <a className=" b3 absolute  left-[16px] top-[16px] bg-primary-blue text-primary-white rounded-full
                                w-[102px] px-[10px] py-[4px] h-[32px] "
                           href={"#"}>On-demand</a>
                        <img className={"rounded-xl"} src={fields.image.url} alt="device"/>
                    </div>


                    {/*    */}

                    <div className={"flex mt-[24px] flex-col b1 text-primary-darkblue"}>
                        <p className={"b1"}>At CineMed we believe in the power of video-based education for engaging and training heal
                            thcare providers.</p>
                        <br/>
                        <p className={"b1"}>Take your education further with CineMed's online education and training solutions, engaging
                            and interactive. Our integrated content management system (CMS) allows us to create a site
                            that acts as the channel for your training.</p>
                        <br/>
                        <p className={"b1"}>Our leadership team has decades of collective experience in software, bringing a diverse set
                            of backgrounds and perspectives to the table. Take your education further with CineMed's online
                            education and training solutions, engaging and interactive. Our integrated content management
                            system (CMS) allows us to create a site that acts as the channel for your training.</p>
                    </div>

                    {/*    */}

                    <div className={"flex mt-6"}>
                        <div style={{width:"124px", height:"40px", borderRadius:"57px",border:"2px solid #C9D5FD"}}
                             className={"flex items-center justify-center mr-2"}>
                            <a  className={"b3 text-primary-darkblue"} href="">International</a>
                        </div>
                        <div style={{width:"124px", height:"40px", borderRadius:"57px",border:"2px solid #C9D5FD"}}
                             className={"flex items-center justify-center mr-2"}>
                            <a  className={"b3 text-primary-darkblue"} href="">Master Class</a>
                        </div>
                        <div style={{width:"124px", height:"40px", borderRadius:"57px",border:"2px solid #C9D5FD"}}
                             className={"flex items-center justify-center mr-2"}>
                            <a  className={"b3 text-primary-darkblue"} href="">Bariatrics</a>
                        </div>
                    </div>

                    <div className={"flex flex-col mt-[82px]"}>
                        <div className={"flex flex-col"}>
                            <p className={"c1"}>February 21</p>
                            <p className={"b1 mt-4"}>
                                At CineMed we believe in the power of video-based education for engaging
                                and training healthcare providers.
                            </p>
                            <p className={"b1 mt-4"}>
                                Take your education further with CineMed's online education and training solutions, engaging
                                and interactive. Our integrated content management system (CMS) allows us to create a
                                site that acts as the channel for your training.
                            </p>
                        </div>
                        <div className={"flex flex-col"}>
                            <div className={"flex justify-start mt-10 "}>
                                <div className={"flex"}>
                                    <div className={"mr-[16px] flex items-center"}>
                                        <p className={"c2"}>12:00</p>
                                    </div>

                                    <span className={"w-[2px] bg-primary-blue"}></span>

                                    <div className={"flex flex-col ml-4"}>
                                        <p className={"b2 text-primary-grey"}>Medical</p>
                                        <p className={"b1 text-primary-darkblue"}>Hand Hygiene, Scrubbing, Gowning</p>
                                    </div>
                                </div>
                            </div>

                            <div className={"flex justify-start mt-10 "}>
                                <div className={"flex"}>
                                    <div className={"mr-[16px] flex items-center"}>
                                        <p className={"c2"}>16:00</p>
                                    </div>

                                    <span className={"w-[2px] bg-primary-blue"}></span>

                                    <div className={"flex flex-col ml-4"}>
                                        <p className={"b2 text-primary-grey"}>Medical</p>
                                        <p className={"b1 text-primary-darkblue"}>Hand Hygiene, Scrubbing, Gowning</p>
                                    </div>
                                </div>
                            </div>

                            <div className={"flex justify-start mt-10 "}>
                                <div className={"flex"}>
                                    <div className={"mr-[11px] flex items-center"}>
                                        <p className={"c2"}>20:00</p>
                                    </div>

                                    <span className={"w-[2px] bg-primary-blue"}></span>

                                    <div className={"flex flex-col ml-4"}>
                                        <p className={"b2 text-primary-grey"}>Pharmacy</p>
                                        <p className={"b1 text-primary-darkblue"}>Preoperative Skin Antisepsis</p>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex justify-start mt-10 "}>
                                <div className={"flex"}>
                                    <div className={"mr-[16px] flex items-center"}>
                                        <p className={"c2"}>15:00</p>
                                    </div>

                                    <span className={"w-[2px] bg-primary-blue"}></span>

                                    <div className={"flex flex-col ml-4"}>
                                        <p className={"b2 text-primary-grey"}>Pharmacy</p>
                                        <p className={"b1 text-primary-darkblue"}>Preoperative Skin Antisepsis</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                {/*    */}
                {/*    */}

                    <div className={"flex flex-col mt-[64px]"}>
                        <div className={"flex flex-col"}>
                            <p className={"c1"}>February 22</p>
                            <p className={"b1 mt-4"}>
                                CineMed is a global healthcare solutions company committed to improving patient outcomes
                                through innovative training and customer engagement.
                            </p>
                        </div>
                        <div className={"flex flex-col"}>
                            <div className={"flex justify-start mt-10 "}>
                                <div className={"flex"}>
                                    <div className={"mr-[16px] flex items-center"}>
                                        <p className={"c2"}>09:00</p>
                                    </div>

                                    <span className={"w-[2px] bg-primary-blue"}></span>

                                    <div className={"flex flex-col ml-4"}>
                                        <p className={"b2 text-primary-grey"}>Medical</p>
                                        <p className={"b1 text-primary-darkblue"}>Hand Hygiene, Scrubbing, Gowning</p>
                                    </div>
                                </div>
                            </div>

                            <div className={"flex justify-start mt-10 "}>
                                <div className={"flex"}>
                                    <div className={"mr-[20px] flex items-center"}>
                                        <p className={"c2"}>13:00</p>
                                    </div>

                                    <span className={"w-[2px] bg-primary-blue"}></span>

                                    <div className={"flex flex-col ml-4"}>
                                        <p className={"b2 text-primary-grey"}>Medical</p>
                                        <p className={"b1 text-primary-darkblue"}>Hand Hygiene, Scrubbing, Gowning</p>
                                    </div>
                                </div>
                            </div>

                            <div className={"flex justify-start mt-10 "}>
                                <div className={"flex"}>
                                    <div className={"mr-[24px] flex items-center"}>
                                        <p className={"c2"}>11:00</p>
                                    </div>

                                    <span className={"w-[2px] bg-primary-blue"}></span>

                                    <div className={"flex flex-col ml-4"}>
                                        <p className={"b2 text-primary-grey"}>Pharmacy</p>
                                        <p className={"b1 text-primary-darkblue"}>Preoperative Skin Antisepsis</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                {/*Fixed Section */}

                <div className={"flex flex-row ml-8 w-full sticky top-0 relative "} style={{height:"max-content"}}>
                    <div className={"flex flex-col w-full max-w-[450px] bg-white"} style={{borderRadius:"10px", border:" 1px solid #EDF2F4"}}>
                        <div style={{borderBottom:"1px solid #EDF2F4"}}>
                            <div className={"flex mt-6 ml-6"}>
                                <p className={"b3 text-primary-darkblue"}>Price</p>
                            </div>
                            <div className={"flex ml-6 mt-1"}>
                                <p className={"c1 text-primary-darkblue"}>500$-1200$</p>
                            </div>
                            <div className={"flex ml-6"}>
                                <div className={"flex flex-row align-middle mt-1"}>
                                    <p className={"line-through b3 text-primary-grey"}>800-1500$</p>
                                    <div className={"w-[63px] bg-primary-blue rounded-md flex justify-center ml-[14px] "}>
                                        <p className={"text-primary-white b3 "}>25% off</p>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-row items-center mx-6 my-6 justify-between"}>
                                <a className={"flex bttn1 w-[212px] h-14 items-center border-primary-blue rounded-full border-primary-blue border-2 text-primary-blue"} href={"#"}><p className={"mx-auto md:text-[14px]"}>Register for the course</p></a>
                                <a className={"flex bttn1 w-[132px] h-14 items-center bg-primary-blue rounded-full"} href={"#"}><p className={"mx-auto text-primary-white md:text-[14px]"}>Website</p></a>
                            </div>
                        </div>
                        <div className={"flex flex-row py-6 justify-between px-6"} style={{border: "1px solid #EDF2F4"}}>
                            <div className={"flex flex-col"}>
                                <p className={"b2 lg:font-normal"}>Start</p>
                                <p className={"bttn1"}>February 21, 2022</p>
                            </div>
                            <span className={"w-[2px] bg-primary-blue"}></span>
                            <div className={"flex flex-col pr-16"}>
                                <p className={"b2 lg:font-normal"}>End</p>
                                <p className={"bttn1"}>February 22, 2022</p>
                            </div>
                        </div>
                        <div className={"flex"} style={{border: "1px solid #EDF2F4"}}>
                            <div className={"flex-col items-center justify-center px-7 py-7"}>
                                <p className={"b3"}>
                                    This course includes
                                </p>
                                <div className={"flex items-center flex-row mt-4"}>
                                    <div>
                                        <GiOpenBook/>
                                    </div>
                                    <p className={"b2  ml-[19px]"}>
                                        2 hourse on-demand video
                                    </p>
                                </div>
                                <div className={"flex items-center flex-row mt-4"}>
                                    <div>
                                        <GiOpenBook/>
                                    </div>
                                    <p className={"b2 ml-[19px]"}>1 article</p>
                                </div>
                                <div className={"flex items-center flex-row mt-4"}>
                                    <div>
                                        <GiOpenBook/>
                                    </div>
                                    <p className={"b2  ml-[19px]"}>50 downloadable resources</p>
                                </div>
                                <div className={"flex items-center flex-row mt-4"}>
                                    <div>
                                        <GiOpenBook/>
                                    </div>
                                    <p className={"b2  ml-[19px]"}>Access on mobile and TV</p>
                                </div>
                            </div>
                        </div>

                        <div className={"flex flex-col pb-6"} style={{borderTop: "1px solid #EDF2F4"}}>

                            <div className={"flex flex-row px-6 pt-6 justify-between "}>
                                <p className={"b3 text-primary-darkblue"}>Instructor</p>
                                <a href={"#"} className={"underline b3 text-primary-darkblue"}>See all Instructors</a>
                            </div>

                            <div className={"flex flex-row pt-2 pl-6"}>
                                <img className={"rounded-full"} src={fields.roundIcon_1.url} alt="roundedFACE"/>
                                <div className={"flex flex-col pl-6"}>
                                    <p className={"c2 text-primary-darkblue"}>Eric Jones</p>
                                    <p className={"b3 text-primary-darkblue"}>MD, CEO of Medic Inc.</p>
                                </div>
                            </div>

                            <div className={"flex flex-row pt-6 pl-6"}>
                                <img className={"rounded-full"} src={fields.roundIcon_2.url} alt="roundedFACE"/>
                                <div className={"flex flex-col pl-6"}>
                                    <p className={"c2 text-primary-darkblue"}>Norma Ray</p>
                                    <p className={"b3 text-primary-darkblue"}>PhD, Oncology</p>
                                </div>
                            </div>

                            <div className={"flex flex-row pt-6 pl-6"}>
                                <img className={"rounded-full"} src={fields.roundIcon_3.url} alt="roundedFACE"/>
                                <div className={"flex flex-col pl-6"}>
                                    <p className={"c2 text-primary-darkblue"}>Ken Ronald</p>
                                    <p className={"b3 text-primary-darkblue"}>Nurse Practitioner, Banner Health</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className={"flex flex-row mt-[108px] justify-between"}>

                    <div className={"flex flex-row items-center"}>
                        <img className={"rounded-full w-[104px]"} src={fields.roundIcon_1.url} alt="roundedFACE"/>
                        <div className={"flex flex-col pl-6"}>
                            <p className={"c1 text-primary-darkblue"}>Eric Jones</p>
                            <p className={"b2 text-primary-darkblue"}>MD, CEO of Medic Inc.</p>
                        </div>
                    </div>
                    <div className={"flex flex-row items-center"}>
                        <img className={"rounded-full w-[104px]"} src={fields.roundIcon_2.url} alt="roundedFACE"/>
                        <div className={"flex flex-col pl-6"}>
                            <p className={"c1 text-primary-darkblue"}>Norma Ray</p>
                            <p className={"b2 text-primary-darkblue"}>PhD, Oncology</p>
                        </div>
                    </div>
                    <div className={"flex flex-row items-center"}>
                        <img className={"rounded-full w-[104px]"} src={fields.roundIcon_3.url} alt="roundedFACE"/>
                        <div className={"flex flex-col pl-6"}>
                            <p className={"c1 text-primary-darkblue"}>Ken Ronald</p>
                            <p className={"b2 text-primary-darkblue"}>Nurse Practitioner, Banner Health</p>
                        </div>
                    </div>
            </div>

        </div>
    );


}
export default CourseDetails;