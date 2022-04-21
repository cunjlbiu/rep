import React from "react"
import {renderHTML} from "@agility/nextjs";

const Video = ({module}) => {
    const {fields} = module;
    let bgGradient = {
        background:`linear-gradient(${fields.bgTop} 50%, ${fields.bgBot} 50%)`
    }
    return(
        <div>
            <div className={"flex max-w-full justify-center py-12 md:px-5 md:hidden mdplus:flex  video_desktop"} style={bgGradient}>
                <div className={"rounded-2xl"} dangerouslySetInnerHTML={renderHTML(fields.video)}/>
            </div>
            <div className={"lg:hidden mdplus:hidden flex max-w-full justify-center py-12 md:px-5 video_mobile"} style={bgGradient}>
                <div className={"rounded-2xl w-full"} dangerouslySetInnerHTML={renderHTML(fields.videoMobile)}/>
            </div>
        </div>
    );

}
export default Video