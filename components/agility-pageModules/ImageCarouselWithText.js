import React, {useState} from "react";
import {AgilityImage} from "@agility/nextjs";
import { renderHTML } from "@agility/nextjs";
import {FaAngleRight, FaAngleLeft} from "react-icons/fa";

const ImageCarouselWithText = ({module}) => {
    const {fields} = module;
    const images = fields.images.media
    const slidesLength = images.length;
    const [Current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(Current == slidesLength - 1 ? 0 : Current + 1);
    };

    const prevSlide = () => {
        setCurrent(Current == 0 ? slidesLength-1: Current - 1);
    };

    return(
        <div className="flex flex-row max-w-screen-xl my-16 mx-auto">
            <div className="mx-auto pt-8 pr-28 w-1/2">
                <div className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center lg:leading-tight py-8 md:text-left">{fields.title}</div>
                <div dangerouslySetInnerHTML={renderHTML(fields.text)}/>
            </div>
            <div className="relative mx-auto">
                <AgilityImage src={images[Current].url} width={600} height={700}/>
                <FaAngleRight onClick={nextSlide} className="absolute right-4 top-1/2 text-4xl"/>
                <FaAngleLeft onClick={prevSlide} className="absolute left-4 top-1/2 text-4xl "/>
            </div>

        </div>

    );
}
export default ImageCarouselWithText