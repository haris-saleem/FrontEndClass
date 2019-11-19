import React, {useState} from 'react';


const Jumbotron = ({title,lead,moreInfo,buttonLabel}) => { //change into that const{} for me

const [state,setState]= useState({
    registrationSuccessful:false,
    loading:false,
    error:false

}) //array

const registerUser = ()=>{
    setState({...state,registrationSuccessful:true})
}

return (
        <div className = 'jumbotron'>
        <h1 className="display-4">{title}</h1>
        <p className="lead">{lead}</p>
        <hr className="my-4" />
        <p>{moreInfo}</p>
        
        <div class="input-group" style={{width: '600px', margin: '0 auto'}}>
                <input type="text" className="form-control"/>
                <button
                    onClick={registerUser}
                    className="btn btn-primary" href="#" role="button" style={{margin:'0 10px'}} >
                    {buttonLabel}
                </button>
        </div>

        {
            state.registrationSuccessful && <div  class="alert alert-success" role="alert" style={{width: '600px', margin: '10px auto'}}>
                   You have successfully registered!</div>
        }


        </div>
)
}

export default Jumbotron;
