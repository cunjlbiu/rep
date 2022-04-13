import React from "react";
import {AgilityImage} from "@agility/nextjs";
import Slider from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
const Logos = ({module}) =>{
    const {fields} = module;

    return(
        <div className={" max-w-full bg-soft-blue h-64 justify-center py-6 md:h-full md:min-h-[312px]"}>
            <div className="max-w-screen-xl my-8 md:my-9 mx-auto justify-center flex md:px-[51px]">
                <caption className={"c1 w-max mx-auto md:text-[24px] md:font-extrabold"}>We collaborate with 200+ leading universities and companies</caption>
            </div>
            <div className={"max-w-screen-lg justify-center mx-auto -translate-x-10"}>
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
                        <div className={"md:mx-auto h-[48px] w-max-[160px] md:h-[48px] md:w-[144px] "}><img src={image.url} width={"144px"}
                                                                                 height="48"/></div>
                    )}
                </Slider>
            </div>
        </div>
    );
};
export default  Logos