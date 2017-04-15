/**
 * Created by alimov on 4/15/17.
 */
import React from 'react';

export const Form = (props) => {
    return (
        <div><h1>{props.login ? 'Login' : 'Signup'}</h1>
            <label>&nbsp;username: </label>
            <input type="text" value={props.username} onChange={props.handleOnChangeUserName} /><br /><br />
            <label>&nbsp;password: </label>
            <input type="text" value={props.password} onChange={props.handleOnChangePassword} /><br /><br />

            &nbsp;<button onClick={''} > {props.login ? 'Login' : 'Signup'}</button>
        </div>
    )
}
