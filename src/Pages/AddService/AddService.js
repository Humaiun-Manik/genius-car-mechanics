import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.post('https://pacific-bayou-95387.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    return (
        <div className='add-service'>
            <h2 className='text-center mt-5'>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <input type="number" {...register("price")} placeholder='Price' />
                <textarea {...register("description")} placeholder='Description' />
                <input {...register("img")} placeholder='Image url' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;