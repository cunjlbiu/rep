import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const resttest = ({module}) =>{
    const {fields} = module;
    const { data: session } = useSession()
    if (session) {
        console.log(session.user)
        return (
            <div className="max-w-screen-xl mx-auto">
                Signed in as {session.user.name} <br />
                <button className={"font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 w-56 my-2"} onClick={() => signOut()}>Sign out</button>
            </div>
        )
    }
    return (
        <div className="max-w-screen-xl mx-auto">
            Not signed in <br />
            <button className={"font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 text-xl my-2"} onClick={() => signIn()}>Sign in</button><br />
            <Link href="/registration"><a className={"font-medium text-xl rounded-md rounded-md text-white bg-gray-900 hover:bg-gray-700 my-2"}>Sign Up</a></Link>
        </div>
    )
}
export default resttest;