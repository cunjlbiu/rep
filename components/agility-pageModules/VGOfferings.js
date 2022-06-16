import React, {useEffect, useRef, useState} from 'react'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";


const CourseItem = ({data})=> {
   // console.log(data)
    return(
        <div className={"py-10 lg:w-[640px]"}>
            <div className={`lg:h-[320px] lg:w-[640px] rounded-xl relative text-white text-center ${!data.image ? 'bg-agility' : ''} `}>
                <div className={`absolute b3 rounded-full px-[12px] py-1 top-4 left-4 bg-primary-blue`}>{data.tag}</div>
                {!data.image ? "image should be here" : <a href={data?.imageUrl?.href} target={data?.imageUrl?.target}><img className={"rounded-xl lg:h-[320px] lg:w-[640px]"} src={data.image.url}/></a>}
            </div>
            <div className={"flex justify-between px-1"}>
                <div className={"b3 py-4"}>(ITEM # {data.iD})</div>
                <div className={"b3 py-4"}>{data.instructor ? `Instructor: ${data.instructor}` : ""}</div>
            </div>
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


const VGOfferings = ({module})=>{
    const ref = useRef()
    const {fields} = module
    const course = {}
    fields.courses.map((e)=>{course[e.fields.filter] ? course[e.fields.filter].push(e) : course[e.fields.filter] = [e] })
    const [amount, setAmount] = useState(7);
    const [courseArr,setCourseArr] =  useState(Object.entries(course))
    // const [courseArr,setCourseArr] =  useState([])
    const [courseList, setCourseList] = useState(courseArr)
    const [filter,setFilter] = useState("")
    const [offset, setOffset] = useState(0)
    let off = 0
    console.log("courseList")
    console.log("courseList")
    console.log("courseList")
    console.log("courseList")
    console.log(course)
    console.log(courseList)
    console.log(courseArr)
    console.log(filter)
    useEffect(()=>{
        FillCourseList()
        setCourseArr(filterMap(fields.courses))
        // filterMap(fields.courses)
    },[filter,amount])

    function filterMap(courseArr){
        let newarr = courseArr.map((e)=>{
            return (e.fields.filter.split(";"))
        })
        let filArr = [...new Set(newarr.flat())].map(e=>e.trim())
        newarr = [...new Set(newarr.flat())].map(e=>[e.trim(),[]])


        for(let k of courseArr){
            for(let i=0;i<filArr.length;i++){
                if(k.fields.filter.indexOf(filArr[i])!== -1){
                    newarr[i][1].push(k)
                }
            }
        }

        console.log("newarr")
        console.log("newarr")
        console.log(filArr)
        // console.log(fils)
        console.log(newarr)
        return newarr
    }

    function FillCourseList(){
        let arr = [];
        let i = 0;
        for(let k of courseArr){
            if(i == amount) break
            if( filter === "" || filter.indexOf(k[0]) !== -1){
                arr.push([k[0],[]]);
                for (let j of k[1]){
                    if(i == amount) break
                    arr[arr.length-1][1].push(j)
                    i++
                }
            }
        }
        setCourseList(arr)
    }

    function IncreaseAmount(i){
        setAmount(amount + i);
    }


    const applyFilter = (newFil)=>{
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
        setAmount(7)
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
                <div className={"b1 py-3"}>{fields.text}</div>
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
                    courseList.map((e,i)=>{
                        return(<CourseBlock blockData={e} filters={filter}/>)
                    })
                }
                <div className={"bttn1 flex cursor-pointer items-center justify-center h-[56px] mdplus:w-[192px] md:w-full lg:active:bg-primary-blue" +
                    " md:active:bg-primary-darkblue lg:hover:bg-primary-darkblue mx-auto bg-primary-blue rounded-full " +
                    `text-primary-white ${amount > 20 ? "hidden" : ""}`
                } onClick={()=>IncreaseAmount(99)}>
                    Load more</div>
            </div>
        </div>
    );

}
export default VGOfferings;