import React, {useState} from "react"


const Card = ({iconUrl, title, text, iconBg, cardBg, textClr, imgPos}) => {
    return(
        <div className={"border-2 md:w-[335px] lg:mb-[29px]  border-agility card p-4 pr-10 space-y-2 rounded-xl max-w-md " +
            "last:odd:max-w-max flex-grow lg:h-40 inline-block lg:justify-center align-middle "+`${imgPos == "right" ? "mr-4" : "ml-4"}` } style={{backgroundColor: cardBg, color: textClr}}>
            {iconUrl ?
                <img className={"rounded"} src={iconUrl} height={"48"} width={"48"} style={{backgroundColor: iconBg}} />
                : <div className={"w-12 h-12"}/>}
            <p className={"bttn1"}>{title}</p>
            <p className={"b3 text-justify "}>{text}</p>
        </div>
    )
}

const CardsBlock = ({cards,Pos})=>{
    return(
    cards.slice(0).reverse().map((card) => {
        return(
            <Card key={card.contentID.toString()}
                  title={card.fields.title}
                  text={card.fields.text}
                  textClr={card.fields.textColor}
                  iconUrl={card.fields.icon ? card.fields.icon.url : ''}
                  iconBg={card.fields.iconBackground}
                  cardBg={card.fields.cardBackground}
                  imgPos={Pos}
            />
        )
    })
    )
}



const CardsWithImage = ({module}) =>{
    const {fields} = module
    const [pos,setPos] = useState(fields.imagePosition)

    return(
       <div className={"lg:max-w-screen-xl mx-auto md:mx-5 "}>
           <h1 className={"my-16 mobile"}>{fields.title}</h1>
           <div className={"c1 pb-1 relative z-50 translate-y-6 "}>{fields.caption}</div>
           <div className={"lg:grid lg:grid-cols-2 space-y-4 " + `${fields.imagePosition == "right" ? 'space-x-0' : 'space-x-0' }`}>
               <div className={`lg:-translate-y-12 ${fields.imagePosition == "right" ? 'order-last ml-4' : 'mr-4' }`}>
                   <img className={"rounded-xl"} src={fields.image.url}/>
               </div>
               <div className={"flex flex-wrap lg:justify-center md:justify-center lg:content-center " + `${fields.imagePosition == "right" ? '' : '' }`}>
               <CardsBlock cards={fields.cards} Pos={fields.imagePosition}/>
               </div>

           </div>

       </div>
    );

}

export default CardsWithImage;