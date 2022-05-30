import React from "react";

const ForceSync = ({module})=>{
    async function Post(){
        await fetch("https://cinemed-agility.vercel.app/api/course-sync",{
            method:"POST",
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache',
        })
    }
    return(
        <div className={"flex content-center justify-center"}>
            <button onClick={Post} className={"h-[60px] w-[200px] bg-primary-blue active:bg-primary-darkblue"}>
                FORCE!!!!
            </button>

        </div>
    )
}
export default ForceSync