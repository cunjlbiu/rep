import React, {useState} from "react"
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const ContactForm = ({module}) => {
    const {fields} = module;
    const [subSpec, setSubSpec] = useState('')
    const Specialities = fields.specialities.split('</p>').map((e) => {
            let elem = e.slice(e.indexOf('<p>') + 3)
            return {value: elem, label: elem, disabled: false, subDisabled: false}
        }
    );
    const onSelect = (value) => {
        for (let k of Specialities)
            k.disabled = false;
        value.disabled = true;
        setSubSpec(value.label);
    }
    const onSubSelect = (value) => {
        for (let k of Specialities)
            k.subDisabled = false;
        value.subDisabled = true;
    }
    const emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"



    return (
        <div className={"bg-soft-blue pb-24 md:pb-12"}>
            <div className={"max-w-screen-xl mx-auto bg-soft-blue md:px-5"}>
                <form className={"grid grid-flow-row  justify-center gap-4 md:flex md:flex-col md:items-center"}
                      action="http://info.cine-med.com/l/930733/2022-02-04/2dj4r" method="post">


                    <label className={"md:min-w-[335px] md:w-full"}><br/>
                        <input id={"firstName"} name={"firstName"} placeholder={"First name"}
                               className={"contactForm w-[416px] md:min-w-[335px] md:w-full"} required={true}/>
                        <span className={"b3"}>First name</span>
                    </label>

                    <label className={"b3 md:min-w-[335px] md:w-full"}><br/>
                        <input id={"lastName"} name={"lastName"} placeholder={"Last Name"}
                               className={"contactForm w-[416px] md:min-w-[335px] md:w-full"} required={true}/>
                        <span className={"b3"}>Last name</span>
                    </label>

                    <label className={"md:min-w-[335px] md:w-full"}><br/>
                        <input id={"email"} name={"email"} placeholder={"Email"}
                               className={"contactForm w-[416px] md:min-w-[335px] md:w-full"} type={"email"}
                               pattern={emailPattern}
                               required={true}/>
                        <span className={"b3"}>Email</span>
                    </label>

                    <label className={"b3 md:min-w-[335px] md:w-full"}>Phone
                        <PhoneInput inputClass={"contactForm"}
                                    buttonClass={"contactFormFlag"}
                                    required={true}
                                    inputProps={{name: "phone"}}
                                    country={"us"}
                                    inputStyle={{backgroundColor: "#F0F9FF", width: "100%"}}
                                    containerStyle={{backgroundColor: "#F0F9FF", width: "100%"}}
                                    buttonStyle={{backgroundColor: "#F0F9FF !important;"}}
                                    isValid={(value, country) => {
                                        if (value.match(/12345/)) {
                                            return 'Invalid value: ' + value + ', ' + country.name;
                                        } else if (value.match(/1234/)) {
                                            return false;
                                        } else {
                                            return true;
                                        }
                                    }}
                        />
                    </label>


                    <label className={"md:min-w-[335px] md:w-full"}><br/>
                        <input id={"companyName"} name={"companyName"} placeholder={"Company name"}
                               className={"contactForm w-[416px]"} required={true}/>
                        <span className={"b3"}>Company Name</span>
                    </label>


                    <label className={"b3 md:min-w-[335px] md:w-full"}><br/>
                        <input id={"position"} name={"position"} placeholder={"Position"}
                               className={"contactForm w-[416px]"} required={true}/>
                        <span className={"b3"}>Position</span>
                    </label>

                    <div
                        className={"col-span-2 md:min-w-[335px] md:flex md:flex-col md:w-full justify-center grid space-y-1"}>
                        <label className={"b3 pt-4"}>
                            <Select options={Specialities}
                                    aria-required={"true"}
                                    isOptionDisabled={(option) => option.subDisabled}
                                    name={"speciality"}
                                    onChange={(v) => onSelect(v)}
                                    placeholder="Primary Specialty"
                                    classNamePrefix="react-select"
                                    styles={{
                                        indicatorSeparator: (styles) => ({display: 'none'})
                                    }}
                            />
                            <input className={"absolute w-[1px] h-[1px] top-3/5 left-1/3 opacity-0"} tabIndex={-1}
                                   required={true} value={subSpec} autoComplete={"off"}/>
                        </label>

                        <label className={"b3 pt-4 md:min-w-[335px] md:w-full"}>
                            <Select options={Specialities}
                                    isOptionDisabled={(option) => option.disabled}
                                    onChange={(v) => onSubSelect(v)}
                                    name={"subSpeciality"}
                                    placeholder="Secondary Specialty"
                                    classNamePrefix="react-select"
                                    styles={{
                                        indicatorSeparator: (styles) => ({display: 'none'})
                                    }}
                            />
                        </label>

                        <label className={"b3 message"}><br/>
                            <input type="text"
                                   className={"contactForm w-[864px] md:min-w-[335px] md:w-full md:mt-[24px]"}
                                   placeholder={"If you need support for a specific event, please include the name and URL of that event."}
                                   name={"message"}
                                   id={"message"}
                            />
                            <span className={"b3 placeholder"}>If you need support for a specific event, please include the name and URL of that event.</span>
                            <span className={"b3 message"}>Message</span>
                        </label>
                        <div className={" flex justify-end w-full  py-5 md:pb-[40px]"}>
                            <input type={"submit"} value={"Send message"} required={true}
                                   className={'flex bttn1 w-36 h-12 md:font-semibold md:text-[14px]  bg-primary-blue rounded-full justify-center text-primary-white active:scale-90'}/>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}
export default ContactForm;