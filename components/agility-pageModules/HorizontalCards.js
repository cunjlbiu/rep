import React from "react"
import {renderHTML} from "@agility/nextjs";
import {BsArrowRightShort} from "react-icons/bs";

const HorizontalCards = ({module}) => {
    const {fields} = module;
    const Card = ({iconUrl, title, text, iconBg, link}) => {
        return(
            <div className={"border-2 border-agility w-80 card py-5 px-8 space-y-3 rounded-2xl  md:w-full h_cards"}>
                {iconUrl ?
                    <img className={"rounded"} src={iconUrl} height={"48"} width={"48"} style={{backgroundColor: iconBg}} />
                    : ''}
                <p className={"c2"}>{title}</p>
                <p className={"b3 text-justify"}>{text}</p>
                {link ? <a className={"flex"} href={link.href} target={link.target}>
                    <p className={"bttn2 text-primary-darkblue"}>{link.text}</p>
                    <BsArrowRightShort className={"text-primary-darkblue w-[24px] h-[24px]"}/>
                </a> :""}
            </div>
        )
    }
    if (fields.cards == null) return (null)
    return(
        <div className={"flex flex-col justify-center py-12 md:py-0 md:px-[20px]"}>
            { fields.title ?
                <div className={"flex justify-center mb-6 text-primary-darkblue"}>
                    <h3>{fields.title}</h3>
                </div> : ''}
            { fields.text ?
                <div className={"flex justify-center text-primary-darkblue mb-12"} dangerouslySetInnerHTML={renderHTML(fields.text)}/>
                : ''}

            <div className={"flex justify-center space-x-6 md:flex-col"}>
                {fields.cards.slice().map((card, index) => {
                        return(
                            <Card key={card.contentID.toString()}
                                  title={card.fields.title}
                                  text={card.fields.text}
                                  iconUrl={card.fields.icon ? card.fields.icon.url : ''}
                                  iconBg={card.fields.iconBackground}
                                  link = {card.fields?.link}
                            />
                        )
                })
                }
            </div>
            <div className={"lg:hidden flex-row items-center space-x-4 my-6 md:justify-center"
                            +` ${fields.button ? (fields.button.text ? "flex" : "hidden") : "hidden"}`}>
                <a className={"flex bttn1 w-36 h-12 items-center bg-primary-blue rounded-full"} href={fields.button ? fields.button.href : ""}>
                    <p className={"mx-auto text-primary-white md:text-[14px]"}>{fields.button ? fields.button.text : ""}</p>
                </a>
            </div>
        </div>


    );

}
export default HorizontalCards