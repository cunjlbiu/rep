import React, {useEffect, useState} from "react";
import {renderHTML} from "@agility/nextjs";
import {FaArrowUp, FaArrowDown} from "react-icons/fa";

const Advantages = ({module}) =>{
    const {fields} = module;
    const [numId, setNumId] = useState(0);
    const numbers = fields.list.slice(0).reverse()
    const length = numbers.length
    useEffect(()=>{handleClick(1)},[])

    function clickNext(){
        if (numId < length-1) handleClick(numId+1);
    }

    function clickPrev(){
        if (numId > 0) handleClick(numId-1);
    }

    async function handleClick(pos){
     await setNumId(pos);
        //pos.classList.remove('text-secondary-green','opacity-30')
        const elements = document.getElementsByClassName("num-element");
        for (let key = 0; key < elements.length; key++){
            if (key == pos) elements[key].classList.remove('opacity-30', 'text-secondary-green')
            else elements[key].classList.add('opacity-30', 'text-secondary-green')

        }
        return null
    }
    const Number = ({position})=>{

        return(

            <div className={"flex flex-row text-secondary-green opacity-30 num-element cursor-pointer "} onClick={(e)=>handleClick(position)}>
                <h3 className={"translate-y-2"}>#</h3>
                <h2>{position + 1}</h2>
            </div>
        );
    }

    return(
        <div className={"bg-soft-green"}>
            <div className={"max-w-screen-xl mx-auto flex flex-row py-16"}>
                <div className={"w-6/12"}>
                    <h2>What makes us different.</h2>
                    <div className={"grid grid-cols-8 py-5"}>
                        <div className={"w-3/12 text-primary-darkblue space-y-5"}>
                            { numbers.map((e, index)=>
                                <Number
                                    key = {e.contentID.toString()}
                                    id = {e.contentID.toString()}
                                    position={index}/>
                            )}
                        </div>
                        <div className={`col-span-7 w-11/12 pl-5 b1 transition-transform delay-100`}>
                            <div dangerouslySetInnerHTML={renderHTML(numbers[numId].fields.text)} style={{translate:(`0px ${numId*92}px`)}}/>
                        </div>
                        <div className={"col-start-2 -translate-y-8 space-x-2 bttn2 flex flex-row hidden"} onClick={clickNext}>
                            <FaArrowDown className={"h-6"}></FaArrowDown>
                            <span>Next</span>

                        </div>
                        <div className={"col-start-3 -translate-y-8 space-x-2 bttn2 flex flex-row hidden"} onClick={clickPrev}>
                            <FaArrowUp className={"h-6"}></FaArrowUp>
                            <span>Previous</span>
                        </div>
                    </div>
                </div>
                <div className={"w-6/12 b1 max-h-80"} >
                    {numbers[1].fields.image ? <img src={numbers[1].fields.image.url}/> : ''}
                </div>
            </div>
        </div>
    );
}

export default Advantages