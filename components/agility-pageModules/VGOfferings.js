import React, {useEffect, useRef, useState} from 'react'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {renderHTML} from "@agility/nextjs";


const CourseItem = ({data})=> {
   // console.log(data)
    return(
        <div className={"py-10 lg:w-[640px]"}>
            <div className={`lg:h-[320px] lg:w-[640px] rounded-xl relative text-white text-center ${!data.image ? 'bg-agility' : ''} `}>
                <div className={`absolute b3 rounded-full px-[12px] py-1 top-4 left-4 bg-primary-blue`}>{data.tag}</div>
                {!data.image ? "image should be here" : <a href={data?.imageUrl?.href} target={data?.imageUrl?.target}><img className={"rounded-xl lg:h-[320px] lg:w-[640px]"} src={data.image.url}/></a>}
            </div>
            <div className={"flex justify-between px-1"}>
                <div className={"b3 py-4 hidden"}>(ITEM # {data.iD})</div>
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


const VGOfferings = ({module, customData})=>{
    const ref = useRef()
    const {fields} = module
    fields.courses = customData
    const course = {}
    fields.courses.map((e)=>{course[e.fields.filter] ? course[e.fields.filter].push(e) : course[e.fields.filter] = [e] })
    const [amount, setAmount] = useState(8);
    const [courseArr,setCourseArr] =  useState(Object.entries(course))
    // const [courseArr,setCourseArr] =  useState([])
    const [courseList, setCourseList] = useState(courseArr)
    const [filter,setFilter] = useState("")
    const [offset, setOffset] = useState(0)
    const [courseCountMax, setCourseCountMax] = useState(0)
    let maxPosCours = 0
    useEffect(()=>{
        FillCourseList()
        setCourseArr(filterMap(fields.courses))
        // filterMap(fields.courses)
    },[filter,amount])

    function filterMap(courseArr){
        let newarr = courseArr.map((e)=>{
            return (e.fields.filter.split(";").map(e=>e.trim()))
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
        return newarr
    }

    function FillCourseList(){
        let arr = [];
        maxPosCours=0
        let i = 0;
        for(let k of courseArr){
            //if(i == amount) break
            if( filter === "" || filter.indexOf(k[0]) !== -1){
                maxPosCours +=k[1].length
                if(i >= amount)
                    if(arr[arr.length -1][1].length % 2 != 0)
                        setAmount(amount+1)
                    else
                        continue
                arr.push([k[0],[]]);
                for (let j of k[1]){
                    if(i < amount){
                        arr[arr.length-1][1].push(j)
                        i++
                    }
                }
            }
        }
        setCourseList(arr)
        console.log(arr, i)
        setCourseCountMax(maxPosCours)
    }

    function IncreaseAmount(i){
        setAmount(amount + i);
    }
    function ResetCountMax(){
        setCourseCountMax(0)
    }
    function IncreaseCountMax(i){
        setCourseCountMax(courseCountMax + i)
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
        setAmount(8)
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
                <div className={"b1 py-3"} dangerouslySetInnerHTML={renderHTML(fields.text)}/>
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
                    `text-primary-white ${amount >= courseCountMax ? "hidden" : ""}`
                } onClick={()=>IncreaseAmount(8)}>
                    Load more</div>
            </div>
        </div>
    );

}
export default VGOfferings;

VGOfferings.getCustomInitialProps = async ({agility, item, languageCode})=>{
    const api = agility;
    const refName =item.fields.courses[0].properties.referenceName;
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
    return (
        courseList
    )


}