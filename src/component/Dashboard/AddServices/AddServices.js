import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router';

const AddServices = () => {
    const { register, handleSubmit, errors } = useForm();
    const [services, setServices] = useState({})

    const onSubmit = data => {
        console.log(data);

        fetch("https://cryptic-lake-39562.herokuapp.com/AddServices", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
            }
        })

    }


    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: -12, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add New Services </h5>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-2">
                        <input type="text" {...register("name",{required: true})} name="name" placeholder="Services Heading ...." className="form-control" />
                    </div>
                    <div className="form-group mb-2">
                        <input type="number" {...register("price", { required: true })} name="price" placeholder="Add Service Price" className="form-control" />
                    </div>
                    <div className="form-group mb-2">
                        <textarea type="text" {...register("desc", { required: true })} name="desc" placeholder="add Description" className="form-control" />
                    </div>
                    <div className="form-group text-right mb-2">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddServices;