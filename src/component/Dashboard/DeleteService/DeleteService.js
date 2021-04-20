import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const DeleteService = () => {
    const [deleteItem, setDeleteItem] = useState([])
    useEffect(() => {
        fetch("https://cryptic-lake-39562.herokuapp.com/Services")
            .then(res => res.json())
            .then(data => setDeleteItem(data))

    }, [])

    const handleDelete =(id) =>{
        fetch(`https://cryptic-lake-39562.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            console.log("Deleted")
        })
    }
    return (
        <div>
            <div className="me-5">
                {/* <Sidebar></Sidebar> */}
            </div>
            <div class="wrapper mr-5">
                <h3 class="form-signin-heading">Mange products:</h3>

                <hr />
                {
                    deleteItem.map(item => <h5 class="m-1 border-bottom">{item.name} <button className="btn btn-danger btn-sm m-2" onClick={() => handleDelete(item._id)}> Delete</button></h5>)
                }
            </div>
        </div>
    );
};
// onClick={() => handleDelete(product._id)} 

export default DeleteService;