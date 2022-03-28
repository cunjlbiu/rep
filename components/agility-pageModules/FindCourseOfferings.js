import React, {useState} from 'react'
import Switch from 'react-switch'
import Select from "react-select";

const CourseItem = ({data})=> {
    console.log(new Date(data.date) < Date.now())
    return(
        <div className={"py-10"}>
            <div className={"w-11/12 h-80 rounded-xl text-white text-center"}>
                {!data.image ? "image should be here" : <img className={"rounded-xl"} src={data.image.url}/>}
            </div>
            <div className={"b3 py-4"}>({new Date(data.date).getFullYear()}) (ITEM # {data.id})</div>
            <div className={"c1"}>{data.name}</div>
        </div>
    )
}

const CourseBlock = ({blockData})=>{
    return(
        <div>
            <h3>
                Offerings
            </h3>
            <div className={"b1 pt-3"}>View our current curriculum.</div>
            <div className={"grid grid-cols-2 py-1 mb-5 "}>
                {blockData.map((e,i)=>{
                    return(
                        <CourseItem data={e.fields}/>
                    )
                })}
            </div>
        </div>
    )
}

const Filtering = (filters, courses,ondemand)=>{
    let filteredcourse = []
    if (ondemand) {
        for (let k of courses) {
            if (k.fields.filter.includes(filters) && new Date(k.fields.date) < Date.now())
                filteredcourse.push(k)
        }
    }
    else
        for (let k of courses) {
            if (!k.fields.place) k.fields.place = ""
            if (k.fields.filter.includes(filters) || k.fields.name.includes(filters) || k.fields.place.includes(filters))
                filteredcourse.push(k)
        }
    return filteredcourse;
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
    const [checked, setChecked] = useState(false)
    const {fields} = module
    const [courses,setCourses] = useState(fields.courses)
    const [filter, setFilter] = useState("")
    const course = {}
    fields.courses.map((e)=>{course[e.fields.filter] ? course[e.fields.filter].push(e) : course[e.fields.filter] = [e] })
    const courseArr = Object.entries(course)
    const ApplyFilters = ()=>{
        setCourses(Filtering(filter, fields.courses,checked))
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
                                    onChange={(ck)=>{setChecked(ck)}}
                                    height={24}
                                    width={40}
                                    offColor={"#D6D7D9"}
                                    onColor={"#1C58F8"}
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                />
                                <p>On-Demand</p>
                            </div>
                            <button className="custom-search-botton" type="submit" onClick={ApplyFilters}>Find a course</button>
                    </div>
                    <div className={"w-[860px] flex justify-evenly bg-primary-white rounded-full mx-auto py-6 mt-6"}>
                        <Select styles ={ customStyle}
                                placeholder="Specialty"
                                options={specialty}
                                isClearable={true}


                        />
                        <Select styles ={ customStyle}
                                placeholder="Course Type"
                                options={courseType}
                                isClearable={true}

                        />
                        <Select styles ={ customStyle}
                                placeholder="Location"
                                options={locations}
                                isClearable={true}
                        />

                    </div>
                </div>
            </div>


             <div className={"bg-primary-white py-14 my-8 "}>
                <div className={"mx-auto max-w-screen-xl "}>
                    <CourseBlock blockData={courses}/>
                </div>
             </div>

        </div>
    );

}
export default FindCourseOfferings;