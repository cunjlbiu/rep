import React, {useState} from 'react'

const CompanyHero = ({module}) => {

    const {fields} = module;


    return (
        <div className={"bg-soft-purple pt-10"}>
            <div className={"max-w-screen-xl mx-auto"}>
                <div className={"flex my-8 items-center justify-between md:flex-col md:items-baseline md:px-5 "}>
                    <h1 className={"w-10/12 md:text-[40px]  md:text-primary-darkblue md:leading-[48px] md:pb-[16px]"}>{fields.title}</h1>
                    <p className={"b1 w-8/12 border-primary-blue left-border justify-self-start pl-5 lg:ml-2 md:text-primary-darkblue md:text-[15px] md:min-w-[319px]"}>{fields.text}</p>
                </div>
                <br/>
            </div>

            {/*1*/}
            <div className={"mx-auto max-w-[1920px] mdplus:w-full  mdplus:flex md:hidden"}>
                <img className={"mdplus:object-scale-down "} src={fields.image.url}/>
            </div>

            {/*2*/}
            <div className={"mdplus:hidden min-h-[375px]"}>
               {/* <img className={"md:w-full md:object-contain"} src={fields.imageMobile.url}/>*/}
                {fields.imageMobile ? <img className={"md:w-full md:object-contain"} src={fields.imageMobile.url} />: "image should be there"}
            </div>
        </div>
    );
}

export default CompanyHero;