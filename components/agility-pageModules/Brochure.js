import React from "react";
import {renderHTML} from "@agility/nextjs";

const Brochure = ({module})=>{
    const emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    const {fields} = module;
    async function FormButton(e){
        // e.preventDefault()
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json','Accept': 'application/json', },
        //     body: JSON.stringify({ email: 'test@test.test' })
        // };
        // const response = await fetch('https://info.cine-med.com/l/930733/2022-08-01/8zw75', requestOptions);
        // const data = await response.json();
        // console.log(response)
        // alert(data);
    }


    return(
        <div className={"py-5"} style={{
            background:fields.bgColor,
            backgroundImage:`url(/assets/circles.svg)`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"85%"
        }}>
            <div className={"mdplus:flex max-w-screen-xl mdplus:space-x-16 space-y-5 mdplus:space-y-0 mx-auto py-12"}>
                <div className={"max-w-[530px] space-y-6 justify-center self-center"}>
                    <h2>
                        {fields.title}
                    </h2>
                    <div dangerouslySetInnerHTML={renderHTML(fields.text)}/>
                </div>
                    <div className={"w-[640px] bg-primary-white py-5 rounded-xl"}>
                        <form className={"grid grid-flow-row  justify-center gap-4 md:flex md:flex-col md:items-center"}
                              action={fields.bLabel.href}
                              method={"post"}
                              target={fields.bLabel.target}
                              onSubmit={e=>FormButton(e)}>
                            <label className={"md:min-w-[335px] md:w-full"}><br/>
                                <input id={"firstName"} name={"firstName"} placeholder={"First name"}
                                       className={"contactForm w-[416px] md:min-w-[335px] md:w-full"} required={true}
                                       style={{background:'#FFF'}}/>
                                <span className={"b3"}>Full Name</span>
                            </label>

                            <label className={"b3 md:min-w-[335px] md:w-full"}><br/>
                                <input id={"organization"} name={"organization"} placeholder={"Last Name"}
                                       className={"contactForm w-[416px] md:min-w-[335px] md:w-full"} required={true}
                                style={{background:'#FFF'}}/>
                                <span className={"b3"}>Organization</span>
                            </label>

                            <label className={"md:min-w-[335px] md:w-full"}><br/>
                                <input id={"email"} name={"email"} placeholder={"Email"}
                                       className={"contactForm w-[416px] md:min-w-[335px] md:w-full"} type={"email"}
                                       required={true}
                                       pattern={emailPattern}
                                       style={{background:'#FFF'}}/>
                                <span className={"b3"}>Email</span>
                            </label>
                            <div className={" flex md:pb-[40px]"}>
                                {/*<a className={'flex bttn1 px-4 py-2 h-12 md:font-semibold md:text-[14px]  bg-primary-blue rounded-full justify-center text-primary-white active:scale-90'}*/}
                                {/*    href={"assets/CineMed-Brochure.pdf"}*/}
                                {/*    download*/}
                                {/*    target={"_blank"}>*/}
                                {/*    {fields.bLabel}*/}
                                {/*</a>*/}
                                <input type={"submit"}
                                       value={fields.bLabel.text}
                                       className={'flex bttn1 px-4 py-2 h-12 md:font-semibold md:text-[14px]  bg-primary-blue rounded-full justify-center text-primary-white active:scale-90'}/>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}
export default Brochure;