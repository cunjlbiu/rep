import React from "react"

const HorizontalCards = ({module}) => {
    const {fields} = module;
    const Card = ({iconUrl, title, text, iconBg}) => {
        return(
            <div className={"border-2 border-agility w-80 card py-5 px-8 space-y-3 rounded-2xl  md:w-full h_cards"}>
                {iconUrl ?
                    <img className={"rounded"} src={iconUrl} height={"48"} width={"48"} style={{backgroundColor: iconBg}} />
                    : ''}
                <p className={"c1"}>{title}</p>
                <p className={"b3 text-justify"}>{text}</p>
            </div>
        )
    }
    if (fields.cards == null) return (null)
    return(
        <div className={"flex flex-col justify-center space-y-5 py-12 md:py-0 md:px-[20px]"}>
            { fields.title ?
                <div className={"flex justify-center"}>
                    <h3>{fields.title}</h3>
                </div> : ''}

            <div className={"flex justify-center space-x-6 md:flex-col"}>
                {fields.cards.slice(0).reverse().map((card, index) => {
                        return(
                            <Card key={card.contentID.toString()}
                                  title={card.fields.title}
                                  text={card.fields.text}
                                  iconUrl={card.fields.icon ? card.fields.icon.url : ''}
                                  iconBg={card.fields.iconBackground}
                            />
                        )
                })
                }
            </div>
        </div>

    );

}
export default HorizontalCards