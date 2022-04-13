import React from 'react'


const CourseItem = ({data})=> {
    console.log(data)
    return(
        <div className={"py-10 w-[640px]"}>
            <div className={`h-[320px] w-[640px] rounded-xl text-white text-center ${!data.image ? 'bg-agility' : ''} `}>
                {!data.image ? "image should be here" : <img className={"rounded-xl"} src={data.image.url} width={"640px"} height={"320px"}/>}
            </div>
            <div className={"b3 py-4"}>({new Date(data.startDate).getFullYear()}) (ITEM # {data.id})</div>
            <div className={"c1 w-[640px]"}>{data.name}</div>
        </div>
    )
}

const CourseBlock = ({blockData})=>{
    return(
        <div>
            <h3>
                {blockData[0]}
            </h3>
            <div className={"flex flex-wrap justify-between  py-1 mb-5"}>
                {blockData[1].map((e,i)=>{
                    return(
                        <CourseItem data={e.fields}/>
                    )
                })}
            </div>
        </div>
    )
}


const Offerings = ({module})=>{
    const {fields} = module
    const course = {}
    fields.courses.map((e)=>{course[e.fields.filter] ? course[e.fields.filter].push(e) : course[e.fields.filter] = [e] })
    const courseArr = Object.entries(course)
    console.log(courseArr)

    return(
        <div>
            <div className={"max-w-screen-xl mx-auto"}>
                <h1 className={"py-2"}>
                    {fields.title}
                </h1>
                <div className={"b1 py-3"}>View our current curriculum.</div>
                <div className={"flex overflow-hidden"}>
                <div className={"flex space-x-4 py-2 mb-6 w-full flex-nowrap "}>
                    <div className={"flex-initial border-2 border-secondary-blue rounded-3xl b3 h-[42px] cursor-pointer " +
                        "py-2 px-2 flex-shrink-0 text-center min-w-[55px]"}>All</div>
                    {courseArr.map((e)=>
                        <div className={"flex-initial border-2 border-secondary-blue rounded-3xl b3 h-[42px] py-2 px-2" +
                            " flex-shrink-0 text-center cursor-pointer"}>{e[0]}</div>)}

                </div>
                </div>
                {
                    courseArr.map((e,i)=>{
                        return(<CourseBlock blockData={e}/>)
                    })
                }

            </div>
        </div>
    );

}
export default Offerings;