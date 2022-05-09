import React, {useState} from "react";
import {BiLeftArrowAlt} from "react-icons/bi";
import {HiLocationMarker} from "react-icons/hi";
import {GiOpenBook} from "react-icons/gi"
import {renderHTML} from "@agility/nextjs";


const Schedule = ({day})=>{
    console.log(day)
    return(
        <div className={"flex flex-col mt-[82px]"}>
            <div className={"flex flex-col"}>
                <p className={"c1"}>{day?.fields?.date}</p>
                <div className={"b1 mt-4 text-primary-darkblue"}
                    dangerouslySetInnerHTML={renderHTML(day?.fields?.description)}/>
            </div>
            <div className={"flex flex-col"}>

                {day?.fields?.timetable?.map((item)=>

                    <div className={"flex justify-start mt-10 "}>
                        <div className={"flex"}>
                            <div className={"mr-[16px] min-w-[64px] flex items-center"}>
                                <p className={"c2"}>{item.fields?.time}</p>
                            </div>

                            <span className={"w-[2px] bg-primary-blue"}></span>

                            <div className={"flex flex-col ml-4"}>
                                <p className={"b2 text-primary-grey"}>{item.fields?.type}</p>
                                <p className={"b1 text-primary-darkblue"}>{item.fields?.description}</p>
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
    console.log("date")
    console.log(customData)


    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const onButtonClick = () => setIsOpenMenu(!isOpenMenu)


    const [schedule,setSchedule] = useState((customData?.schedule?.items || []));
    const [include,setInclude] = useState((customData?.include?.items || []));
    const [instructors,setInstructors] = useState((customData?.instructors?.items || []));
    console.log(`instructors`);
    console.log(instructors);


    return (
        <div className={"max-w-screen-xl mx-auto"}>


            <div className={"flex text-primary-darkblue flex-row items-center"}>
                <div className={" flex text-[18px] text-color"}>
                    < BiLeftArrowAlt/>
                </div>
                <div className={"flex pl-[14px]"}>
                    <a href={"/find-a-course"}><p className={"bttn2 cursor-pointer"}>Back to the courses</p></a>
                </div>
            </div>


            <div className={"flex pt-[24px]"}>

                {/*  */}

                <div className={"flex flex-col max-w-[864px]"}>

                    <div className={"flex flex-col"}>
                        <h3>{dynamicFields.name}</h3>
                    </div>


                    {/*    */}

                    <div className={"flex pt-[26px] text-primary-darkblue"}>
                        <div className={"text-[20px] "}>
                            <HiLocationMarker/>
                        </div>
                        <div className={"flex ml-[10px]"}>
                            <a className={"b2 underline"} href="#">{dynamicFields.fullAddress}</a>
                        </div>
                    </div>


                    {/*    */}

                    <div className={"flex mt-[24px] relative"}>
                        <a className=" b3 absolute  left-[16px] top-[16px] bg-primary-blue text-primary-white rounded-full
                                w-[102px] px-[10px] py-[4px] h-[32px] "
                           href={"#"}>On-demand</a>
                        <img className={"rounded-xl"} src={dynamicFields.image.url} alt="device"/>
                    </div>


                    {/*    */}

                    <div className={"flex mt-[24px] flex-col b1 text-primary-darkblue"}
                         dangerouslySetInnerHTML={renderHTML(dynamicFields.courseDetails)}/>

                    {/*    */}

                    <div className={"flex mt-6"}>
                        <div style={{width:"124px", height:"40px", borderRadius:"57px",border:"2px solid #C9D5FD"}}
                             className={"flex items-center justify-center mr-2"}>
                            <a  className={"b3 text-primary-darkblue"} href="">{dynamicFields.place}</a>
                        </div>
                        <div style={{width:"124px", height:"40px", borderRadius:"57px",border:"2px solid #C9D5FD"}}
                             className={"flex items-center justify-center mr-2"}>
                            <a  className={"b3 text-primary-darkblue"} href="">{dynamicFields.specialty}</a>
                        </div>
                        <div style={{width:"124px", height:"40px", borderRadius:"57px",border:"2px solid #C9D5FD"}}
                             className={"flex items-center justify-center mr-2"}>
                            <a  className={"b3 text-primary-darkblue"} href="">{dynamicFields.type}</a>
                        </div>
                    </div>

                    {schedule.map((item)=><Schedule day={item}/>).reverse()}

                {/*    */}
                {/*    */}

                </div>

                {/*Fixed Section */}

                <div className={"flex flex-row ml-8 w-full sticky top-0 relative "} style={{height:"max-content"}}>
                    <div className={"flex flex-col w-full max-w-[450px] bg-white"} style={{borderRadius:"10px", border:" 1px solid #EDF2F4"}}>
                        <div style={{borderBottom:"1px solid #EDF2F4"}}>
                            <div className={"flex mt-6 ml-6"}>
                                <p className={"b3 text-primary-darkblue"}>Price</p>
                            </div>
                            <div className={"flex ml-6 mt-1"}>
                                <p className={"c1 text-primary-darkblue"}>
                                    {dynamicFields?.discount ? parseInt(dynamicFields.priceLow)*(100-parseInt(dynamicFields.discount))/100
                                        : dynamicFields.priceLow}$-
                                    {dynamicFields?.discount ? parseInt(dynamicFields.priceHigh)*(100-parseInt(dynamicFields.discount))/100
                                        : dynamicFields.priceHigh}$
                                </p>
                            </div>
                            <div className={"flex ml-6"}>
                                <div className={"flex flex-row align-middle mt-1"}>
                                    <p className={"line-through b3 text-primary-grey"}>
                                        {dynamicFields?.discount ?
                                            `${dynamicFields.priceLow}$ - ${dynamicFields.priceHigh}$`
                                            : ""}
                                    </p>
                                    <div className={"w-[63px] bg-primary-blue rounded-md flex justify-center ml-[14px] " + ` ${dynamicFields?.discount ? '' : 'hidden'}`}>
                                        <p className={"text-primary-white b3 "}>{dynamicFields?.discount}% off</p>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-row items-center mx-6 my-6 justify-between"}>
                                <a className={"flex bttn1 w-[212px] h-14 items-center border-primary-blue rounded-full border-primary-blue border-2 text-primary-blue"} href={"#"}>
                                    <p className={"mx-auto md:text-[14px]"}>Register for the course</p></a>
                                <a className={"flex bttn1 w-[132px] h-14 items-center bg-primary-blue rounded-full"} href={"#"}>
                                    <p className={"mx-auto text-primary-white md:text-[14px]"}>Website</p></a>
                            </div>
                        </div>
                        <div className={"flex flex-row py-6 justify-between px-6"} style={{border: "1px solid #EDF2F4"}}>
                            <div className={"flex flex-col"}>
                                <p className={"b2 lg:font-normal"}>{startDate? "Start" : ""}</p>
                                <p className={"bttn1"}>{startDate ? startDate.toLocaleDateString(undefined,{month:"long", day:"numeric", year:"numeric"}) : ""}</p>
                            </div>
                            <span className={"w-[2px] bg-primary-blue"}></span>
                            <div className={"flex flex-col pr-16"}>
                                <p className={"b2 lg:font-normal"}>{endDate? "End" : ""}</p>
                                <p className={"bttn1"}>{endDate ? endDate.toLocaleDateString(undefined,{month:"long", day:"numeric", year:"numeric"}) : ""}</p>
                            </div>
                        </div>
                        <div className={"flex"} style={{border: "1px solid #EDF2F4"}}>
                            <div className={"flex-col items-center justify-center px-7 py-7"}>
                                <p className={"b3"}>
                                    This course includes
                                </p>
                                {include.map((item)=>
                                    <div className={"flex items-center flex-row mt-4"}>
                                        <div>
                                            <img width={22} height={19} src={item.fields.image.url}/>
                                        </div>
                                        <p className={"b2  ml-[19px]"}>
                                            {item.fields.text}
                                        </p>
                                    </div>
                                ).reverse()}
                            </div>
                        </div>

                        <div className={"flex flex-col pb-6 max-h-[310px]"+ ` ${!isOpenMenu ? "": "overflow-y-scroll overflow-x-hidden"}`} style={{borderTop: "1px solid #EDF2F4"}}>

                            <div className={"flex flex-row px-6 pt-6 justify-between "}>
                                <p className={"b3 text-primary-darkblue"}>Instructor</p>
                                <a  onClick={onButtonClick}
                                    className={`underline b3 text-primary-darkblue  ${(instructors.length < 4) ? "hidden" : ""}`}>
                                    {!isOpenMenu ? "See all instructors" : "Hide"}</a>
                            </div>

                            {/*Static instructors*/}

                                <div className={`${isOpenMenu ? 'hidden': 'all_instuctors'}`}>
                                    {instructors.map((item,i)=> {
                                        if(i < 3)
                                            return(
                                                <div className={"flex flex-row pt-6 pl-6"}>
                                                    <img className={"rounded-full"} src={item.fields.image.url} alt="roundedFACE"/>
                                                    <div className={"flex flex-col pl-6"}>
                                                        <p className={"c2 text-primary-darkblue"}>{item.fields.name}</p>
                                                        <p className={"b3 text-primary-darkblue"}>{item.fields.specialty}</p>
                                                    </div>
                                                </div>
                                            )
                                    }).reverse()}


                                </div>

                            {/*Dinamic instructors*/}

                            <div className={`${isOpenMenu ? 'all_instuctors': 'hidden'}`}>

                                {instructors.map((item)=>
                                    <div className={"flex flex-row pt-6 pl-6"}>
                                        <img className={"rounded-full"} src={item.fields.image.url} alt="roundedFACE"/>
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

            <div className={`flex mt-[108px] max-w-[1312px] ${instructors.length > 3 ? "overflow-x-scroll":"" } `}>

                <div className={"flex flex-row justify-between"}>


                    {instructors.map((item)=>
                        <div className={"flex flex-row items-center w-[416px] ml-[30px]  mr-[30px]"}>
                            <img className={"rounded-full w-[104px]"} src={item.fields.image.url} alt="roundedFACE"/>
                            <div className={"flex flex-col pl-6"}>
                                <p className={"c1 text-primary-darkblue"}>{item.fields.name}</p>
                                <p className={"b2 text-primary-darkblue"}>{item.fields.specialty}</p>
                            </div>
                        </div>).reverse()}



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
    try{
        if (dynamicPageItem?.fields?.schedule?.referencename){
            schedule = await api.getContentList(
                {
                    referenceName: dynamicPageItem?.fields.schedule?.referencename,
                    locale:languageCode,
                    expandAllContentLinks: true
                })
        }

        if (dynamicPageItem?.fields?.include?.referencename){
            include = await api.getContentList(
                {
                    referenceName: dynamicPageItem?.fields.include?.referencename,
                    locale:languageCode,
                    expandAllContentLinks: true
                })
        }

        if (dynamicPageItem?.fields?.instructors?.referencename){
            instructors = await api.getContentList(
                {
                    referenceName: dynamicPageItem?.fields.instructors?.referencename,
                    locale:languageCode,
                    expandAllContentLinks: true
                })
        }
        return({
            schedule,
            include,
            instructors,
        })
    }catch (err) {
        if (console) console.log(err)
    }


    // try {
    //     // get sitemap...
    //     let sitemap = await api.getSitemapFlat({
    //         channelName: channelName,
    //         languageCode,
    //     });
    //
    //     // get posts...
    //     let rawPosts = await api.getContentList({
    //         referenceName: "testofferings",
    //         languageCode,
    //         contentLinkDepth: 3,
    //         depth: 3,
    //         take: 50,
    //         expandAllContentLinks: true ,
    //     });
    //
    //     // resolve dynamic urls
    //     const posts = rawPosts.items.map((post) => {
    //         //category
    //         const category = post.fields.category?.fields.title || "Uncategorized"
    //
    //         // date
    //         const date = new Date(post.fields.date).toLocaleDateString();
    //
    //         // url
    //         const url = "#";
    //
    //         // post image src
    //         let imageSrc = post.fields.image.url;
    //
    //         // post image alt
    //         let imageAlt = post.fields.image?.label || null;
    //
    //         return {
    //             contentID: post.contentID,
    //             title: post.fields.title,
    //             date,
    //             url,
    //             category,
    //             imageSrc,
    //             imageAlt,
    //         };
    //     });
    //
    //     return {
    //         rawPosts
    //     };
    // } catch (error) {
    //     if (console) console.error(error);
    // }

}


export default CourseDetails;