import React, {useState} from "react";
import {AgilityImage} from "@agility/nextjs";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

const Testimonials = ({module}) =>{
    const {fields} = module;
    const items = fields.content;
    const slidesLength = items.length;
    const [Current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(Current == slidesLength - 1 ? Current : Current + 1);
    };

    const prevSlide = () => {
        setCurrent(Current == 0 ? Current: Current - 1);
    };

    return(

        <div className="max-w-screen-xl mx-auto my-8">
            <div className="flex flex-row mt-20 mb-8 justify-between">
                <div className="font-display text-xl font-black text-secondary-500 md:text-3xl lg:text-3xl tracking-wide text-left lg:leading-tight md:text-left">
                    {fields.title}
                </div>
                <div className="flex flex-row">
                    <FaArrowLeft onClick={prevSlide} className={`ml-8 text-3xl ${Current > 0 ? "hover:text-gray-700" : "text-gray-500"}`}/>
                    <FaArrowRight onClick={nextSlide} className={`ml-8 text-3xl ${Current < slidesLength-1 ? "hover:text-gray-700" : "text-gray-500"}`}/>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex-shrink-0 w-64 border-t border-black py-4">
                    <AgilityImage src={items[Current].fields.image.url} width={150} height={150}></AgilityImage>
                    <div className="font-display text-lg font-black text-secondary-500 md:text-xl lg:text-xl tracking-wide text-left my-2 lg:leading-tight md:text-left">{items[Current].fields.name}</div>
                    <div className="text-sm">{items[Current].fields.position}</div>
                </div>
                <div className="flex-grow-0 text-right text-xl italic pl-36 py-1">"{items[Current].fields.text}" </div>
            </div>
        </div>
    );

}
export default Testimonials;
