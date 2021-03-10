import Head from 'next/head'
import {useContext} from 'react'
import Link from "next/link";
import AuthContext from "../context/AuthContext";

export default function Account(){

    const {user, logoutUser} = useContext(AuthContext)

    if(!user){
        return (
            <div>
                <p>Please Login or Register First</p>
                <Link href="/"><a>Go back</a></Link>
            </div>
        )
    }

    return(
        <div>
            <Head>
                <title>Account Page</title>
                <meta name="description" content="halaman account, melihat order yang kamu buat dan logout"/>
            </Head>

            <h2>Account Page</h2>
            <a href="#" onClick={logoutUser}>Logout</a>
        </div>
    )
}
