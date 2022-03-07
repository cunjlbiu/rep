import React from "react";

const SingleTitle = ({module}) =>{
    const {fields} = module;

    return(

        <div className="max-w-screen-xl mx-auto my-8 text-6xl font-bold">
            <h2>{fields.title} Sample Text</h2>
            <caption className={"c1"}> Caption </caption>

        </div>
);
}
export default SingleTitle