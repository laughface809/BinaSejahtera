import Link from "next/link";
import {useRouter} from "next/router";

import styles from '../styles/Header.module.css'

export default () => {

    const router = useRouter()
    const isHome = router.pathname === "/"

    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return(
        <div className={styles.nav}>
            {!isHome &&
                <div>
                    <a href="#" onClick={goBack}> {"<"} Back </a>
                </div>
            }
            <div className={styles.title}>
                <Link href="/">
                    <h1>
                        Bina Sejahtera
                    </h1>
                </Link>
            </div>
        </div>
    )
}
