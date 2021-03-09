import {createContext} from 'react'
import {useRouter} from "next/router";

const AuthContext = createContext()

export const AuthProvider = (props) => {

    const [user, setUser]

    return(
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>

    )
}

export default AuthContext
