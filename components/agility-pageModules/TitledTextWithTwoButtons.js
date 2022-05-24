import React from "react"

const TitledTextWithTwoButtons = ({module}) => {
    const {fields} = module

    return (

        <div className={""}>
            <div
                className={"max-w-screen-xl lg:mx-auto flex flex-col content-center md:mx-5 space-y-8 my-12 md:py-12 lg:py-24 rounded-2xl"}
                style={{backgroundColor: fields?.bgColor, backgroundSize:`contain`,backgroundRepeat:`no-repeat`,backgroundImage:`url(${fields?.bgImage?.url})`}}>
                <h3 className={"self-center text-center md:px-[20px]"}>{fields.title}</h3>
                <p className={"b1 lg:w-[640px] text-center self-center md:px-[20px]"}>{fields.text}</p>
                <div className={"flex flex-row justify-center space-x-5"}>
                    <a href={fields?.leftButton?.href}
                       className="bttn1 text-white w-[134px] h-[56px] rounded-full
                       border-primary-blue border-2 bg-primary-white text-primary-blue text-center py-3 self-center "
                       target={fields?.leftButton?.target}
                    >
                        {fields?.leftButton?.text}
                    </a>
                    <a href={fields?.rightButton?.href}
                       className="bttn1 text-white w-[134px] h-[56px] rounded-full
                       bg-primary-blue text-center py-3 self-center "
                       target={fields?.rightButton?.target}
                    >
                        {fields?.rightButton?.text}
                    </a>
                </div>

            </div>
        </div>
    )
}
export default TitledTextWithTwoButtons