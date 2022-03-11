import React from 'react'


const CourseItem = ({data})=> {
    console.log(data)
    return(
        <div className={"py-10"}>
            <div className={"w-11/12 h-80 rounded-xl text-white text-center"}>
                {!data.image ? "image should be here" : <img src={data.image.url}/>}
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


const FindCourseOfferings = ({module})=>{
    const {fields} = module
    const course = {}
    fields.courses.map((e)=>{course[e.fields.filter] ? course[e.fields.filter].push(e) : course[e.fields.filter] = [e] })
    const courseArr = Object.entries(course)

    return(
        <div className={"bg-secondary-blue "}>
            <div className={"max-w-screen-xl mx-auto py-16"}>
<div className={"bg-secondary-blue "}>
                <h1 className={"py-2 text-center "}>
                    Choose from a vast library<br/>
                    of curated content.
                </h1>
                <div className={"b1 text-center py-2 "}>With over thousands of courses to choose from, our curriculum will advance your skills and help you and your<br/> team reduce medical errors.</div>
                <div className="relative w-3/6 mx-auto">
                    <input type="text" className="custom-search-input h-12 " placeholder="Search"/>
                    <button className="custom-search-botton" type="submit">Find a course</button>
                </div>

</div>





            </div>
                     <div className={"bg-primary-white py-14 my-8 "}>
<div className={"mx-auto max-w-screen-xl "}>

            <CourseBlock blockData={fields.courses}/>
</div>
                     </div>
        </div>
    );

}
export default FindCourseOfferings;