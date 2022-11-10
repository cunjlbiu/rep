import React, {useState, useRef, useEffect} from 'react'
import {useRouter} from 'next/router'
import Switch from 'react-switch'
import Select from "react-select";
import {renderHTML} from "@agility/nextjs";
import VGOfferings from "./VGOfferings";

const DATE_NOW = Date.now();
let aornText = '';
let aornTitle = '';
export const CourseItem = ({data, aorn, logo})=> {
    const startDate = new Date(data.startDate);
    const mm = ('0'+ (startDate.getMonth()+1)).slice(-2);
    const dd = ('0'+ startDate.getDate()).slice(-2);
    const endDate = new Date(data.endDate);
    if(!data.place) data.place = ''

    return(
        <div className={"py-10 max-w-[570px] md:mx-5 "}>
            <div className={"mdplus:min-w-[570px] mdplus:h-[320px] max-w-[570px] md:w-auto rounded-xl text-white text-center relative"}>
                <div className={`absolute b3 rounded-full px-[12px] py-1 top-4 left-4 ${data.onDemand ? "bg-primary-blue" : "bg-primary-white text-black" } ${data.vg ? " hidden" : ""}`}>{data.onDemand ? "On-Demand" :"Live"}</div>
                <div className={`absolute b3 rounded-full px-[12px] py-1 bottom-4 right-6 ${aorn ? "bg-primary-white" : "hidden" }`}>
                    {aorn ? <img src={logo.url}/> : "" }
                </div>
                {!data.image ? "image should be here" : <a target={aorn ? '_blank':'_self'} href={aorn ? "https://cine-med.com/aornonline/": data.imageUrl ? data.imageUrl?.href : ""}>
                    <img className={"rounded-xl object-fill"} src={data.image.url}/></a>}
            </div>
            <div className={"flex justify-between mdplus:w-[570px] my-4"}>
                {/*<div className={"b3"}>{startDate.valueOf() ? `(${startDate.getFullYear()})` : ''}</div>*/}
                <div className={"b3"}>{startDate.valueOf() ? `` : ''}</div>
                <div className={"flex justify-between"}>
                    <div className={"b3"}>{(data.place.length > 15)? "International" : data.place}</div>
                    <div className={`text-secondary-blue px-1 ${(!!startDate.valueOf() && !!data.place)? "" : "hidden"}`}>|</div>
                    <div className={"b3 "+`${data.vg ? "hidden":""}`}>{startDate.valueOf() ? `${mm}.${dd}.${startDate.getFullYear()}`: '' } </div>
                </div>
            </div>
            <div className={"c1"}>{data.name}</div>
        </div>
    )
}
const CourseBlock = ({blockData, filters, cl, deleteAll, aorn, logo})=>{
    return(
        <div className={"md:mx-5"}>
            <div className={"md:mx-auto md:max-w-[640px]" + `${blockData?.length ? "":" hidden"}`}>
                <h3 className={"mdplus:mx-auto"}>
                    {aorn ? aornTitle:"Offerings"}
                </h3>
                {aorn ?
                    <div className={"b1 pt-3"} dangerouslySetInnerHTML={renderHTML(aornText)}/>
                            :
                    "View our current curriculum."}
            </div>
            <div className={"flex justify-between " + `${aorn ? "" : "hidden"}`}>
                <div className={"flex flex-wrap"}>
                    {filters.map((e,i)=>{
                        if (!!e)
                            return (
                                <div className={"border-secondary-blue rounded-full mr-[8px] border-[1px] py-1 px-2 b3 my-1 flex-shrink-0 max-h-[36px]"}>{e}
                                    <div className={"text-[10px] font-extrabold px-1 inline-block cursor-pointer"} onClick={()=>{cl(i)}}>✕</div>
                                </div>
                            )

                    })}
                </div>

                <div className={`bttn2 cursor-pointer px-1 md:pt-[7px] flex-shrink-0`} style={{display:`${deleteAll ? "inline" : "none" }`}} onClick={()=>{cl("all")}}>Clear all filters</div>

            </div>
            <div className={"flex flex-row flex-wrap justify-between py-1 mb-5"}>
                {blockData?.map((e,i)=>{
                    return(
                        <CourseItem data={e.fields} aorn={aorn} logo={logo}/>
                    )
                })}
            </div>
        </div>
    )
}
const Filtering = (filters, courses,ondemand, loc,type, spec,live)=>{
    console.log("filters: ", filters)
    console.log("ondemand: ", ondemand)
    console.log("loc: ", loc)
    console.log("type: ", type)
    console.log("spec: ", spec)
    let filteredCourse = []
            for (let k of courses) {
            if (!k.fields?.place) k.fields.place = ""
            if (!k.fields?.filter) k.fields.filter= ""
            if (!k.fields?.type) k.fields.type = ""
            if (!k.fields?.specialty) k.fields.specialty = ""
            if ((
                    k.fields?.filter?.toLowerCase().includes(filters.toLowerCase()) || k.fields.name.toLowerCase().includes(filters.toLowerCase())
                    || k.fields.place.toLowerCase().includes(filters.toLowerCase()) || k.fields.type.toLowerCase().includes(filters.toLowerCase())
                    || k.fields.specialty.toLowerCase().includes(filters.toLowerCase())
                )
                && (k.fields.place.toLowerCase().includes(loc.toLowerCase()) || loc == "")
                && (k.fields.type.toLowerCase().includes(type.toLowerCase()) || type == "" )
                && (k.fields.specialty.toLowerCase().includes(spec.toLowerCase()) || spec == "")
                && ( !ondemand || !!k.fields.onDemand )
                && (k.fields.onDemand || new Date(k.fields.endDate)>DATE_NOW || new Date(k.fields.startDate)>DATE_NOW || k.fields.vg)
            )
                if(!k.fields.onDemand == !!live || !live || k.fields.vg)
                filteredCourse.push(k)
        }
    return filteredCourse;
}


