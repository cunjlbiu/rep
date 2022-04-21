import React from 'react'

const Subscriptions = ({module}) => {
    const {fields} = module
    console.log(fields)

    return(
        <div>
            <div className={"max-w-screen-xl md:w-[300px] mx-auto py-20"}>
                <div className={"flex md:flex-col md:space-y-6 justify-evenly"}>
                    <div className={"flex flex-col space-y-3"}>
                        <div className={"w-[300px] h-[200px] bg-agility"}> {fields.imageLeft ? <img src={fields.imageLeft.url} />: "put image there"}</div>
                        <div className={"self-center b3 text-primary-darkblue cursor-default "}>{fields.buttonLeft.text}</div>
                        <a href={fields.buttonLeft.href} target={fields.buttonLeft.target} className={"self-center"}>
                            <div className={"bttn1 bg-primary-blue hover:bg-primary-darkblue active:bg-primary-blue " +
                                "self-center cursor-pointer rounded-full h-10 w-32 py-1 text-center text-white"}>
                                Buy Now
                            </div>
                        </a>
                    </div>
                    <div className={"flex flex-col space-y-3"}>
                        <div className={"w-[300px] h-[200px] bg-agility text-white text-center"}> {fields.imageCenter ? <img src={fields.imageCenter.url} />: "image should be there"}</div>
                        <div className={"self-center b3 text-primary-darkblue cursor-default "}>{fields.buttonCenter.text}</div>
                        <a href={fields.buttonCenter.href} target={fields.buttonCenter.target} className={"self-center"}>
                            <div className={"bttn1 bg-primary-blue hover:bg-primary-darkblue active:bg-primary-blue " +
                                "self-center cursor-pointer rounded-full h-10 w-32 py-1 text-center text-white"}>
                                Buy Now
                            </div>
                        </a>

                    </div>
                    <div className={"flex flex-col space-y-3"}>
                        <div className={"w-[300px] h-[200px] bg-agility text-white text-center"}> {fields.imageRight ? <img src={fields.imageRight.url} />: "image should be there"}</div>
                        <div className={"self-center b3 text-primary-darkblue cursor-default "}>{fields.buttonRight.text}</div>
                        <a href={fields.buttonRight.href} target={fields.buttonRight.target} className={"self-center"}>
                            <div className={"bttn1 bg-primary-blue hover:bg-primary-darkblue active:bg-primary-blue " +
                                "self-center cursor-pointer rounded-full h-10 w-32 py-1 text-center text-white"}>
                                Buy Now
                            </div>
                        </a>

                    </div>
                </div>

            </div>


        </div>
    )

}

export default Subscriptions