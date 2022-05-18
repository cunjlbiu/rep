import React, {useState} from "react";
import {BiLeftArrowAlt} from "react-icons/bi";
import {HiLocationMarker} from "react-icons/hi";
import {GiOpenBook} from "react-icons/gi"
import {renderHTML} from "@agility/nextjs";
import {CourseItem} from "./FindCourseOfferings";

const Schedule = ({day}) => {
    console.log(day)
    return (
        <div className={"flex flex-col mt-[82px] md:first:mt-16 md:mt-10"}>
            <div className={"flex flex-col"}>
                <p className={"c1 md:font-medium md:text-[24px] md:leading-8"}>{day?.fields?.date}</p>
                <div className={"b1 mt-4 text-primary-darkblue"}
                     dangerouslySetInnerHTML={renderHTML(day?.fields?.description)}/>
            </div>
            <div className={"flex flex-col"}>

                {day?.fields?.timetable?.map((item) =>

                    <div className={"flex justify-start mt-10 md:mt-6 "}>
                        <div className={"flex md:min-h-[50px] md:items-center"}>
                            <div className={"mr-[16px] md:mr-2 min-w-[180px] max-w-[180px] md:pr-1 md:min-h-[50px] flex items-center"}>
                                <p className={"c2"}>{item.fields?.time}</p>
                            </div>
                            <span className={"h-full"} style={{borderRight: "2px solid #1C58F8"}}></span>
                            <div className={"flex flex-col ml-4 justify-center"}>
                                <div className={"lg:hidden"}>
                                    <p className={"b3 text-primary-grey"}>{item.fields?.type}</p>
                                    <p className={"b1 mobile text-primary-darkblue"}>{item.fields?.description}</p>
                                </div>
                                <div className={"md:hidden"}>
                                    <p className={"b2 text-primary-grey"}>{item.fields?.type}</p>
                                    <p className={"b1 text-primary-darkblue"}>{item.fields?.description}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                ).reverse()}


            </div>
        </div>


    )
}