const locations =[
    {value:"Alabama", label:"Alabama"},
    {value:"Alaska", label:"Alaska"},
    {value:"Arizona", label:"Arizona"},
    {value:"Arkansas", label:"Arkansas"},
    {value:"California", label:"California"},
    {value:"Colorado", label:"Colorado"},
    {value:"Connecticut", label:"Connecticut"},
    {value:"Delaware", label:"Delaware"},
    {value:"Florida", label:"Florida"},
    {value:"Georgia", label:"Georgia"},
    {value:"Hawaii", label:"Hawaii"},
    {value:"Idaho", label:"Idaho"},
    {value:"Illinois", label:"Illinois"},
    {value:"Indiana", label:"Indiana"},
    {value:"Iowa", label:"Iowa"},
    {value:"Kansas", label:"Kansas"},
    {value:"Kentucky", label:"Kentucky"},
    {value:"Louisiana", label:"Louisiana"},
    {value:"Maine", label:"Maine"},
    {value:"Maryland", label:"Maryland"},
    {value:"Massachusetts", label:"Massachusetts"},
    {value:"Michigan", label:"Michigan"},
    {value:"Minnesota", label:"Minnesota"},
    {value:"Mississippi", label:"Mississippi"},
    {value:"Missouri", label:"Missouri"},
    {value:"Montana", label:"Montana"},
    {value:"Nebraska", label:"Nebraska"},
    {value:"Nevada", label:"Nevada"},
    {value:"New Hampshire", label:"New Hampshire"},
    {value:"New Jersey", label:"New Jersey"},
    {value:"New Mexico", label:"New Mexico"},
    {value:"New York", label:"New York"},
    {value:"North Carolina", label:"North Carolina"},
    {value:"North Dakota", label:"North Dakota"},
    {value:"Ohio", label:"Ohio"},
    {value:"Oklahoma", label:"Oklahoma"},
    {value:"Oregon", label:"Oregon"},
    {value:"Pennsylvania", label:"Pennsylvania"},
    {value:"Rhode Island", label:"Rhode Island"},
    {value:"South Carolina", label:"South Carolina"},
    {value:"South Dakota", label:"South Dakota"},
    {value:"Tennessee", label:"Tennessee"},
    {value:"Texas", label:"Texas"},
    {value:"Utah", label:"Utah"},
    {value:"Vermont", label:"Vermont"},
    {value:"Virginia", label:"Virginia"},
    {value:"Washington", label:"Washington"},
    {value:"West Virginia", label:"West Virginia"},
    {value:"Wisconsin", label:"Wisconsin"},
    {value:"Wyoming", label:"Wyoming"},
    {value:"International", label:"International"},
]
const specialty =[
    {value:"Anesthesiology / Pain Management", label:"Anesthesiology / Pain Management"},
    {value:"Bariatrics", label:"Bariatrics"},
    {value:"Behavioral / Mental Health", label:"Behavioral / Mental Health"},
    {value:"Biomedical", label:"Biomedical"},
    {value:"Cardiology", label:"Cardiology"},
    {value:"Critical Care Medicine", label:"Critical Care Medicine"},
    {value:"Dermatology", label:"Dermatology"},
    {value:"Diagnostic Imaging", label:"Diagnostic Imaging"},
    {value:"Emergency Medicine", label:"Emergency Medicine"},
    {value:"Endocrinology", label:"Endocrinology"},
    {value:"Gastroenterology / Hepatology / Colorectal", label:"Gastroenterology / Hepatology / Colorectal"},
    {value:"General Surgery", label:"General Surgery"},
    {value:"Healthcare Administration", label:"Healthcare Administration"},
    {value:"Home Health Care / Post-Acute Care", label:"Home Health Care / Post-Acute Care"},
    {value:"Infectious Disease / Immunology", label:"Infectious Disease / Immunology"},
    {value:"Internal / Family / Preventive Medicine", label:"Internal / Family / Preventive Medicine"},
    {value:"Nephrology / Urology", label:"Nephrology / Urology"},
    {value:"Neuroscience", label:"Neuroscience"},
    {value:"Obstetrics / Gynecology", label:"Obstetrics / Gynecology"},
    {value:"Oncology - Medical", label:"Oncology - Medical"},
    {value:"Oncology - Surgical", label:"Oncology - Surgical"},
    {value:"Ophthalmology", label:"Ophthalmology"},
    {value:"Orthopedics", label:"Orthopedics"},
    {value:"Otolaryngology", label:"Otolaryngology"},
    {value:"Pathology", label:"Pathology"},
    {value:"Pediatrics", label:"Pediatrics"},
    {value:"Pharmacology", label:"Pharmacology"},
    {value:"Physical Medicine and Rehabilitation", label:"Physical Medicine and Rehabilitation"},
    {value:"Plastic Surgery", label:"Plastic Surgery"},
    {value:"Podiatry", label:"Podiatry"},
    {value:"Thoracic Surgery / Pulmonology", label:"Thoracic Surgery / Pulmonology"},
    {value:"Transplantation", label:"Transplantation"},
    {value:"Vascular Medicine", label:"Vascular Medicine"},
    {value:"Wound Healing", label:"Wound Healing"},
]
const courseType =[
    {value:"Conference", label:"Conference"},
    {value:"Master Class", label:"Master Class"},
    {value:"Symposia", label:"Symposia"},
    {value:"Grand Rounds", label:"Grand Rounds"},
    {value:"Virtual Event", label:"Virtual Event"},
    {value:"Webinar", label:"Webinar"},
    {value:"eLearning", label:"eLearning"},
    {value:"Clinical Video", label:"Clinical Video"},
    {value:"Product Short", label:"Product Short"},
    {value:"Podcast", label:"Podcast"},
]


