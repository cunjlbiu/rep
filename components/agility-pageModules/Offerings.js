import React, {useRef, useState} from 'react'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";


const CourseItem = ({data})=> {
    //console.log(data)
    return(
        <div className={"py-10 lg:w-[640px]"}>
            <div className={`lg:h-[320px] lg:w-[640px] rounded-xl text-white text-center ${!data.image ? 'bg-agility' : ''} `}>
                {!data.image ? "image should be here" : <img className={"rounded-xl"} src={data.image.url}/>}
            </div>
            <div className={"b3 py-4"}>({new Date(data.startDate).getFullYear()}) (ITEM # {data.id})</div>
            <div className={"c1 lg:w-[640px]"}>{data.name}</div>
        </div>
    )
}

const CourseBlock = ({blockData, filters})=>{
    // console.log(`filters = ${filters}`)
    // console.log(`blockData = ${blockData[0]}`)
    // console.log(`filter check: ${filters.indexOf(blockData[0])}` )
    if( filters === "" || filters.indexOf(blockData[0]) !== -1){
        // console.log(`filters = ${filters}`)
        // console.log(`blockData = ${blockData[0]}`)
        // console.log(`filter passed: ${filters.indexOf(blockData[0])}` )
        return(
            <div>
                <h3>
                    {blockData[0]}
                </h3>
                <div className={"flex flex-wrap justify-between py-1 mb-5"}>
                    {blockData[1].map((e,i)=>{
                        return(
                            <CourseItem data={e.fields}/>
                        )
                    })}
                </div>
            </div>
        )
    }
    return(null)
}


const Offerings = ({module})=>{
    const ref = useRef()
    const {fields} = module
    const course = {}
    fields.courses.map((e)=>{course[e.fields.filter] ? course[e.fields.filter].push(e) : course[e.fields.filter] = [e] })
    const [courseArr,setCourseArr] =  useState(Object.entries(course))
    const [filter,setFilter] = useState("")
    const [offset, setOffset] = useState(0)
    let off = 0
    console.log(courseArr)
    console.log(filter)

    const applyFilter = (newFil)=>{
        console.log(ref.current)
        if(newFil === "All"){
            setFilter("")
        }
        else {
            let i = filter.indexOf(newFil)
            if (i === -1) {
                setFilter(filter + newFil)
            }
            else
                setFilter(filter.replace(newFil,""))
        }
    }

    const incOffset = ()=>{
        let val = offset
        let maxOffset = ref.current.clientWidth - ref.current.scrollWidth
        if (val-300 < maxOffset)
            setOffset(maxOffset)
        else setOffset(val-300)
    }

    const decOffset = ()=>{
        let val = offset
        let minOffset = 0
        if (val+300 > minOffset)
            setOffset(minOffset)
        else setOffset(val+300)
    }

    return(
        <div>
            <div className={"max-w-screen-xl mx-auto md:mx-5"}>
                <h1 className={"py-2"}>
                    {fields.title}
                </h1>
                <div className={"b1 py-3"}>View our current curriculum.</div>
                <div className={"flex overflow-hidden md:overflow-x-scroll mb-6"}>
                <div className={"flex space-x-4 py-2 w-full flex-nowrap"} ref={ref}
                     style={{transform:`translateX(${offset}px)`, transition:"all 300ms ease-in-out 0s"}}>
                    <div className={`flex-initial border-2 border-secondary-blue rounded-3xl b3 h-[42px] cursor-pointer
                        py-2 px-2 flex-shrink-0 text-center min-w-[55px] ${filter === "" ?"bg-secondary-blue":"" } `} onClick={()=>applyFilter("All")} >All</div>
                    {courseArr.map((e)=>
                        <div className={`flex-initial border-2 border-secondary-blue rounded-3xl b3 h-[42px] py-2 px-2
                                flex-shrink-0 text-center cursor-pointer ${filter.indexOf(e[0]) == -1 ? "" : "bg-secondary-blue" } ` } onClick={()=>applyFilter(e[0])}>{e[0]}</div>)}

                </div>
                    <div className={"flex space-x-2 z-50 bg-primary-white rounded-l-full px-5 py-2 md:hidden"}>
                        <div className={"rounded-full h-[42px] w-[42px] p-[12px] z-50 border-2 border-secondary-blue"} onClick={decOffset}><FaArrowLeft/></div>
                        <div className={"z-50 rounded-full h-[42px] w-[42px] p-[12px] border-2 border-secondary-blue "} onClick={incOffset}><FaArrowRight/></div>
                    </div>
                </div>
                {
                    courseArr.map((e,i)=>{
                        return(<CourseBlock blockData={e} filters={filter}/>)
                    })
                }

            </div>
        </div>
    );

}
export default Offerings;