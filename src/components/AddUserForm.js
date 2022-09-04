import React from "react";
import { useForm } from 'react-hook-form';


export const AddUserForm = () => {

    const {handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(     
       <form className="w-50 p-3" onSubmit={handleSubmit(onSubmit)}>
            <label>name</label>
            <input type="text" name="name"  />
            
            <label>E-mail</label>
            <input type="email" name="email" />

            <label>Genre</label>
                <select name="genre">
                <option defaultValue={"male"} >male</option>
                <option defaultValue={"female"}>female</option>
            </select>

           
            <label>Status</label>
            <select name="genre">
                <option defaultValue={"Active"}>Active</option>
                <option defaultValue={"Inactive"}>Inactive</option>
            </select>

            <button className="container-fluid h-100 w-25 ">
                Add new user
            </button>
       </form>
    );          
};
