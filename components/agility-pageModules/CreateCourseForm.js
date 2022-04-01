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
    const [t, setT] = useState(null)
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);}

    const courseTypes = [{value: 'Online', label: 'Online', online:true},
        {value: 'In person', label: 'In person', online:false}]


    const formats = [
        {value: 'Virtual Event', label: 'Virtual Event', online: true},
        {value: 'Webinar', label: 'Webinar', online: true},
        {value: 'eLearning', label: 'eLearning', online: true},
        {value: 'Clinical Video', label: 'Clinical Video', online: true},
        {value: 'Product Short', label: 'Product Short', online: true},
        {value: 'Podcast', label: 'Podcast', online: true},
        {value: 'Conference', label: 'Conference', online: false},
        {value: 'Master Class', label: 'Master Class', online: false},
        {value: 'Symposia', label: 'Symposia', online: false},
        {value: 'Ground Rounds', label: 'Ground Rounds', online: false},

    ]

    const budgets = [
        {value: 'Up tp $499', label: 'Up tp $499'},
        {value: '$500 - $999$', label: '$500 - $999$'},
        {value: '1,000+', label: '1,000+'}]


    return(
        <div className={""}>
            <div className={"max-w-screen-xl mx-auto grid grid-cols-2"}>
                <div>
                    <div className={"w-[640px]"}>
                        <caption className={"c3 text-primary-blue w-max"}>Create a course</caption>
                        <h1>CineMed is the industry leader
                            in healthcare.</h1>
                        <p className={"b1 pl-12 border-primary-blue left-border my-6 w-[506px]"}>From inception to execution and delivery, CineMed is the industry leader in healthcare education. Specify your learning objectives and delivery style, and let us do the rest!</p>
                    </div>
                </div>
                <form className={"grid grid-cols-2 bg-primary-white"} action="https://info.cine-med.com/l/930733/2022-03-15/3kcqh" method="post">


                    <label className={"bg-primary-white w-[304px]"}><br/>
                        <input id={"firstName"} name={"firstName"} placeholder={"First name"} className={"contactForm w-[304px] "} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>First name</span>
                    </label>

                    <label className={"b3 w-[304px]"}><br/>
                        <input id={"lastName"}  name={"lastName"} placeholder={"Last Name"} className={"contactForm w-[304px]"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>Last name</span>
                    </label>
                    <label className={"b3 w-[304px]"}>Phone
                        <PhoneInput inputClass={"contactForm"}
                                    buttonClass={"contactFormFlag"}
                                    required={true}
                                    inputProps={{name : "phone"}}
                                    country={"us"}
                                    inputStyle={{backgroundColor:"white", width:"304px"}}
                                    containerStyle={{backgroundColor:"white", width:"304px"}}
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

                    <label className={" w-[304px] "}><br/>
                        <input id={"email"} name={"email"} placeholder={"Email"} className={"contactForm w-[304px]"} type={"email"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>Email</span>
                    </label>


                    <label className={"b3 pt-4 w-[304px]"}>

                        <Select
                            options={courseTypes}
                            name={"courseType"}
                            onChange={(option)=>setT(option.online)}
                            placeholder="Course type"
                            classNamePrefix="react-select-create"
                            styles ={{
                                indicatorSeparator: (styles) => ({display:'none'})
                            }}
                        />
                    </label>

                    <label className={"b3 pt-4 w-[304px]"}>

                        <Select
                            options={formats}
                            isOptionDisabled={(option) => option.online != t}
                            name={"courseFormat"}
                            placeholder="Format"
                            classNamePrefix="react-select-create"
                            styles ={{
                                indicatorSeparator: (styles) => ({display:'none'})
                            }}
                        />
                    </label>

                    <label className={"bg-primary-white col-span-2 w-[640px]"}><br/>
                        <input id={"speakers"} name={"courseSpeakers"} placeholder={"Speakers"} className={"contactForm w-[640px]"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>Speakers</span>
                    </label>

                    <label className={"bg-primary-white col-span-2 w-[640px] "}><br/>
                        <input id={"topics"} name={"courseTopics"} placeholder={"Topics"} className={"contactForm w-[640px]"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>Topics</span>
                    </label>

                    <label className={"b3"}><br/>
                        <DatePicker
                            name={"porposedDates"}
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="MM.dd.yyyy"
                            selectsRange
                            monthsShown={2}
                            showDisabledMonthNavigation
                            className={"datePicker"}
                            calendarClassName={"datePickerMonth"}
                        />
                        <input className={"hidden "}/>
                        <span className={"b3"}>Proposed dates</span>
                    </label>


                    <div className={"bg-primary-white -translate-y-4 space-x-2 b3 space-y-2 "}><br/>
                        Are these dates flexible? <br/>
                        <input id={"firstName"} name={"flexible"} type={"radio"}  style={{background:"white"}} value={"Yes"}/> Yes
                        <input id={"firstName"} name={"flexible"} type={"radio"}  style={{background:"white"}} value={"No"}/> No
                    </div>

                    <label className={"bg-primary-white w-[304px]"}><br/>
                        <input id={"locations"} name={"location"} placeholder={"Locations"} className={"contactForm w-[304px]"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>Location</span>
                    </label>

                    <label className={"b3 pt-5 w-[304px]"}>

                        <Select
                            options={budgets}
                            name={"budget"}
                            placeholder="Budget"
                            classNamePrefix="react-select-create"
                            styles ={{
                                indicatorSeparator: (styles) => ({display:'none'})
                            }}
                        />
                    </label>

                    <label className={"bg-primary-white col-span-2 w-[640px] "}><br/>
                        <input id={"description"} name={"description"} placeholder={"description"} className={"contactForm w-[640px]"} style={{background:"white"}} required={true}/>
                        <span className={"b3"}>Course description</span>
                    </label>
                    <input type={"submit"} value={"Send message"} required={true} className={'flex bttn1 w-36 h-12 bg-primary-blue rounded-full justify-center text-primary-white active:scale-90'}/>



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