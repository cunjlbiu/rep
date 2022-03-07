import React from 'react'

const Offerings = ({module})=>{
    const {fields} = module
    console.log(fields.courses)
    let date = new Date(fields.courses[0].fields.date)
    return(
        <div>
            <div className={"max-w-screen-xl mx-auto"}>
                <h1>
                    Offerings
                </h1>
                <h3>
                    Aseptic practices
                </h3>
                <div className={"grid grid-cols-2 py-5"}>
                    <div>
                        {date.getFullYear()}
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </div>
    );

}
export default Offerings;