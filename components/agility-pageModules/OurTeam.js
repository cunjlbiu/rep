import React, {useState} from "react"
import {useSwipeable} from "react-swipeable";






const OurTeam = ({module})=>{
    const {fields} = module;
    const [offset, setOffset] = useState(0)
    const swipeHandler = useSwipeable({
        onSwiping:(eventData)=> {console.log("swiping ", eventData)
        setOffset(offset + eventData.deltaX)},
        onSwipedLeft: (eventData) => setOffset(offset - 100),
        delta: 10,                            // min distance(px) before a swipe starts. *See Notes*
        preventDefaultTouchmoveEvent: false,  // call e.preventDefault *See Details*
        trackTouch: true,                     // track touch input
        trackMouse: true,                    // track mouse input
        rotationAngle: 0,                     // set a rotation angle


    });
    function mouseMove(e){
        console.log(e)
        setOffset(offset + e.movementX)
    }
    return(
        <div>

            <div>
                <div className={"overflow-hidden max-w-screen-xl mx-auto "}>
                    <div className={" space-x-8 flex flex-row mx-auto bg-red-700 h-[320px]"}
                         style={{transform:`translateX(${offset}px)`, transition:"all 300ms ease-in-out 0s"}}>
                        <div className={"w-[416px] h-[320px] bg-red-200 flex-shrink-0"}>1</div>
                        <div className={"w-[416px] h-[320px] bg-red-300 flex-shrink-0"}>2</div>
                        <div className={"w-[416px] h-[320px] bg-red-400 flex-shrink-0"}>3</div>
                        <div className={"w-[416px] h-[320px] bg-red-500 flex-shrink-0"}>4</div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default OurTeam