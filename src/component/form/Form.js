/**
 * Created by alimov on 4/15/17.
 */
import React from 'react';

export const Form = (props) => {
    return (
        <div><h1>{props.login ? 'Login' : 'Signup'}</h1>
            <label> username: </label>
            <input type="text" value={props.username} onChange={props.handleOnChangeUserName} /><br /><br />
            <label> password: </label>
            <input type="text" value={props.password} onChange={props.handleOnChangePassword} /><br />

            <button onClick={''} value={props.login ? 'Login' : 'Signup'}  />
        </div>
    )
}
