import React from "react";
import {AgilityImage} from "@agility/nextjs";
import Slider from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
const Logos = ({module}) =>{
    const {fields} = module;

    return(
        <div className={" max-w-full bg-soft-blue justify-center py-6 space-y-2 md:h-full md:min-h-[312px]"}>
            <div className="max-w-screen-xl my-8 md:my-9 mx-auto justify-center flex md:    px-[51px]">
                <caption className={"c1 w-max mx-auto md:text-[24px] md:font-extrabold"}>{fields?.title}</caption>
            </div>
            <div className={"mx-auto"}>
                <Slider
                    additionalTransfrom={0}

                    autoPlay
                    autoPlaySpeed={1}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dot"
                    customTransition="all 5s linear"
                    dotListClass=""
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover={false}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 6,
                            partialVisibilityGutter:0

                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter:0
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 3,
                            partialVisibilityGutter:0
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={true}
                    shouldResetAutoplay
                    showDots={false}
                    arrows={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    transitionDuration={5000}

                >
                    {fields.images.media.map((image, index) =>
                        <img className={"md:mx-auto object-fill"} src={image.url} width={"144px"}
                             height="48"/>
                    )}
                </Slider>
            </div>
            <div className={"mx-auto"}>
                <Slider
                    additionalTransfrom={0}

                    autoPlay
                    autoPlaySpeed={1}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    customTransition="all 5s linear"
                    dotListClass=""
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover={false}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 6,
                            partialVisibilityGutter:0

                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter:0
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 3,
                            partialVisibilityGutter:0
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    shouldResetAutoplay
                    showDots={false}
                    arrows={false}
                    sliderClass=""
                    slidesToSlide={-1}
                    swipeable
                    transitionDuration={5000}

                >
                    {fields?.sliderB?.media?.map((image, index) =>
                        <img className={"md:mx-auto object-fill"} src={image.url} width={"144px"}
                             height="48"/>
                    ).reverse()}
                </Slider>
            </div>
        </div>
    );
};
export default  Logos