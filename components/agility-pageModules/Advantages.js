import React, {useEffect, useState} from "react";
import {renderHTML} from "@agility/nextjs";
import {FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight} from "react-icons/fa";

let paused = false;

const Advantages = ({module}) =>{
    const {fields} = module;
    const [numId, setNumId] = useState(0);
    const numbers = fields.list.slice(0).reverse()
    const length = numbers.length
    // useEffect(()=>{
    //     handleClick(1)
    // },[])


    const [counter, setCounter] = useState(false);

    useEffect(() => {
        if(window.innerWidth > 1290){
            const interval = setInterval(() => {

                if (!paused) {
                    setNumId((prevCounter) => {
                        if (prevCounter < 4) return prevCounter + 1
                        else return 0
                    });
                }


            }, 2000);

            return () => clearInterval(interval);
        }
    }, []);





    useEffect(()=>{

        let elements = document.getElementsByClassName("num-element")
        for (let key = 0; key < elements.length; key++){
            if (key == numId) {
                elements[key].classList.remove('opacity-30','text-secondary-green')
                elements[key].classList.add('text-primary-darkblue', 'opacity-100')
            }
            else elements[key].classList.add('opacity-30', 'text-secondary-green')

        }
    },[numId])


    // useEffect(() => {
    //     console.log("set interval")
    //     const interval = setInterval(() => {
    //         handleClick(numId+1);
    //     }, 1000);
    //
    //     return () => clearInterval(interval);
    // }, []);



    function clickNext(){
        console.log("clicked next")
        if (numId < length-1) handleClick(numId+1);
    }

    function clickPrev(){
        if (numId > 0) handleClick(numId-1);
    }

    function handleClick(pos){
        console.log("hanled ", pos)
        setNumId(pos);
        //pos.classList.remove('text-secondary-green','opacity-30')
        // const elements = document.getElementsByClassName("num-element");
        // for (let key = 0; key < elements.length; key++){
        //     if (key == pos) elements[key].classList.remove('opacity-30', 'text-secondary-green')
        //     else elements[key].classList.add('opacity-30', 'text-secondary-green')
        //
        // }
        return null
    }
    const Number = ({position})=>{

        return(

            <div className={"flex flex-row num-element cursor-default text-secondary-green opacity-30 md:cursor-pointer "}
                 onClick={()=>handleClick(position)}>
                <h3 className={"translate-y-2"}>#</h3>
                <h2>{position + 1}</h2>
            </div>
        );
    }

    return(
        <div className={"bg-soft-green"}>
            <div className={"max-w-screen-xl mx-auto flex flex-row lg:py-16 md:pt-8"}>
                <div className={"lg:w-6/12 md:mx-auto"}>
                    <h2 className={"md:px-5"}>What makes us different.</h2>
                    <div className={"lg:grid lg:grid-cols-8 lg:py-5 md:pt-5"}>
                        <div className={"lg:w-3/12 mdplus:w-[600px] mdplus:mx-0 mdplus:px-5 lg:space-y-5 justify-between md:mx-5 md:flex"}
                            onMouseEnter={()=>{paused=true}}
                             onMouseLeave={()=>{paused=false}}
                        >
                            { numbers.map((e, index)=>
                                <Number
                                    key = {e.contentID.toString()}
                                    id = {e.contentID.toString()}
                                    position={index}/>
                            )}
                        </div>
                        <div className={`lg:col-span-7 lg:w-11/12 pl-8 b1 lg:space-y-5 md:hidden `}>
                            <div className={"justify-center items-center h-full flex"}
                                dangerouslySetInnerHTML={renderHTML(numbers[numId].fields.text)}/>
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


                    </div>
                </div>
                <div className={"w-6/12 b1 max-h-80 md:hidden"} >
                    {numbers[1].fields.image ? <img className={"rounded-xl"} src={numbers[1].fields.image.url}/> : ''}
                </div>
            </div>
        </div>
    );
}

export default Advantages