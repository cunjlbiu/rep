import React from "react";
import { useState } from 'react';
import { useRouter } from 'next/router';

const Registration = ({module}) =>{
    const [userData, setUserData] = useState({
        FirstName: '',
        LastName:'',
        Email: '',
        Credentials__c: '',
    })
    const router = useRouter();

    const handleSubmit = async ()=> {
        for (let dat in userData){
           if (!userData[dat].length)
               return alert("No empty Fields!!!!")
        }
        const register =  await fetch('https://cinemedtest.vercel.app/api/SFRegister',{
            method: "POST",
            body: JSON.stringify(userData)
        })
        const res = await register.json();
        alert(res.success ? "SUCSESS!!!":res.Error)
        if (res.success){
            router.push('/login');
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({...userData, [name]: value });
    }

    return(
            <div className="max-w-screen-xl mx-auto" >
                <label >
                    <p> FirstName:</p>
                    <input className={"bg-gray-700 text-white mx-auto"} type="text" name="FirstName" onChange={e => handleChange(e)} />
                </label>
                <br />
                <label >
                    <p>LastName:</p>
                    <input className={"bg-gray-700 text-white mx-auto"} type="text" name="LastName" onChange={e => handleChange(e)} />
            </label>
                <br />
            <label>
                <p>E-mail:</p>
                <input className={"bg-gray-700 text-white mx-auto"} type="text" name="Email" onChange={e => handleChange(e)} />
            </label>
            <br />
            <label>
                <p>Password:</p>
                <input className={"bg-gray-700 text-white mx-auto"} type="password" name="Credentials__c" onChange={e => handleChange(e)} />
            </label>
            <br />

            <button className={"font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 w-56 my-2"} onClick={handleSubmit}>Register</button>
            </div>
    )
}
export default Registration