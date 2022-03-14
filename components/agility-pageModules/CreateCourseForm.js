import React, {useState} from "react"
import Select from "react-select";
import DatePicker from "react-datepicker"
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import "react-datepicker/dist/react-datepicker.css";
const CreateCourseForm =({module}) =>{
    const {fields} = module;
    const [subSpec, setSubSpec] = useState(true)
    // const Specialities = fields.specialities.split('</p>').map((e) =>{
    //         let elem = e.slice(e.indexOf('<p>')+3)
    //         return {value: elem, label: elem, disabled: false, subDisabled: false}
    //     }
    // );
    // const onSelect =(value) =>{
    //     for ( let k of Specialities)
    //         k.disabled = false;
    //     value.disabled = true;
    // }
    // const onSubSelect =(value) =>{
    //     for ( let k of Specialities)
    //         k.subDisabled = false;
    //     value.subDisabled = true;
    // }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);}


    return(
        <div className={""}>
            <div className={"max-w-screen-xl mx-auto grid grid-cols-2"}>
                <div>234234234234</div>
                <form className={"grid grid-flow-row  justify-center gap-4 bg-primary-white"} action="" method="post">


                    <label className={"bg-primary-white"}><br/>
                        <input id={"firstName"} name={"firstName"} placeholder={"First name"} className={"contactForm"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>First name</span>
                    </label>

                    <label className={"b3"}><br/>
                        <input id={"lastName"}  name={"lastName"} placeholder={"Last Name"} className={"contactForm"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>Last name</span>
                    </label>
                    <label className={"b3"}>Phone
                        <PhoneInput inputClass={"contactForm"}
                                    buttonClass={"contactFormFlag"}
                                    required={true}
                                    inputProps={{name : "phone"}}
                                    country={"us"}
                                    inputStyle={{backgroundColor:"white"}}
                                    containerStyle={{backgroundColor:"white"}}
                                    buttonStyle={{backgroundColor:"white"}}
                                    isValid={(value, country) => {
                                        if (value.match(/12345/)) {
                                            return 'Invalid value: '+value+', '+country.name;
                                        } else if (value.match(/1234/)) {
                                            return false;
                                        } else {
                                            return true;
                                        }
                                    }}
                        />
                    </label>

                    <label className={""}><br/>
                        <input id={"email"} name={"email"} placeholder={"Email"} className={"contactForm"} type={"email"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>Email</span>
                    </label>


                    <label className={"b3 pt-4"}>

                        <Select
                            isOptionDisabled={(option) => option.subDisabled}
                            name={"speciality"}
                            onChange ={(v)=> onSelect(v)}
                            placeholder="Primary Specialty"
                            classNamePrefix="react-select-create"
                            styles ={{
                                indicatorSeparator: (styles) => ({display:'none'})
                            }}
                        />
                    </label>

                    <label className={"b3 pt-4"}>

                        <Select
                            isOptionDisabled={(option) => option.subDisabled}
                            name={"speciality"}
                            onChange ={(v)=> onSelect(v)}
                            placeholder="Primary Specialty"
                            classNamePrefix="react-select-create"
                            styles ={{
                                indicatorSeparator: (styles) => ({display:'none'})
                            }}
                        />
                    </label>

                    <label className={"bg-primary-white col-span-2"}><br/>
                        <input id={"firstName"} name={"firstName"} placeholder={"First name"} className={"contactForm select"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>First name</span>
                    </label>

                    <label className={"bg-primary-white col-span-2"}><br/>
                        <input id={"firstName"} name={"firstName"} placeholder={"First name"} className={"contactForm select"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>First name</span>
                    </label>

                    <label className={"b3"}><br/>
                        <DatePicker
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="dd.MM.yyyy"
                            selectsRange
                            monthsShown={2}
                            showDisabledMonthNavigation
                            className={"datePicker"}
                            calendarClassName={"datePickerMonth"}
                        />
                        <input className={"hidden "}/>
                        <span className={"b3"}>Position</span>
                    </label>


                    <label className={"bg-primary-white"}><br/>
                        <input id={"firstName"} name={"firstName"} placeholder={"radio group will be there"} className={"contactForm"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>radio group will be there</span>
                    </label>

                    <label className={"bg-primary-white"}><br/>
                        <input id={"firstName"} name={"firstName"} placeholder={"First name"} className={"contactForm"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>First name</span>
                    </label>

                    <label className={"b3 pt-5"}>

                        <Select
                            isOptionDisabled={(option) => option.subDisabled}
                            name={"speciality"}
                            onChange ={(v)=> onSelect(v)}
                            placeholder="Primary Specialty"
                            classNamePrefix="react-select-create"
                            styles ={{
                                indicatorSeparator: (styles) => ({display:'none'})
                            }}
                        />
                    </label>

                    <label className={"bg-primary-white col-span-2"}><br/>
                        <input id={"firstName"} name={"firstName"} placeholder={"First name"} className={"contactForm select"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>First name</span>
                    </label>



                    {/*<div className={"col-span-2 justify-center grid space-y-1"}>*/}

                    {/*    <label className={"b3"}><br/>*/}
                    {/*        <DatePicker*/}
                    {/*            selected={startDate}*/}
                    {/*            onChange={onChange}*/}
                    {/*            startDate={startDate}*/}
                    {/*            endDate={endDate}*/}
                    {/*            dateFormat="dd.MM.yyyy"*/}
                    {/*            selectsRange*/}
                    {/*            monthsShown={2}*/}
                    {/*            showDisabledMonthNavigation*/}
                    {/*            className={"datePicker"}*/}
                    {/*        />*/}
                    {/*        <input className={"hidden "}/>*/}
                    {/*        <span className={"b3"}>Position</span>*/}
                    {/*    </label>*/}


                    {/*    <label className={"b3 pt-4"}>*/}

                    {/*        <Select*/}
                    {/*                isOptionDisabled={(option) => option.subDisabled}*/}
                    {/*                name={"speciality"}*/}
                    {/*                onChange ={(v)=> onSelect(v)}*/}
                    {/*                placeholder="Primary Specialty"*/}
                    {/*                classNamePrefix="react-select-create"*/}
                    {/*                styles ={{*/}
                    {/*                    indicatorSeparator: (styles) => ({display:'none'})*/}
                    {/*                }}*/}
                    {/*        />*/}
                    {/*    </label>*/}
                    {/*    <label className={"b3 pt-4"}>*/}
                    {/*        <Select*/}
                    {/*                isOptionDisabled={(option) => option.disabled}*/}
                    {/*                onChange ={(v)=> onSubSelect(v)}*/}
                    {/*                name={"subSpeciality"}*/}
                    {/*                placeholder="Secondary Specialty"*/}
                    {/*                classNamePrefix="react-select-create"*/}
                    {/*                styles ={{*/}
                    {/*                    indicatorSeparator: (styles) => ({display:'none'})*/}
                    {/*                }}*/}
                    {/*        />*/}
                    {/*    </label>*/}

                    {/*    <label className={"b3 message"}><br/>*/}
                    {/*        <input type="text"*/}
                    {/*               className={"contactForm select"}*/}
                    {/*               placeholder={"If you need support for a specific event, please include the name and URL of that event."}*/}
                    {/*               name={"message"}*/}
                    {/*               style={{background:"white"}}*/}
                    {/*               id={"message"}*/}
                    {/*        />*/}
                    {/*        <span className={"b3"}>If you need support for a specific event, please include the name and URL of that event.</span>*/}
                    {/*        <span className={"b3 message"}>Message</span>*/}
                    {/*    </label>*/}
                    {/*    <div className={" flex justify-end w-full  py-5"}>*/}
                    {/*        <input type={"submit"} value={"Send message"} required={true} className={'flex bttn1 w-36 h-12 bg-primary-blue rounded-full justify-center text-primary-white active:scale-90'}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}







                </form>

            </div>

        </div>
    );
}
export default CreateCourseForm;