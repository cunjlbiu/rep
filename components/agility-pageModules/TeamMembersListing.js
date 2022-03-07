import React from "react";
import {AgilityImage} from "@agility/nextjs";

const TeamMembersListing = ({module}) =>{
    const {fields} = module;

    return(
        <div className="max-w-screen-xl my-16 mx-auto grid gap-y-10 gap-x-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {fields.member.map((member,index) =>(
                <div>
                    <AgilityImage src={member.fields.image.url} height="350" width="300"/>
                    <h1 className="font-display text-xl font-black text-secondary-500 md:text-3xl lg:text-2xl tracking-wide text-left mt-4 lg:leading-tight ml-auto md:text-left">{member.fields.name}</h1>
                    <p>{member.fields.position}</p>
                </div>

            ))}
        </div>

    );

}
export default TeamMembersListing;