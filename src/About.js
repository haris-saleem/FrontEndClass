import React,{useContext} from 'react';
import AppContext from './Appcontext';

const About=()=>{

    const[globalState,setGlobalState]=useContext(AppContext);

    return(
        <div className="page">
            <h1>This is about Page</h1>
            <p>{globalState.userid}</p>
        </div>
    )
}

export default About;   