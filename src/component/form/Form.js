/**
 * Created by alimov on 4/15/17.
 */
import React from 'react';

export const Form = (props) => {
    return (
        <div id={props.paramId} className={props.login ? 'display-block' : 'display-none'}>
            <form className="form">

                {props.paramId === 'login' ? 'Welcome Back!' : 'Sign Up for Free'}
                <input type="text" value={props.username} onChange={props.handleOnChangeUserName} placeholder='username'/>
                <input type="text" value={props.password} onChange={props.handleOnChangePassword} placeholder='password'/>
                <button onClick={''}>{props.paramId === 'login' ? 'Log in' : 'Register now'}</button>
            </form>
        </div>
    )
}