const CourseDetails = ({customData, module, dynamicPageItem}) => {
    const dynamicFields = dynamicPageItem.fields
    const startDate = dynamicFields?.startDate ? (new Date(dynamicFields.startDate)) : null
    const endDate = dynamicFields?.endDate ? (new Date(dynamicFields.endDate)) : null
    const related = customData.relatedCourse

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const onButtonClick = () => setIsOpenMenu(!isOpenMenu)


    const [schedule, setSchedule] = useState((customData?.schedule?.items || []));
    const [include, setInclude] = useState((customData?.include?.items || []));
    const [instructors, setInstructors] = useState((customData?.instructors?.items || []));
    console.log(customData)
    return (
        <div className={"max-w-screen-xl mx-auto py-14 pb-8 md:px-5"}>


            <div className={"flex text-primary-darkblue flex-row items-center"}>
                <div className={" flex text-[18px] text-color"}>
                    < BiLeftArrowAlt/>
                </div>
                <div className={"flex pl-[14px]"}>
                    <a href={"/find-a-course"}><p className={"bttn2 cursor-pointer"}>Back to results</p></a>
                </div>
            </div>


            <div className={"flex pt-[24px] md:pt-[16px]"}>

                {/*  */}

                <div className={"flex flex-col max-w-[864px] md:min-w-[312px]"}>

                    <div className={"flex flex-col"}>
                        <h3>{dynamicFields.name}</h3>
                    </div>


                    {/*    */}

                    <div className={"flex pt-[26px] md:pt-[20px] md:items-center text-primary-darkblue"}>
                        <div className={"text-[20px] "}>
                            <HiLocationMarker/>
                        </div>
                        <div className={"flex ml-[10px]"}>
                            <a className={"b2 md:text-[14px] md:font-medium md:leading-4 md:uppercase underline"}
                               href="#">{dynamicFields.fullAddress}</a>
                        </div>
                    </div>


                    {/*    */}

                    <div className={"flex mt-[24px] relative"}>
                        <a className=" b3 absolute  left-[16px] top-[16px] md:left-[8px] md:top-[8px] bg-primary-blue text-primary-white rounded-full
                                w-[102px] px-[10px] py-[4px] h-[32px] "
                           href={"#"}>On-demand</a>
                        <img className={"rounded-xl"} src={dynamicFields.image.url} alt="device"/>
                    </div>


                    {/*Mobile Fixed Price Section*/} {/*TODO Start*/}


                    <div className={"lg:hidden mdplus:hidden md:flex-row mt-[15px] w-full md:flex "}
                         style={{height: "max-content"}}>
                        <div className={"flex flex-col w-full max-w-[450px] pb-5 bg-white"}
                             style={{borderRadius: "10px", border: " 1px solid #EDF2F4"}}>
                            <div style={{borderBottom: "1px solid #EDF2F4"}}>
                                <div className={"flex mt-4 ml-4"}>
                                    <p className={"b3 text-primary-darkblue"}>Price</p>
                                </div>
                                <div className={"flex ml-4 mt-1"}>
                                    <p className={"c1 text-primary-darkblue"}>
                                        ${dynamicFields?.discount ? parseInt(dynamicFields.priceLow) * (100 - parseInt(dynamicFields.discount)) / 100
                                        : dynamicFields.priceLow}- $
                                        {dynamicFields?.discount ? parseInt(dynamicFields.priceHigh) * (100 - parseInt(dynamicFields.discount)) / 100
                                            : dynamicFields.priceHigh}
                                    </p>
                                </div>
                                <div className={"flex ml-4"}>
                                    <div className={"flex flex-row align-middle mt-2"}>
                                        <p className={"line-through b3 text-primary-grey"}>
                                            {dynamicFields?.discount ?
                                                `${dynamicFields.priceLow}$ - ${dynamicFields.priceHigh}$`
                                                : ""}
                                        </p>
                                        <div
                                            className={"w-[63px] bg-primary-blue rounded-md flex justify-center ml-[14px] " + ` ${dynamicFields?.discount ? '' : 'hidden'}`}>
                                            <p className={"text-primary-white b3 "}>{dynamicFields?.discount}% off</p>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className={"flex flex-row items-center mx-6 my-6 justify-between"}>*/}
                                {/*    <a className={"flex bttn1 w-[212px] h-14 items-center border-primary-blue rounded-full border-primary-blue border-2 text-primary-blue"} href={dynamicFields?.priceLButton?.href}>*/}
                                {/*        <p className={"mx-auto md:text-[14px]"}>{dynamicFields?.priceLButton?.text}</p></a>*/}
                                {/*    <a className={"flex bttn1 w-[132px] h-14 items-center bg-primary-blue rounded-full cursor-pointer"} href={dynamicFields?.priceRButton?.href}>*/}
                                {/*        <p className={"mx-auto text-primary-white md:text-[14px]"}>{dynamicFields?.priceRButton?.text}</p></a>*/}
                                {/*</div>*/}
                            </div>
                            <div className={"flex flex-row py-6 justify-between px-[12px]"}
                                 style={{border: "1px solid #EDF2F4"}}>
                                <div className={"flex flex-col"}>
                                    <p className={"b2 lg:font-normal"}>{startDate ? "Start" : ""}</p>
                                    <p className={"bttn1"}>{startDate ? startDate.toLocaleDateString(undefined, {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric"
                                    }) : ""}</p>
                                </div>
                                <span className={"w-[2px] bg-primary-blue"}></span>
                                <div className={"flex flex-col pl-[10px] "}>
                                    <p className={"b2 lg:font-normal"}>{endDate ? "End" : ""}</p>
                                    <p className={"bttn1"}>{endDate ? endDate.toLocaleDateString(undefined, {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric"
                                    }) : ""}</p>
                                </div>
                            </div>
                            <div className={"flex"} style={{border: "1px solid #EDF2F4"}}>
                                <div className={"flex-col items-center justify-center px-4 py-4"}>
                                    <p className={"b3"}>
                                        {dynamicFields?.includeTitle}
                                    </p>
                                    {include.map((item) =>
                                        <div className={"flex items-center flex-row mt-4"}>
                                            <div className={"w-[24px] flex-shrink-0 h-[24px]"}>
                                                <img width={24} height={24} src={item.fields.image.url}/>
                                            </div>
                                            <p className={"b2  ml-[19px]"}>
                                                {item.fields.text}
                                            </p>
                                        </div>
                                    ).reverse()}
                                </div>
                            </div>

                            <div
                                className={"flex flex-col pb-4  max-h-[370px]" + ` ${!isOpenMenu ? "" : "overflow-y-scroll overflow-x-hidden"}` + `${instructors.length ? "" : " hidden"}`}
                                style={{borderTop: "1px solid #EDF2F4"}}>

                                <div className={"flex flex-row px-4 pt-4 justify-between "}>
                                    <p className={"detail-course text-primary-darkblue"}>{dynamicFields?.instructorsTitle}</p>
                                    <a onClick={onButtonClick}
                                       className={`underline detail-course text-primary-darkblue  ${(instructors.length < 4) ? "hidden" : ""}`}>
                                        {!isOpenMenu ? `${dynamicFields?.seeAllText ? dynamicFields.seeAllText : "See all"}` : "Hide"}</a>
                                </div>

                                {/*Static instructors*/}

                                <div className={`${isOpenMenu ? 'hidden' : 'all_instuctors'}`}>
                                    {instructors.slice(0).reverse().map((item, i) => {
                                        if (i < 3)
                                            return (
                                                <div className={"flex flex-row pt-4 pl-4"}>
                                                    <img
                                                        className={"rounded-full flex-shrink-0 h-[56px] w-[56px] object-cover"}
                                                        src={item.fields.image.url} alt="roundedFACE"/>
                                                    <div className={"flex flex-col pl-6"}>
                                                        <p className={"c2 text-primary-darkblue"}>{item.fields.name}</p>
                                                        <p className={"b3 text-primary-darkblue"}>{item.fields.specialty}</p>
                                                    </div>
                                                </div>
                                            )
                                    })}
                                </div>

                                {/*Dinamic instructors*/}

                                <div className={`${isOpenMenu ? 'all_instuctors' : 'hidden'}`}>

                                    {instructors.map((item) =>
                                        <div className={"flex flex-row py-4 px-4"}>
                                            <img className={"rounded-full flex-shrink-0 h-[56px] w-[56px] object-cover"}
                                                 src={item.fields.image.url} alt="roundedFACE"/>
                                            <div className={"flex flex-col pl-6"}>
                                                <p className={"c2 text-primary-darkblue"}>{item.fields.name}</p>
                                                <p className={"b3 text-primary-darkblue"}>{item.fields.specialty}</p>
                                            </div>
                                        </div>).reverse()}

                                </div>
                            </div>

                        </div>
                    </div>


                    {/*TODO END*/}
                    {/*/////////////-------------///////////////*/}


                    <div className={"flex mt-[24px] md:mt-[16px] flex-col b1 text-primary-darkblue"}
                         dangerouslySetInnerHTML={renderHTML(dynamicFields.courseDetails)}/>

                    {/*    */}

                    <div className={"flex flex-wrap mt-4 md:justify-evenly"}>
                        <div style={{
                            minWidth: "124px",
                            height: "40px",
                            borderRadius: "57px",
                            border: "2px solid #C9D5FD"
                        }}
                             className={"flex items-center justify-center mr-2 md:mt-2"}>
                            <a className={"b3 text-primary-darkblue"} href="">{dynamicFields.place}</a>
                        </div>
                        <div style={{
                            minWidth: "124px",
                            height: "40px",
                            borderRadius: "57px",
                            border: "2px solid #C9D5FD"
                        }}
                             className={"flex items-center justify-center mr-2 md:mt-2"}>
                            <a className={"b3 text-primary-darkblue"} href="">{dynamicFields.specialty}</a>
                        </div>
                        <div style={{
                            minWidth: "124px",
                            height: "40px",
                            borderRadius: "57px",
                            border: "2px solid #C9D5FD"
                        }}
                             className={"flex items-center justify-center mr-2 md:mt-2"}>
                            <a className={"b3 text-primary-darkblue"} href="">{dynamicFields.type}</a>
                        </div>
                    </div>

                    <div>{schedule.map((item) => <Schedule day={item}/>).reverse()}</div>

                    <div className={"lg:hidden md:flex flex-row items-center my-6 justify-between"}>
                        <a className={"flex bttn1 min-w-[155px] h-14 items-center border-primary-blue rounded-full border-primary-blue border-2 text-primary-blue"}
                           target={dynamicFields?.priceLButton?.target}
                           href={dynamicFields?.priceLButton?.href}>
                            <p className={"mx-auto md:text-[14px]"}>{dynamicFields?.priceLButton?.text}</p></a>
                        <a className={"flex bttn1 min-w-[127px] h-14 items-center bg-primary-blue rounded-full cursor-pointer"}
                           target={dynamicFields?.priceRButton?.target}
                           href={dynamicFields?.priceRButton?.href}>
                            <p className={"mx-auto text-primary-white md:text-[14px]"}>{dynamicFields?.priceRButton?.text}</p>
                        </a>
                    </div>


                    {/*    */}
                    {/*    */}

                </div>

                {/*Fixed Section */}

                <div className={"flex flex-row ml-8 w-full sticky top-0 relative md:hidden "}
                     style={{height: "max-content"}}>
                    <div className={"flex flex-col w-full max-w-[450px] bg-white"}
                         style={{borderRadius: "10px", border: " 1px solid #EDF2F4"}}>
                        <div style={{borderBottom: "1px solid #EDF2F4"}}>
                            <div className={"flex mt-6 ml-6"}>
                                <p className={"b3 text-primary-darkblue"}>Price</p>
                            </div>
                            <div className={"flex ml-6 mt-1"}>
                                <p className={"c1 text-primary-darkblue"}>
                                    ${dynamicFields?.discount ? parseInt(dynamicFields.priceLow) * (100 - parseInt(dynamicFields.discount)) / 100
                                    : dynamicFields.priceLow}- $
                                    {dynamicFields?.discount ? parseInt(dynamicFields.priceHigh) * (100 - parseInt(dynamicFields.discount)) / 100
                                        : dynamicFields.priceHigh}
                                </p>
                            </div>
                            <div className={"flex ml-6"}>
                                <div className={"flex flex-row align-middle mt-1"}>
                                    <p className={"line-through b3 text-primary-grey"}>
                                        {dynamicFields?.discount ?
                                            `${dynamicFields.priceLow}$ - ${dynamicFields.priceHigh}$`
                                            : ""}
                                    </p>
                                    <div
                                        className={"w-[63px] bg-primary-blue rounded-md flex justify-center ml-[14px] " + ` ${dynamicFields?.discount ? '' : 'hidden'}`}>
                                        <p className={"text-primary-white b3 "}>{dynamicFields?.discount}% off</p>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-row items-center mx-6 my-6 justify-between"}>
                                <a className={"flex bttn1 w-[212px] h-14 items-center border-primary-blue rounded-full border-primary-blue border-2 text-primary-blue"}
                                   target={dynamicFields?.priceLButton?.target}
                                   href={dynamicFields?.priceLButton?.href}>
                                    <p className={"mx-auto md:text-[14px]"}>{dynamicFields?.priceLButton?.text}</p></a>
                                <a className={"flex bttn1 w-[132px] h-14 items-center bg-primary-blue rounded-full cursor-pointer"}
                                   target={dynamicFields?.priceRButton?.target}
                                   href={dynamicFields?.priceRButton?.href}>
                                    <p className={"mx-auto text-primary-white md:text-[14px]"}>{dynamicFields?.priceRButton?.text}</p>
                                </a>
                            </div>
                        </div>
                        <div className={"flex flex-row py-6 justify-between px-6"}
                             style={{border: "1px solid #EDF2F4"}}>
                            <div className={"flex flex-col"}>
                                <p className={"b2 lg:font-normal"}>{startDate ? "Start" : ""}</p>
                                <p className={"bttn1"}>{startDate ? startDate.toLocaleDateString(undefined, {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                }) : ""}</p>
                            </div>
                            <span className={"w-[2px] bg-primary-blue"}></span>
                            <div className={"flex flex-col pr-16"}>
                                <p className={"b2 lg:font-normal"}>{endDate ? "End" : ""}</p>
                                <p className={"bttn1"}>{endDate ? endDate.toLocaleDateString(undefined, {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                }) : ""}</p>
                            </div>
                        </div>
                        <div className={"flex"} style={{border: "1px solid #EDF2F4"}}>
                            <div className={"flex-col items-center justify-center px-7 py-7"}>
                                <p className={"b3"}>
                                    {dynamicFields?.includeTitle}
                                </p>
                                {include.map((item) =>
                                    <div className={"flex items-center flex-row mt-4"}>
                                        <div className={"w-[24px] flex-shrink-0 h-[24px]"}>
                                            <img width={24} height={24} src={item.fields.image.url}/>
                                        </div>
                                        <p className={"b2  ml-[19px]"}>
                                            {item.fields.text}
                                        </p>
                                    </div>
                                ).reverse()}
                            </div>
                        </div>

                        <div
                            className={"flex flex-col pb-6 max-h-[370px]" + ` ${!isOpenMenu ? "" : "overflow-y-scroll overflow-x-hidden"}` + `${instructors.length ? "" : " hidden"}`}
                            style={{borderTop: "1px solid #EDF2F4"}}>

                            <div className={"flex flex-row px-6 pt-6 justify-between "}>
                                <p className={"b3 text-primary-darkblue"}>{dynamicFields?.instructorsTitle}</p>
                                <a onClick={onButtonClick}
                                   className={`underline b3 text-primary-darkblue  ${(instructors.length < 4) ? "hidden" : ""}`}>
                                    {!isOpenMenu ? `${dynamicFields?.seeAllText ? dynamicFields.seeAllText : "See all"}` : "Hide"}</a>
                            </div>

                            {/*Static instructors*/}

                            <div className={`${isOpenMenu ? 'hidden' : 'all_instuctors'}`}>
                                {instructors.slice(0).reverse().map((item, i) => {
                                    if (i < 3)
                                        return (
                                            <div className={"flex flex-row pt-6 pl-6"}>
                                                <img
                                                    className={"rounded-full flex-shrink-0 h-[56px] w-[56px] object-cover"}
                                                    src={item.fields.image.url} alt="roundedFACE"/>
                                                <div className={"flex flex-col pl-6"}>
                                                    <p className={"c2 text-primary-darkblue"}>{item.fields.name}</p>
                                                    <p className={"b3 text-primary-darkblue"}>{item.fields.specialty}</p>
                                                </div>
                                            </div>
                                        )
                                })}
                            </div>

                            {/*Dinamic instructors*/}

                            <div className={`${isOpenMenu ? 'all_instuctors' : 'hidden'}`}>

                                {instructors.map((item) =>
                                    <div className={"flex flex-row pt-6 pl-6"}>
                                        <img className={"rounded-full flex-shrink-0 h-[56px] w-[56px] object-cover"}
                                             src={item.fields.image.url} alt="roundedFACE"/>
                                        <div className={"flex flex-col pl-6"}>
                                            <p className={"c2 text-primary-darkblue"}>{item.fields.name}</p>
                                            <p className={"b3 text-primary-darkblue"}>{item.fields.specialty}</p>
                                        </div>
                                    </div>).reverse()}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"flex flex-col mt-16 "}>
                <h3>Related Course</h3>
                <div className={"flex md:flex-col mdplus:flex-row justify-between"}>
                    {related.map((data)=>
                    <CourseItem data={data.fields}/>
                    )}
                </div>
            </div>
        </div>
    );


}


