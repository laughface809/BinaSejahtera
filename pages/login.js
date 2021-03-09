import Head from 'next/head'
import {useContext} from 'react'
import AuthContext from "../context/AuthContext";

export default function Login(){

    const [email, setEmail] = useState("")
    return(
        <div>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login disini untuk melakukan pembelian"/>
            </Head>

            <h2>Login</h2>
            <form>
                <input type="email"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
