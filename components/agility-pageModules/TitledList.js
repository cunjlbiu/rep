import React from "react";
import {renderHTML} from "@agility/nextjs";

const TitledList = ({module}) => {
    const {fields} = module;
    const programs = fields.content;
    const CATEGORIES = [];
    let CONTENT = [];
    programs.map((cat, index) =>{
        let i = CATEGORIES.indexOf(cat.fields.category_TextField);
        if ( i < 0 ) {
            let k = CATEGORIES.push(cat.fields.category_TextField);
            CONTENT[k-1]=[];
            CONTENT[k-1].push(cat.fields.category_TextField)
            CONTENT[k-1].push(`${cat.fields.name} (${cat.fields.year}) #${cat.fields.iD}`)
        }
        else {
            CONTENT[i].push(`${cat.fields.name} (${cat.fields.year}) #${cat.fields.iD}`)
        }
    } );

    return(
        <div className="max-w-screen-xl mx-auto my-20">
            {CONTENT.map(category => (
                <div className="flex flex-row">
                    <div className=" font-bold text-xl w-1/2">
                        {category[0]}
                    </div>
                    <div className="flex-col mr-auto w-1/2">
                        <br/>
                        {category.map((n,i) =>{
                            if(i>0)
                                {return(<div className={`${i == 1 ? "border-t" : ""} border-b border-black py-3 text-xl`}>{n}</div>)}
                        })}

                        <br/>
                    </div>
                </div>

            ))}

        </div>
    );
};
export default TitledList;