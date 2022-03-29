import React, {useState, useRef} from 'react'
import Switch from 'react-switch'
import Select from "react-select";



const CourseItem = ({data})=> {
    const startDate = new Date(data.startDate);
    const mm = ('0'+ (startDate.getMonth()+1)).slice(-2);
    const dd = ('0'+ startDate.getDate()).slice(-2);
    const endDate = new Date(data.endDate);
    if(!data.place) data.place = ''
    return(
        <div className={"py-10"}>
            <div className={"w-[640px] h-[320px] rounded-xl text-white text-center relative"}>
                <div className={`absolute b3 rounded-full px-[12px] py-1 top-4 left-4 ${data.onDemand ? "bg-primary-blue" : "bg-primary-white text-black" }`}>{data.onDemand ? "On-Demand" : "Live"}</div>
                {!data.image ? "image should be here" : <img className={"rounded-xl"} src={data.image.url}/>}
            </div>
            <div className={"flex justify-between w-[640px] my-4"}>
                <div className={"b3"}>{startDate.valueOf() ? `(${startDate.getFullYear()})` : ''} (ITEM # {data.id})</div>
                <div className={"flex justify-between"}>
                    <div className={"b3"}>{(data.place.length > 15)? "International" : data.place}</div>
                    <div className={`text-secondary-blue px-1 ${(!!startDate.valueOf() && !!data.place)? "" : "hidden"}`}>|</div>
                    <div className={"b3"}>{startDate.valueOf() ? `${mm}.${dd}.${startDate.getFullYear()}`: '' } </div>
                </div>
            </div>
            <div className={"c1"}>{data.name}</div>
        </div>
    )
}
const CourseBlock = ({blockData, filters, cl})=>{
    return(
        <div>
            <h3>
                Offerings
            </h3>
            <div className={"b1 pt-3"}>View our current curriculum.</div>
            <div className={"flex justify-between"}>
                <div className={"flex space-x-2"}>
                    {filters.map((e,i)=>{
                        if (!!e)
                            return (
                                <div className={"border-secondary-blue rounded-full space-x-2 border-[1px] py-1 px-2 b3"}>{e}
                                    <div className={"text-[10px] font-extrabold px-1 inline-block cursor-pointer"} onClick={()=>{cl(i)}}>✕</div>
                                </div>
                            )

                    })}
                </div>

                <div className={`bttn2 invisible cursor-pointer`}>Clear all filter</div>

            </div>
            <div className={"grid grid-cols-2 py-1 mb-5"}>
                {blockData.map((e,i)=>{
                    return(
                        <CourseItem data={e.fields}/>
                    )
                })}
            </div>
        </div>
    )
}
const Filtering = (filters, courses,ondemand, loc,type, spec)=>{
    let filteredCourse = []
        for (let k of courses) {
            if (!k.fields.place) k.fields.place = ""
            if (!k.fields.filter) k.fields.filter= ""
            if (!k.fields.type) k.fields.type = ""
            if (!k.fields.specialty) k.fields.specialty = ""
            if ((k.fields.filter.includes(filters) || k.fields.name.includes(filters) || k.fields.place.includes(filters))
                && k.fields.place.includes(loc) && k.fields.type.includes(type) && k.fields.specialty.includes(spec)
                && ( !ondemand || !!k.fields.onDemand)
            )

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
    {value:"Ground Rounds", label:"Ground Rounds"},
    {value:"Virtual Event", label:"Virtual Event"},
    {value:"Webinar", label:"Webinar"},
    {value:"eLearning", label:"eLearning"},
    {value:"Clinical Video", label:"Clinical Video"},
    {value:"Product Short", label:"Product Short"},
    {value:"Podcast", label:"Podcast"},
]


const FindCourseOfferings = ({module})=>{

    const {fields} = module;

    const customStyle={
        control: (base, state) => ({
            ...base,
            width:"256px",
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
    const [courses,setCourses] = useState(fields.courses);
    const [locFilter, setLocFilter] = useState('');
    const [typeFilter, setTypeFilter]=useState('');
    const [specialtyFilter, setSpecialtyFilter]=useState('');
    const [filter, setFilter] = useState("");
    const [filters, setFilters] = useState([]);
    const selectLocRef = useRef();
    const selectTypeRef = useRef();
    const selectSpecialtyRef = useRef();

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
        console.log(filters)
        console.log(newFilters)
        setFilters(newFilters)
        console.log(filters)
        ApplyFilters()
        console.log("filters")

    }

    const ApplyFilters = (sw) => {
        if (typeof(sw)=="boolean") {
            setCourses(Filtering(filter, fields.courses, sw, locFilter, typeFilter, specialtyFilter))
        }
        else
            setCourses(Filtering(filter, fields.courses,checked,locFilter,typeFilter,specialtyFilter))
        setFilters([filter,locFilter,typeFilter,specialtyFilter])
        console.log("filtering")
        //setFilter("")
    }

    return(
        <div className={"bg-secondary-blue "}>
            <div className={"max-w-screen-xl mx-auto py-16"}>
                <div className={"bg-secondary-blue flex flex-col justify-center"}>
                    <h1 className={"py-2 text-center "}>
                        Choose from a vast library<br/>
                        of curated content.
                    </h1>
                    <div className={"b1 text-center py-2 "}>With over thousands of courses to choose from, our curriculum will advance your skills and help you and your<br/> team reduce medical errors.</div>

                    <div className="relative w-[860px] h-16 mx-auto bg-primary-white rounded-full content-center object-center ">
                            <input type="text"
                                   className=" absolute top-[21px] left-14 w-3/5 border-none outline-none"
                                   placeholder="Search by specialty, learning objective, or location."
                                   value={filter}
                                   onChange={(e)=>setFilter(e.target.value)}/>
                            <div className={"absolute flex top-1/3 right-[17%] b3"}>
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
                            <button className="custom-search-botton bttn2 w-[130px] active:bg-primary-blue hover:bg-primary-darkblue" type="submit" onClick={ApplyFilters}>Find a course</button>
                    </div>

                    <div className={"w-[860px] flex justify-evenly bg-primary-white rounded-full mx-auto py-6 mt-6"}>

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


             <div className={"bg-primary-white py-14 my-8 "}>
                <div className={"mx-auto max-w-screen-xl "}>
                    <CourseBlock blockData={courses} filters={filters} cl={(e)=>{DeleteFilter(e)}}/>
                </div>
             </div>

        </div>
    );

}
export default FindCourseOfferings;