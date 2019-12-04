import React, {useContext} from 'react'
import AppContext from './Appcontext';


const Contact=()=>{

    const [globalState,setGlobalState]=useContext(AppContext);

    return(

        <div classsName="page">

            <h1>Contact</h1>
            <p>{globalState.id}</p>
        </div>

    )


}

export default Contact;
