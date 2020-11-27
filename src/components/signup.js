import React from 'react';
import '../App.css';
import hr from '../assets/hr.png';
import iFont from '../assets/iFont.png';
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
                <input name="userName" autoComplete="on" ref={register({ required: true, maxLength: 50 })} />
                <label> Email </label>
                <input name="email" ref={register({ required: true, maxLength: 64 })} />
                <label> Password </label>
                <input className='passwordColor' name="password" placeholder="At least 6 characters" autoComplete="off" ref={register({ required: true, maxLength: 1024 })} />
                <p className='passwordColor'>
                    <img src={iFont} className="iFont" alt="info icon" role="img" />
                 Passwords must be at least 6 characters. </p>
                <label> Re-enter password </label>
                <input name="re-password" autoComplete="off" ref={register({ required: true, maxLength: 50 })} />
                <button input type='submit'> Create your Amazon account </button>
                <p> By creating an account, you agree to Amazon's </p>
                <p> <span className="sm-font">Conditions</span> of Use and <span className='sm-font'> Privacy Notice. </span></p>
                <img src={hr} className="hr1" alt="horizontal line" role="img" />
                <p> Already have an account?  <span>Sign-in ▸</span> </p>
            </div>
        </form>
    )

}
export default Signup;
