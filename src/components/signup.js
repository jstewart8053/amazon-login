import React from 'react';
import '../App.css';
import hr from '../assets/hr.png';
import iFont from '../assets/iFont.png';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
    userName: yup
        .string()
        .required("Enter your name"),
    email: yup
        .string()
        .email("Enter your email")
        .max(1064)
        .required("Enter a valid email"),
    password: yup
        .string()
        .min(6, "Passwords must be at least 6 characters")
        .required("Enter your password"),
    rePassword: yup
        .string()
        .required('Passwords must match')
        .oneOf([yup.ref('password')])
});


const Signup = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const onSubmit = data => {
        console.log(JSON.stringify(data));
    };
    // alert text is:
    // enter a valid name/email address
    // Passwords must be at least 6 characters
    // Passowrds must match

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-container'>

                <h1> Create account </h1>

                <label> Your name </label>
                <input
                    name="userName"
                    type="text"
                    autoComplete="on"
                    ref={register}
                />
                {errors.userName && <div className="alertText"> {errors.userName.message} </div>}


                <label> Email </label>
                <input
                    name="email"
                    type="text"
                    autoComplete="on"
                    ref={register} />
                {errors.email && <div className="alertText"> {errors.email.message} </div>}

                <label> Password </label>
                <input
                    className='passwordColor'
                    name="password"
                    type="text"
                    autoComplete="off"
                    placeholder="At least 6 characters"
                    ref={register} />
                {errors.password && <div className="alertText"> {errors.password.message} </div>}

                <p className='passwordColor'>
                    <img src={iFont} className="iFont" alt="info icon" />
                 Passwords must be at least 6 characters. </p>


                <label> Re-enter password </label>
                <input
                    name="rePassword"
                    autoComplete="off"
                    ref={register} />
                {errors.rePassword && <div className="alertText"> {errors.rePassword.message} </div>}


                <button type='submit'> Create your Amazon account </button>

                <p> By creating an account, you agree to Amazon's </p>

                <p> <span className="sm-font">Conditions</span> of Use and <span className='sm-font'> Privacy Notice. </span></p>

                <img src={hr} className="hr1" alt="horizontal line" />

                <p> Already have an account?  <span>Sign-in ▸</span> </p>
            </div>
        </form>
    )

}
export default Signup;