const FindCourseOfferings = ({module, customData})=>{
    const {fields} = module;
    const test = [...fields.courses, ...customData]
    aornText = fields?.aornText
    aornTitle = fields?.aornTitle
    const customStyle={
        control: (base, state) => ({
            ...base,
            width:"auto",
            minWidth:"256px",
            borderWidth:"0px 0px 2px 0px",
            border: state.isFocused ? 0 : 0,
            // This line disable the blue border
            boxShadow: state.isFocused ? 0 : 0,
            '&:hover': {
                border: state.isFocused ? 0 : 0
            }
        }),
            indicatorSeparator:()=>({
            visible: 'none',
        })
    }
    const [checked, setChecked] = useState(false);
    const [courses,setCourses] = useState(test.sort((a,b)=>{
        if (a.fields.startDate < b.fields.startDate)
            return 1
        if (a.fields.startDate > b.fields.startDate)
            return -1
        return 0
    }));
    const [aornCourses,setAornCourses] = useState(fields.aorn?.sort((a,b)=>{
        if (a.fields.startDate < b.fields.startDate)
            return 1
        if (a.fields.startDate > b.fields.startDate)
            return -1
        return 0
    }));
    const [listedCourses,setListedCourses] = useState(courses?.slice(0,4))
    const [listedAORNCourses,setListedAORNCourses] = useState(aornCourses?.slice(0,4))
    const [amount, setAmount] = useState(4)
    const [locFilter, setLocFilter] = useState(''); //select location
    const [typeFilter, setTypeFilter] = useState('');  // Type
    const [specialtyFilter, setSpecialtyFilter]= useState('');  //select Specialty
    const [filter, setFilter] = useState('');  //select
    const [filters, setFilters] = useState([]);
    const selectLocRef = useRef();
    const router = useRouter()
    const initialFilter = router.query.filter || ""
    const [liveOnly,setLiveOnly] = useState(router.query.live || "")
    const selectTypeRef = useRef();
    const selectSpecialtyRef = useRef();



    const fillStorage = () => {
        window.sessionStorage.setItem('locFilter', locFilter)
        window.sessionStorage.setItem('typeFilter', typeFilter)
        window.sessionStorage.setItem('specialtyFilter', specialtyFilter)
        window.sessionStorage.setItem('filter', filter)

    }

    const getStorage = () => {
        setLocFilter(window.sessionStorage.getItem('locFilter') ?? "")
        setTypeFilter(window.sessionStorage.getItem('typeFilter') ?? "")
        setSpecialtyFilter(window.sessionStorage.getItem('specialtyFilter') ?? "")
        setFilter(window.sessionStorage.getItem('filter') ?? "")
    }

    const inputEnterPress = (event) =>{
        if(event.key === "Enter")
            location.href = "#fil"
    }

    useEffect(() => {getStorage()},[])




    useEffect(()=>{ApplyFilters(1,liveOnly)
        fillStorage()},[locFilter,typeFilter,specialtyFilter,filter])
    useEffect(()=>setFilter(initialFilter),[])
    useEffect(()=>{setListedCourses(courses.slice(0,amount));
                         setListedAORNCourses(aornCourses.slice(0,amount))},
                    [amount,courses,aornCourses])


    // const course = {}
    // fields.courses.map((e)=>{course[e.fields.filter] ? course[e.fields.filter].push(e) : course[e.fields.filter] = [e] })
    // const courseArr = Object.entries(course)


    function DeleteFilter(i) {
        let newFilters = filters.map((_,e)=>{
            if (e != i)return _
            else {
                if (locFilter == _) {
                    selectLocRef.current.clearValue()
                    setLocFilter('')
                }
                if (typeFilter == _) {
                    selectTypeRef.current.clearValue()
                    setTypeFilter('')
                }
                if (specialtyFilter == _) {
                    selectSpecialtyRef.current.clearValue();
                    setSpecialtyFilter('')
                }
                if (filter == _) setFilter('')
            }
        })
        if (i === "all"){
            selectLocRef.current.clearValue()
            setLocFilter('')
            selectTypeRef.current.clearValue()
            setTypeFilter('')
            selectSpecialtyRef.current.clearValue();
            setSpecialtyFilter('')
            setFilter('')
            newFilters =[]
        }

        setFilters(newFilters)
        ApplyFilters()
    }

    function IncreaseAmount(i){
        setAmount(amount + i);
    }

    const ApplyFilters = (sw) => {
        if (typeof(sw)=="boolean") {
            setLiveOnly("")
            setCourses(Filtering(filter, test, sw, locFilter, typeFilter, specialtyFilter))
            setAornCourses(Filtering(filter, fields.aorn, sw, locFilter, typeFilter, specialtyFilter))
        }
        else{
            setCourses(Filtering(filter, test, checked, locFilter, typeFilter, specialtyFilter, liveOnly))
            setAornCourses(Filtering(filter, fields.aorn, checked, locFilter, typeFilter, specialtyFilter, liveOnly))
        }
        setFilters([filter,locFilter,typeFilter,specialtyFilter])
        setAmount(4);
        //setFilter("")
    }
    return(
        <div className={"bg-soft-purple"}>
            <div className={"max-w-screen-xl mx-auto md:mt-[45px] mdplus:mt-0 mdplus:py-16"}>
                <div className={"bg-soft-purple flex flex-col justify-center"}>
                    <h1 className={"py-2 text-center md:hidden"}>
                        Choose from a vast library<br/>
                        of curated content.
                    </h1>
                    <h2 className={"py-2 text-center lg:hidden"}>
                        Choose from a vast library<br/>
                        of curated content.
                    </h2>

                    <div className={"b1 text-center py-4 mx-auto mdplus:max-w-[550px] lg:max-w-[700px] md:max-w-[90%]  "}>With over thousands of courses to choose from, our curriculum will advance your skills and help you and your team reduce medical errors.</div>

                    <div className="relative lg:w-[860px] mdplus:w-[600px] mdplus:mx-auto h-16 md:mx-5 mx-auto bg-primary-white rounded-full content-center object-center ">
                            <input type="text"
                                   className=" mdplus:block absolute md:hidden top-[21px] left-14 mdplus:w-2/5 lg:w-3/5 border-none outline-none"
                                   placeholder="Search by specialty, learning objective, or location."
                                   value={filter}
                                   onChange={(e)=>setFilter(e.target.value)}
                                   onKeyDown={inputEnterPress}
                            />
                        <input type="text"
                               className=" mdplus:hidden absolute top-[21px] left-12 w-[50%] w-auto border-none outline-none"
                               placeholder="Search"
                               value={filter}
                               onChange={(e)=>setFilter(e.target.value)}
                               onKeyDown={inputEnterPress}
                        />
                            <div className={"absolute flex top-1/3 right-[28px] mdplus:right-[28%] b3"}>
                                <Switch
                                    className={"mr-1"}
                                    checked={checked}
                                    onChange={(sw)=>{
                                        setChecked(sw)
                                        ApplyFilters(sw)}}
                                    height={24}
                                    width={40}
                                    offColor={"#D6D7D9"}
                                    onColor={"#1C58F8"}
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                />
                                <p>On-Demand</p>
                            </div>
                        <a href={"#fil"} className={"md:hidden mdplus:block"}><button className="custom-search-botton bttn2 w-[130px] active:bg-primary-blue hover:bg-primary-darkblue" onClick={ApplyFilters}>Find a course</button></a>
                    </div>
                    <a href={"#fil"} className={"bttn2 flex mdplus:hidden h-[48px] bg-primary-blue text-primary-white items-center justify-center active:bg-primary-blue active:bg-primary-darkblue mx-5 mt-2 rounded-full"}>
                        Find a course
                    </a>


                    <div className={"lg:w-[860px] mdplus:mx-auto mdplus:w-[600px] md:py-6 md:px-4 md:mx-5 mdplus:px-12 flex md:space-y-6 mx-4 mt-2 md:flex-col md:rounded-2xl lg:justify-evenly bg-primary-white lg:rounded-full lg:mx-auto lg:py-6 lg:mt-6"}>
                        <div className={"lg:max-w-[256px] md:mx-auto w-full mdplus:w-[500px]"}>
                            <p className={"b3 pl-[10px] text-primary-darkblue"}>Specialty</p>
                        <Select styles ={ customStyle}
                                ref={selectSpecialtyRef}
                                placeholder="Specialty"
                                options={specialty}
                                isClearable={true}
                                onChange={(option)=>{
                                    if(option == null) setSpecialtyFilter('')
                                    else
                                        setSpecialtyFilter(option.value)
                                }}
                                onBlur={()=>ApplyFilters()}

                        />
                        </div>

                        <div className={"lg:max-w-[256px] md:mx-auto w-full mdplus:w-[500px]"}>
                            <p className={"b3 pl-[10px] text-primary-darkblue"}>Course Type</p>
                        <Select styles ={ customStyle}
                                ref={selectTypeRef}
                                placeholder="Course Type"
                                options={courseType}
                                isClearable={true}
                                onChange={(option)=>{
                                    if(option == null) setTypeFilter('')
                                    else
                                        setTypeFilter(option.value)
                                }}
                                onBlur={()=>ApplyFilters()}

                        />
                        </div>
                        <div className={"lg:max-w-[256px] md:mx-auto w-full mdplus:w-[500px]"}>
                            <p className={"b3 pl-[10px] text-primary-darkblue"}>Location</p>
                        <Select styles ={ customStyle}
                                ref={selectLocRef}
                                placeholder="Location"
                                onChange={(option)=>{
                                    if(option == null) setLocFilter('')
                                    else
                                    setLocFilter(option.value)
                                    }}
                                onBlur={()=>ApplyFilters()}
                                options={locations}
                                isClearable={true}
                        />
                        </div>

                    </div>
                </div>
            </div>

             <div className={"bg-primary-white py-14 my-8 " + `${listedCourses?.length && listedAORNCourses?.length ? "" : " "}`} id={"fil"}>
                <div className={"mx-auto max-w-screen-xl " + `${listedCourses?.length || listedAORNCourses?.length ? "" : ""} `}>
                    <CourseBlock aorn={true} logo={fields.aornLogo} blockData={listedAORNCourses} filters={filters} cl={(e)=>{DeleteFilter(e)}} deleteAll={filter || locFilter || typeFilter || specialtyFilter}/>
                </div>

                 <div className={"mx-auto max-w-screen-xl " + `${listedCourses?.length ? "":" hidden"}`}>
                     <CourseBlock aorn={false} blockData={listedCourses} filters={filters} cl={(e)=>{DeleteFilter(e)}} deleteAll={filter || locFilter || typeFilter || specialtyFilter}/>
                 </div>
                 <div className={"bttn1 flex cursor-pointer items-center justify-center h-[56px] mdplus:w-[192px] md:flex-grow md:mx-5 lg:active:bg-primary-blue md:active:bg-primary-darkblue lg:hover:bg-primary-darkblue mdplus:mx-auto bg-primary-blue rounded-full text-primary-white " + (courses?.length + aornCourses.length <= amount ? " hidden" : "") } onClick={()=>IncreaseAmount(8)}>
                     Load more</div>

                 <div className={`flex flex-col mdplus:mx-auto md:mx-5 mdplus:max-w-[600px] lg:max-w-[780px] font-normal md:text-[14px] mdplus:text-[18px] leading-[24px] text-primary-grey mdplus:text-center border-2 border-soft-purple py-12 px-5 rounded-2xl ${!listedCourses?.length && !listedAORNCourses?.length ? "" : " hidden"}`}>
                     <div dangerouslySetInnerHTML={renderHTML(fields.emptyText)}></div>
                     <div className={"mdplus:justify-center mdplus:space-x-6 mt-4 mdplus:mt-6 flex md:justify-evenly"}>
                         <a className={"bttn2 flex mdplus:px-6 md:px-6 min-w-[115px] flex-shrink-0  h-[48px] mx-1 bg-primary-blue text-primary-white items-center " +
                             "justify-center hover:bg-primary-darkblue active:bg-primary-blue lg:mx-5 mt-2 rounded-full cursor-pointer"}
                            href={fields.emptyLButton.href}
                            target={fields.emptyLButton.target}>
                             {fields.emptyLButton.text}
                         </a>
                         <a className={"bttn2 flex mdplus:px-6 md:px-6 h-[48px] min-w-[115px] mx-1 bg-primary-white text-primary-blue items-center text-center " +
                             "justify-center hover:bg-primary-blue hover:text-primary-white active:bg-primary-white " +
                             "active:text-primary-blue border-primary-blue border-2 lg:mx-5 mt-2 rounded-full cursor-pointer"}
                            href={fields.emptyRButton.href}
                            target={fields.emptyRButton.target}>
                             {fields.emptyRButton.text}
                         </a>

                     </div>
                 </div>

             </div>


        </div>
    );
}




export default FindCourseOfferings;

FindCourseOfferings.getCustomInitialProps = async ({agility, item, languageCode})=>{
    const api = agility;
    const refName =`veinglobalcourses`
    let skip = 0;
    let totalCount = 0;
    let courseList = []
    do {
        try{
            let courses = await api.getContentList({
                referenceName:refName,
                locale: languageCode,
                take:50,
                skip: skip,
            })
            totalCount = courses.totalCount
            skip+=50
            courseList.push(...courses.items)
        }catch (e) {
            if (console) console.log(`VGOfferings skip ${skip} totalCount ${totalCount} ERROR: `, e);
            skip += 50
        }
    } while(skip < totalCount)
    courseList = courseList.map(k=>{
        k.fields.vg = true
        k.fields.startDate = Date.now()
        return k
    })
    return (
        courseList
    )


}