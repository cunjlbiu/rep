import React from "react";
import {AgilityImage} from "@agility/nextjs";
import Slider from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
const Logos = ({module}) =>{
    const {fields} = module;

    return(
        <div className={"max-w-full bg-soft-blue h-64 justify-between py-6 "}>
            <div className="max-w-screen-xl my-8 mx-auto grid grid-rows-2 justify-center space-y-5">
                <caption className={"c1 w-max mx-auto"}>We collaborate with 200+ leading universities and companies</caption>
                <Slider
                    additionalTransfrom={100}
                    arrows = {false}
                    autoPlay ={true}
                    autoPlaySpeed={1500}
                    centerMode={false}
                    className=""
                    containerClass=""
                    dotListClass=""
                    draggable={false}
                    focusOnSelect={false}
                    infinite={true}
                    itemClass=""
                    keyBoardControl={false}
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 4,

                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {fields.images.media.map((image, index) =>
                        <div className={"h-[48px] w-max-[160px]"}><img src={image.url} width={image.metaData.pixelWidth}
                                            height="48"/></div>
                    )}
                </Slider>
            </div>
        </div>
    );
};
export default  Logos