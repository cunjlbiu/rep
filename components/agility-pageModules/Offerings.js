import React from 'react'


const CourseItem = ({data})=> {
    console.log(data)
    return(
        <div className={"py-10"}>
            <div className={"bg-agility w-11/12 h-80 rounded-xl text-white text-center"}>
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
                {blockData[0]}
            </h3>
            <div className={"grid grid-cols-2 py-1 mb-5 "}>
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

    return(
        <div>
            <div className={"max-w-screen-xl mx-auto"}>
                <h1 className={"py-2"}>
                    {fields.title}
                </h1>
                <div className={"b1 py-3"}>View our current curriculum.</div>
                <div className={"relative space-x-3 py-2 mb-6 "}>
                    <div className={"inline-block p-1 border-2 border-secondary-blue bg-secondary-blue rounded-3xl px-5 py-2 b3 "}>All</div>
                    <div className={"inline-block p-1 border-2 border-secondary-blue rounded-3xl px-5 py-2 b3 "}>Aseptic practices</div>
                    <div className={"inline-block p-1 border-2 border-secondary-blue rounded-3xl px-5 py-2 b3 "}>Equipment and product safety</div>




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