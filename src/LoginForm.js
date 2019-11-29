import React, {useState,useContext} from 'react';
import AppContext from './Appcontext';

const LoginForm = () => {

    let email,password;

    const[state,setState]=useState(
        {loginSucess:null}
    )

    const [globalState,setGlobalState] = useContext(AppContext);    

    const loginUser = async() =>{
        let response = await fetch('http://localhost:3001/user/login',{
            method:'POST',
            body:JSON.stringify(
             {
                 email :email.value,
                 password :password.value
             }   
            ),
            headers: {
                "Content-Type": "application/json"
            }
        });

        let json = await response.json();   

        if(json.token){
            //Change the local State
            setState({...state,loginSucess:'true'});
            //change the global state
            setGlobalState({...globalState,loggedIn:'true'})

            sessionStorage.setItem('jwt',json.token)

        }

        //console.log('response from amingo', json)
    }


    return(
        <div className="registration-form container">
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input 
                    ref={(elem)=>email = elem}
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                />
                <small
                    id="emailHelp"
                    className="form-text text-muted">
                        We'll never share your email with anyone else.
                </small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input 
                    ref={(elem)=>password = elem}
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password" 
                />
            </div>           
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={loginUser}
            >Login</button>

            </div>        
            )
        }
        
        export default LoginForm;
        


