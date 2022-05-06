import React, {useRef, useState} from "react"
import {useSwipeable} from "react-swipeable";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";






const OurTeam = ({module})=>{
    const {fields} = module;
    const ref = useRef()
    console.log(ref);
    const [offset, setOffset] = useState(0)
    const swipeHandler = useSwipeable({
        onSwipedRight:(eventData)=>prevSlide(367),
        onSwipedLeft: (eventData) => nextSlide(367),
        delta: 10,                            // min distance(px) before a swipe starts. *See Notes*
        preventDefaultTouchmoveEvent: true,  // call e.preventDefault *See Details*
        trackTouch: true,                     // track touch input
        trackMouse: false,                    // track mouse input
        rotationAngle: 0,                     // set a rotation angle


    });
    function mouseMove(e){
        console.log(e)
        setOffset(offset + e.movementX)
    }

    const nextSlide = (del) => {
        console.log(del)
        let delta = 335+32
        console.log(ref)
        if (!del && ref.current.clientWidth > 1290) delta = 448
        let val = offset
        let maxOffset = ref.current.clientWidth - ref.current.scrollWidth
        if (val-delta < maxOffset)
            setOffset(maxOffset)
        else setOffset(val-delta)
    }
    const prevSlide = (del) => {
        let delta = 335+32
        if (!del && ref.current.clientWidth > 1290) delta = 448
        let val = offset
        let minOffset = 0
        if (val+delta > minOffset)
            setOffset(minOffset)
        else setOffset(val+delta)
    }

    return(
        <div>

            <div className={"max-w-screen-xl mdplus:mx-auto md:justify-center space-y-12 my-16"}>
                <h2 className={"text-center"}>{fields.title}</h2>
                <div className={"mdplus:w-[560px] mx-auto justify-center text-center"}>{fields.text}</div>

                <div className={"flex mx-auto justify-center space-x-4"}>
                    <div className={"bg-soft-blue w-[60px] h-[60px] rounded-full p-[22px]"} onClick={()=>prevSlide()}><FaArrowLeft/></div>
                    <div className={"bg-soft-blue w-[60px] h-[60px] rounded-full p-[22px]"} onClick={()=>nextSlide()}><FaArrowRight/></div>
                </div>
                <div className={"overflow-hidden max-w-screen-xl lg:max-w-[1312px] md:w-[335px] mx-auto "} {...swipeHandler}>
                    <div className={" space-x-8 flex flex-row mx-auto"}
                         ref={ref}
                         style={{transform:`translateX(${offset}px)`, transition:"all 300ms ease-in-out 0s"}}
                         >
                        {fields.ourTeam.map((e)=>{
                            return(<div className={"lg:w-[416px] md:w-[335px]"}>
                                <div className={"lg:w-[416px] lg:h-[520px] md:w-[335px] md:h-[415px] rounded-xl flex-shrink-0 " + `${e.fields.image ? "":"bg-soft-blue"}`}>{
                                    e.fields.image ? <img className={"object-scale-down rounded-xl"} src={e.fields.image.url}/> : "image 416x520 should be there"
                                }</div>
                                <p className={"c1 md:pt-5"}>{e.fields.name}</p>
                                <p className={"b1 md:pt-2"}>{e.fields.specialty}</p>
                            </div>)
                        })}

                    </div>
                </div>
            </div>
        </div>
    )

}
export default OurTeam