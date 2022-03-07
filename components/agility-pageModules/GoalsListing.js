import React from "react";
import {AgilityImage} from "@agility/nextjs";
//import Link from "next/link";


const GoalsListing = ({module}) =>{
    const {fields} = module;

    return(
        <div className="relative grid gap-0 grid-cols-2 max-w-screen-xl py-8 mx-auto">
            <div className="flex-col ">
                <h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight ml-auto md:text-left">
                    {fields.title}
                </h2>
                <p className="mt-4 pr-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200 ml-auto">
                    {fields.text}
                </p>
            </div>
            <div className="grid gap-20 grid-cols-2 flex-row">
                {fields.goals.reverse().map((goal, index)=>(
                    <div>
                        <div className="mx-auto my-auto">
                            <AgilityImage src={goal.fields.image.url} className="rounded-lg" width="100" height="100"/>
                        </div>
                        {goal.fields.title}
                        <p>{goal.fields.text}</p>
                    </div>
                ))}
            </div>
        </div>

    );

}
export default GoalsListing;