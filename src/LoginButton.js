import React, { useState,useContext } from 'react';
import AppContext from './Appcontext'

const LoginButton = () => {

    const [state, setState] = useState(
        {
            status: 'logged-out',
            label: 'Log In'
        }
    )   

    const [globalState,setGlobalState] = useContext(AppContext);//to make global state.

    const loginHandler = () => {
        if(state.status === 'logged-in') {
            setState({
                ...state, 
                status: 'logged-out',
                label: 'Log In'
            });

        setGlobalState({
            ...globalState,
            loggedin: 'false'
        })    

        } else {
            setState({
                ...state, 
                status: 'logged-in',
                label: 'Log Out'
            });

            setGlobalState({
                ...globalState,
                loggedin:'true'   
            })
        }
        
    }

    return(
        <button onClick={loginHandler} className="btn btn-primary">
            { state.label }
        </button>
    )
}

export default LoginButton;