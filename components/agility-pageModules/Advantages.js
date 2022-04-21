import React, {useEffect, useState} from "react";
import {renderHTML} from "@agility/nextjs";
import {FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight} from "react-icons/fa";

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
            if (key == pos) elements[key].classList.remove('md:opacity-30', 'md:text-secondary-green')
            else elements[key].classList.add('md:opacity-30', 'md:text-secondary-green')

        }
        return null
    }
    const Number = ({position})=>{

        return(

            <div className={"flex flex-row num-element cursor-default md:cursor-pointer "} onClick={()=>handleClick(position)}>
                <h3 className={"translate-y-2"}>#</h3>
                <h2>{position + 1}</h2>
            </div>
        );
    }

    return(
        <div className={"bg-soft-green"}>
            <div className={"max-w-screen-xl mx-auto flex flex-row py-16"}>
                <div className={"lg:w-6/12 md:mx-auto"}>
                    <h2 className={"md:px-5"}>What makes us different.</h2>
                    <div className={"lg:grid lg:grid-cols-8 py-5"}>
                        <div className={"lg:w-3/12 mdplus:w-[600px] mdplus:mx-0 mdplus:px-5 text-primary-darkblue lg:space-y-5 justify-between md:mx-5 md:flex"}>
                            { numbers.map((e, index)=>
                                <Number
                                    key = {e.contentID.toString()}
                                    id = {e.contentID.toString()}
                                    position={index}/>
                            )}
                        </div>
                        <div className={`lg:col-span-7 lg:w-11/12 pl-5 b1 lg:space-y-5 md:hidden `}>
                            {numbers.map((e,i)=>{
                                return <div dangerouslySetInnerHTML={renderHTML(e.fields.text)} className={"h-[72px] py-1"}/>

                            })}
                        </div>
                        <div className={` p-5 b1 lg:hidden w-full `}>
                           <div className={"max-w-[560px] min-h-[160px]"} dangerouslySetInnerHTML={renderHTML(numbers[numId].fields.text)}/>
                        </div>
                        <div className={"md:hidden col-start-2 -translate-y-8 space-x-2 bttn2 flex flex-row lg:hidden"} onClick={clickNext}>
                            <FaArrowDown className={"h-6"}></FaArrowDown>
                            <span>Next</span>

                        </div>
                        <div className={"md:hidden col-start-3 -translate-y-8 space-x-2 bttn2 flex flex-row lg:hidden"} onClick={clickPrev}>
                            <FaArrowUp className={"h-6"}></FaArrowUp>
                            <span>Previous</span>
                        </div>
                        <div className={"lg:hidden flex justify-center space-x-6"}>
                            <div className={"bg-primary-white w-[60px] h-[60px] rounded-full p-[22px]"} onClick={clickPrev}><FaArrowLeft/></div>
                            <div className={"bg-primary-white w-[60px] h-[60px] rounded-full p-[22px]"} onClick={clickNext}><FaArrowRight/></div>
                        </div>

                    </div>
                </div>
                <div className={"w-6/12 b1 max-h-80 md:hidden"} >
                    {numbers[1].fields.image ? <img src={numbers[1].fields.image.url}/> : ''}
                </div>
            </div>
        </div>
    );
}

export default Advantages