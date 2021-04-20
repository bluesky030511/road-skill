import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit, errors } = useForm();
    const [review, setReview] = useState({})

    const onSubmit = data => {
        // console.log(data);

        fetch("https://cryptic-lake-39562.herokuapp.com/AddReview", {
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
                <h5 className="text-brand">Please Describe Your Opinion With Us !! </h5>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-2">
                        <input type="text" {...register("name",{required: true})} name="name" placeholder="Add Here Your Name ...." className="form-control" />
                    </div>
                    <div className="form-group mb-2">
                        <input type="text" {...register("job", { required: true })} name="job" placeholder="Your Ocupation ..." className="form-control" />
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

export default Review;