CourseDetails.getCustomInitialProps = async ({agility, dynamicPageItem, languageCode}) => {
    // set up api
    const api = agility;
    let schedule = null
    let include = null
    let instructors = null
    let relatedCourse = []
    let courses = []
    try{
        let tmp = await api.getContentList({
            referenceName:dynamicPageItem.properties.referenceName,
            locale: languageCode,
            take:50
        })

            tmp.items.sort((a,b)=>{
            if (a.fields.startDate < b.fields.startDate)
                return -1
            if (a.fields.startDate > b.fields.startDate)
                return 1
            return 0
        }).map(i =>{
            if( dynamicPageItem.contentID != i.contentID && (i.fields.onDemand || new Date(i.fields.startDate)> Date.now() || new Date(i.fields.endDate)> Date.now()))
                courses.push(i)
            })

        courses.map(i =>{
            if (i?.fields?.specialty?.search(dynamicPageItem.fields.specialty) != -1){
                relatedCourse.push(i)
            }
        })
        if (relatedCourse.length < 2){
            courses.map(i =>{
                if (i?.fields?.type?.search(dynamicPageItem.fields.type) != -1 && relatedCourse.length<2){
                    relatedCourse.push(i)
                }
            })

        }
        if (relatedCourse.length < 2){
            courses.map(i =>{
                if (i?.fields?.place?.search(dynamicPageItem.fields.place) != -1 && relatedCourse.length<2){
                    relatedCourse.push(i)
                }
            })

        }

        if (courses.length >=2){
            console.log(relatedCourse.length)
            if(relatedCourse.length == 0) relatedCourse.push(courses[0])
            let i = 0
            while(relatedCourse.length < 0){
                if(relatedCourse[0] != courses[i]){
                    relatedCourse.push(courses[i])
                }
            else i++
            }
        }

    }catch (err) {
        for(let i = 0;i<100;i++)
        if (console) console.log(err)
        relatedCourse = null
    }


    try {
        if (dynamicPageItem?.fields?.schedule?.referencename) {
            let tmp = await api.getContentList(
                {
                    referenceName: dynamicPageItem?.fields?.schedule?.referencename,
                    locale: languageCode,
                    expandAllContentLinks: true
                })
            schedule = tmp ?? null
        }
    } catch (err) {
        if (console) console.log(err)
        schedule = null
    }
    try {
        if (dynamicPageItem?.fields?.include?.referencename) {
            let tmp = await api.getContentList(
                {
                    referenceName: dynamicPageItem?.fields?.include?.referencename,
                    locale: languageCode,
                    expandAllContentLinks: true
                })
            include = tmp ?? null
        }
    } catch (err) {
        if (console) console.log(err)
        include = null
    }
    try {
        if (dynamicPageItem?.fields?.instructors?.referencename) {
            let tmp = await api.getContentList(
                {
                    referenceName: dynamicPageItem?.fields?.instructors?.referencename,
                    locale: languageCode,
                    expandAllContentLinks: true
                })
            instructors = tmp ?? null
        }
    } catch (err) {
        if (console) console.log(err)
        instructors = null
    }
    return ({
        schedule,
        include,
        instructors,
        relatedCourse,
        courses
    })


}


export default CourseDetails;