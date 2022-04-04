import React from 'react'

const CompanyHero = ({module}) =>{

    const {fields} = module;

    return(
        <div className={"bg-soft-purple"}>
            <div className={"max-w-screen-xl mx-auto"}>
                <div className={"flex my-8 items-center justify-between"}>
                    <h1 className={"w-10/12"}>{fields.title}</h1>
                    <p className={"b1 w-8/12 border-primary-blue left-border justify-self-start pl-5 ml-2"}>{fields.text}</p>
                </div>
                <br/>
                <div className={""}>
                    <img className={""} src={fields.image.url}/>
                </div>
            </div>
        </div>
    );
}

export default CompanyHero;