import Head from 'next/head'
import {useContext, useState, useEffect} from 'react'
import Link from "next/link";
import AuthContext from "../context/AuthContext";
import {API_URL} from "../utils/urls";

const useOrders = (user, getToken) => {
    const [orders, setOrders] = useState([])

    useEffect(() =>{
        const fetchOrders = async ()=>{
            if(user){
                try {
                    const token = await getToken()
                    const order_res = await fetch(`${API_URL}/orders`,{
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    const data = await order_res.json()
                    setOrders(data)
                }
                catch (err){
                    setOrders([])
                }
            }
        }
        fetchOrders()
        },[user])
    return orders
}

export default function Account(){

    const {user, logoutUser, getToken} = useContext(AuthContext)

    const orders = useOrders(user, getToken)
    console.log("Account.render orders", orders)

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
            <h3>Your Orders</h3>
            {orders.map(order=>(
                <div key={order.id}>
                    {new Date(order.createdAt).toLocaleDateString('en-MY')} {order.bs_product.name} ${order.total} {order.status}
                </div>
            ))}
            <hr/>
            <p>Logged in as: {user.email}</p>
            <a href="#" onClick={logoutUser}>Logout</a>
        </div>
    )
}
