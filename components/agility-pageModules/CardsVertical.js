import React from "react";
import {AgilityImage} from "@agility/nextjs";
import {renderHTML} from "@agility/nextjs";
import {FaCheck, FaEye, FaAward, FaBookmark, FaCertificate, FaHeart, FaUserAlt} from "react-icons/fa";
// import {Carousel} from '../common/Slider/Carousel'


const CardsVertical = ({module}) => {
    const {fields} = module;

    const listItems = fields?.list?.split('</p>').map((e) =>
        e.slice(e.indexOf('<p>') + 3)
    );

    const Card = ({iconUrl, title, text, iconBg, cardBg, textClr, link}) => {
        return (
            <div className={"mx-5 lg:mx-0"}>
                <a href={link?.href} target={link?.target}>
                    <div className={"border-2 border-agility w-80 min-h-[170] card p-4 space-y-3 rounded-xl md:w-full md:h-full"}
                         style={{backgroundColor: cardBg, color: textClr}}>
                        {iconUrl ?
                            <img className={"rounded"} src={iconUrl} height={"48"} width={"48"}
                                 style={{backgroundColor: iconBg}}/>
                            : <div className={"w-12 h-12"}/>}
                        <p className={"bttn1"}>{title}</p>
                        <p className={"b3 text-justify"}>{text}</p>
                    </div>
                </a>
            </div>
        )
    }

    return (
        <div className={"max-w-full justify-between py-6 lg:py-24 "} style={{backgroundColor: fields.bgColor}}>
            <div className="max-w-screen-xl my-8 mx-auto grid md:grid-cols-1 justify-center gap-x-3">
                <div className={"lg:grid lg:grid-cols-1 md:grid-cols-1 justify-center md:order-2 order-last pt-[68px] lg:col-start-8 "}>
                    <div className={"space-y-8"}>
                        {fields.cards.slice(0).reverse().map((card, index) => {
                                return (
                                    <Card key={card.contentID.toString()}
                                          title={card.fields.title}
                                          text={card.fields.text}
                                          textClr={card.fields.textColor}
                                          iconUrl={card.fields.icon ? card.fields.icon.url : ''}
                                          iconBg={card.fields.iconBackground}
                                          cardBg={card.fields.cardBackground}
                                          link = {card.fields?.link}
                                    />
                                )
                        })
                        }
                    </div>
                    <div className={"hidden w-full overflow-x-scroll mdplus:mx-auto"}>

                        {/*<Carousel>*/}

                        <div className={"flex flex-row space-x-3 pr-3"}>
                            {fields.cards.slice(0).reverse().map((card, index) => {
                                return (
                                    <div className={"w-[315px] first:ml-3 "}>
                                        <Card key={card.contentID.toString()}
                                              title={card.fields.title}
                                              text={card.fields.text}
                                              textClr={card.fields.textColor}
                                              iconUrl={card.fields.icon ? card.fields.icon.url : ''}
                                              iconBg={card.fields.iconBackground}
                                              cardBg={card.fields.cardBackground}
                                              link = {card.fields?.link}
                                        />
                                    </div>
                                )
                            })
                            }
                        </div>

                        {/*</Carousel>*/}

                    </div>
                    {/*<div className={"transform translate-y-12 space-y-8 md:hidden"}>*/}
                    {/*    {fields.cards.slice(0).reverse().map((card, index) => {*/}
                    {/*        if (index % 2 !== 0)*/}
                    {/*            return (*/}
                    {/*                <Card key={card.contentID.toString()}*/}
                    {/*                      title={card.fields.title}*/}
                    {/*                      text={card.fields.text}*/}
                    {/*                      textClr={card.fields.textColor}*/}
                    {/*                      iconUrl={card.fields.icon ? card.fields.icon.url : ''}*/}
                    {/*                      iconBg={card.fields.iconBackground}*/}
                    {/*                      cardBg={card.fields.cardBackground}*/}
                    {/*                />*/}
                    {/*            )*/}
                    {/*    })*/}
                    {/*    }*/}
                    {/*</div>*/}
                </div>
                <div className={"space-y-7 mx-auto md:py-10 md:mx-5 col-start-1 place-self-center w-full"}>
                    <div className={"lg:w-[800px] lg:h-[600px] rounded-xl lg:ml-[-66px]"}>
                        <img className={"rounded-xl lg:object-cover"} src={fields?.img?.url}/>
                    </div>
                    <h3 className={"md:text-primary-darkblue md:text-[40px] max-w-[700px] mx-auto md:mx-5"}
                        dangerouslySetInnerHTML={renderHTML(fields.title)}></h3>
                    <div className={" md:text-[16px] b1 max-w-[700px] md:mx-5 "} dangerouslySetInnerHTML={renderHTML(fields.text)}></div>
                    {listItems?.map((e, i) => {
                            if (e.length > 0)
                                return (
                                    <div key={i} className={"flex flex-auto space-x-6"}>
                                        <div className={" md:flex md:items-center md:content-center"}>
                                            <FaCheck className={"text-primary-blue md:items-center"}/>
                                        </div>
                                        <div>
                                            <p className={"b2 md:b1 md:text-[16px]"}>{e}</p>
                                        </div>
                                    </div>
                                )
                        }
                    )}
                    <a className={"flex bttn1 w-36 h-12 items-center bg-primary-blue rounded-full md:mx-5"}
                       href={fields?.button?.href}>
                        <p className={"mx-auto text-primary-white"}>{fields?.button?.text}</p>
                    </a>

                </div>
            </div>
        </div>
    );
};
export default CardsVertical