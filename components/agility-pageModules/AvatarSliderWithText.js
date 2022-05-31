import React from 'react'
import {renderHTML} from "@agility/nextjs";
import Slider from "react-multi-carousel";

const AvatarSliderWithText = ({module}) => {
    const {fields} = module


    console.log(fields.avatarSlide[0].fields)


    return (
        <div className={" max-w-full bg-soft-blue justify-center py-6 md:h-full md:min-h-[312px]"}>

            <div className={""}>
                <Slider
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    centerMode={false}
                    partialVisbile={true}
                    className=""
                    containerClass="homeLogosContainer"
                    dotListClass=""
                    draggable={false}
                    focusOnSelect={false}
                    infinite={true}
                    itemClass="homeLogosItem"
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
                            items: 1,
                            partialVisibilityGutter: 0

                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 0
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1,
                            partialVisibilityGutter: 0
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {fields.avatarSlide.map((item, index) =>


                        <div className={"w-full bg-soft-purple py-24 md:py-12 md:px-5"}>
                            <div className={"w-full mx-auto flex items-center text-center flex-col space-y-6"}>
                                <div className={"rounded-full content-center w-[120px] h-[120px]"}>
                                    <img className={"rounded-xl"} src={item.fields.avatarImage.url}/>
                                </div>
                                <div className={"avatarText"} dangerouslySetInnerHTML={renderHTML(item.fields.avatarTitle)}></div>
                                <div className={"avatarName"}>{item.fields.avatarText}</div>
                            </div>
                        </div>

                    )}
                </Slider>
            </div>
        </div>

        //fieldAvatarSlide.map

        //AvatarWithText


    )
}

export default AvatarSliderWithText