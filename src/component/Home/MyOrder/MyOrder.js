import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Placed from '../../Home/Placed/Placed';

const MyOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://cryptic-lake-39562.herokuapp.com/clientOrder?email=' + loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h1>Your Placed Order {orders.length}</h1>
          
            {
                orders.map(order => <Placed order={order} key={order._id}></Placed> )
            }
        </div>
    );
};

export default MyOrder;



