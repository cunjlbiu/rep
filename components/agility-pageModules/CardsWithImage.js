import React from "react"


const Card = ({iconUrl, title, text, iconBg, cardBg, textClr}) => {
    return(
        <div className={"border-2 md:w-[335px] mr-4 mb-4 border-agility card p-4 pr-10 space-y-3 rounded-xl max-w-md last:odd:max-w-max flex-grow lg:h-40 inline-block lg:justify-center align-middle "} style={{backgroundColor: cardBg, color: textClr}}>
            {iconUrl ?
                <img className={"rounded"} src={iconUrl} height={"48"} width={"48"} style={{backgroundColor: iconBg}} />
                : <div className={"w-12 h-12"}/>}
            <p className={"bttn1"}>{title}</p>
            <p className={"b3 text-justify "}>{text}</p>
        </div>
    )
}



const CardsWithImage = ({module}) =>{
    const {fields} = module



    return(
       <div className={"lg:max-w-screen-xl mx-auto md:mx-5 "}>
           <h1 className={"my-16 mobile"}>{fields.title}</h1>
           <div className={"c1 pb-1 "}>{fields.caption}</div>
           <div className={"lg:grid lg:grid-cols-2 space-y-4"}>
               <div className={`lg:-translate-y-20 ${fields.imagePosition == "right" ? 'order-last' : '' }`}>
                   <img className={"rounded-xl"} src={fields.image.url}/>
               </div>
               <div className={"flex flex-wrap lg:justify-center md:justify-center"}>

               {fields.cards.slice(0).reverse().map((card, index) => {

                       return(
                           <Card key={card.contentID.toString()}
                                 title={card.fields.title}
                                 text={card.fields.text}
                                 textClr={card.fields.textColor}
                                 iconUrl={card.fields.icon ? card.fields.icon.url : ''}
                                 iconBg={card.fields.iconBackground}
                                 cardBg={card.fields.cardBackground}
                           />
                       )
               })
               }
               </div>

           </div>

       </div>
    );

}

export default CardsWithImage;