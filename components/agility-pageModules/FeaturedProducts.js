import React from "react"
import Slider from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";

const ButtonGroup = ({previous, next})=>{
    return(
        <div className={"order-first mx-auto flex space-x-5 my-12"}>
            <div className={"flex w-[50px] h-[50px] rounded-full bg-soft-blue"} onClick={previous}>
                <FaArrowLeft className={"mx-auto self-center"} >prev</FaArrowLeft>
            </div>

            <div className={"flex w-[50px] h-[50px] rounded-full bg-soft-blue"} onClick={next}>
                <FaArrowRight className={"mx-auto self-center"}>next</FaArrowRight>
            </div>
        </div>
)
}

const FeaturedProducts =({module})=>{
    const {fields} = module
    //console.log(fields)
    return(
        <div className={"my-10"}>
            <div className={"flex flex-col justify-center space-y-5"}>

                <h3 className={"self-center"}>
                    {fields.title}
                </h3>
                <div className={"b1 self-center"}>
                    {fields.text}
                </div>

            </div>
            <div className={"mx-auto flex flex-col"}>
               <Slider
                   itemClass={"p-[10px]"}
                   autoPlay
                   autoPlaySpeed={2000}
                   arrows={false}
                   draggable
                   centerMode={true}
                   focusOnSelect={true}
                   infinite
                   minimumTouchDrag={80}
                   pauseOnHover
                   containerClass="container-with-dots"
                   customButtonGroup={<ButtonGroup/>}
                   renderArrowsWhenDisabled={false}
                   renderButtonGroupOutside={true}
                   renderDotsOutside={false}
                   responsive={{
                       largeDesktop: {
                           breakpoint: {
                               max: 3000,
                               min: 2101
                           },
                           items: 4,

                       },
                       desktop: {
                           breakpoint: {
                               max: 2100,
                               min: 1601
                           },
                           items: 3,

                       },
                       mobile: {
                           breakpoint: {
                               max: 464,
                               min: 0
                           },
                           items: 0.5,

                       },
                       tablet: {
                           breakpoint: {
                               max: 1600,
                               min: 464
                           },
                           items: 1.3,

                       }
                   }}
                   shouldResetAutoplay
                   showDots={false}

                   slidesToSlide={1}
                   swipeable
               >

                   {/*{fields?.products?.map(*/}
                   {/*    product =>*/}

                   {/*            <div className={"h-[373px] max-w-[528px] rounded-xl hover:bg-soft-blue border-[1px] flex flex-col border-gray-200"}>*/}
                   {/*                <img className={"rounded-t-xl h-[289px] object-cover"} src={product.fields.image.url} height={289}/>*/}
                   {/*                <div className={"flex justify-between px-3 flex-grow"}>*/}
                   {/*                    <div className={"c1 self-center"}>{product.fields.title}</div>*/}
                   {/*                    <a className={"bttn2 self-center hover:text-primary-blue"} href={product.fields.link.href} target={product.fields.link.target}>{product.fields.link.text}</a>*/}
                   {/*                </div>*/}
                   {/*            </div>*/}

                   {/*)}*/}
                   {fields?.products?.map(
                       product =>

                           <div className={"h-[373px] max-w-[528px] min-w-[233px] rounded-xl hover:bg-soft-blue border-[1px] flex flex-col border-gray-200"}>
                               <img className={"rounded-t-xl h-[289px] object-cover"} src={product.fields.image.url} height={289}/>
                               <div className={"flex justify-between my-auto space-x-3 items-baseline px-3"}>
                                   <div className={"c1_mobile"}>{product.fields.title}</div>
                                   <a className={"bttn2 hover:text-primary-blue"} href={product.fields.link.href} target={product.fields.link.target}><span className={""}>{product.fields.link.text}</span></a>
                               </div>
                           </div>

                   )}

               </Slider>
            </div>
        </div>
    )
}
export default FeaturedProducts