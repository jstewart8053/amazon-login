import React from 'react';
import '../App.css';
import { useForm } from "react-hook-form";

const Signup = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-container'>
                <h1> Create account </h1>
                <label> Your name </label>
                <label> Email </label>
                <label> Password </label>
                <label> Re-enter password </label>
                <button input type='submit'> Create your Amazon account </button>
                <p> By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
                <hr />
                <p> Already have an account?  <span>Sign-in</span> </p>
            </div>
        </form>
    )

}
export default Signup;
