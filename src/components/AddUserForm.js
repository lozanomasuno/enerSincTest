import React from "react";
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useUsers } from "../hooks/useUsers";

export const AddUserForm = () => {
    
     const { users } = useUsers();
    const { handleSubmit } = useForm();


    const adduser = (user)=>{ 
        user.id = uuidv4();
        console.log(users);
        //e.target.reset();
    }
    return(     
       <form className="w-50 p-3" onSubmit={ handleSubmit(adduser) }>
            <label>name</label>
            <input type="text" name="name" />
            
            <label>E-mail</label>
            <input type="email" name="email" />

            <label>Genre</label>
                <select name="genre">
                <option>male</option>
                <option>female</option>
            </select>

           
            <label>Status</label>
            <select name="Status">
                <option>Active</option>
                <option>Inactive</option>
            </select>

            <button className="container-fluid h-100 w-25 ">
                Add new user
            </button>
       </form>
    );          
};
