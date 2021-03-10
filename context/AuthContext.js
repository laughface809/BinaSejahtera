import {createContext, useState, useEffect} from 'react'
import {useRouter} from "next/router";
import {Magic} from 'magic-sdk'
import {MAGIC_PUBLIC_KEY} from "../utils/urls";

const AuthContext = createContext()

let magic
export const AuthProvider = (props) => {

    const [user, setUser] = useState(null)
    const router = useRouter()

    /**
     * Add email user
     * @param {string} email
     */
    const loginUser = async (email) =>{
        try {
            await magic.auth.loginWithMagicLink({email})
            setUser({email})
            router.push('/')
        }
        catch (err){
            setUser(null)
        }
    }

    /**
     *Set user null
     */
    const logoutUser = async()=>{
        try {
            await magic.user.logout()
            setUser(null)
            router.push('/')
        }
        catch (err){

        }
    }

    const checkUserLoggedIn = async () =>{
        try {
            const isLoggedIn = await magic.user.isLoggedIn()
            if(isLoggedIn){
                const {email} = await magic.user.getMetadata()
                setUser({email})

                //test consolo log
                const token = await  getToken()
                console.log("checkUserLoggedIn token", token)
            }
        }
        catch (err){

        }
    }

    /**
     * retriev the magic issues bearer token
     * this allow user to make otentkasi request
     */

    const getToken = async () => {
        try {
            const token = await magic.user.getIdToken()
            return token
        }
        catch (err){

        }
    }

    useEffect(() => {
        magic = new Magic(MAGIC_PUBLIC_KEY)
        checkUserLoggedIn()
        }, []
    )

    return(
        <AuthContext.Provider value={{ user, loginUser, logoutUser}}>
            {props.children}
        </AuthContext.Provider>

    )
}

export default AuthContext
