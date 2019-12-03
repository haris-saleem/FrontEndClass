import React, {useState} from 'react';


const Feed = ({_id,image,title,description,buttonLabel}) => { //change into that const{} for me
 //add _id whcih is cmingfrom add.js where we added it as prop

    const[state,setState] = useState(
    {
        label:buttonLabel
    }
);

const like = async()=>{

    setState({...state,label:'Loading....'});
    
   let response = await fetch('http://localhost:3001/feeds/addlike',{
    method:'Post',
    body: JSON.stringify({
        feedid:_id
    }),

    headers:{
        'Content-type':'application/json',
        'Authorization':'Bearer'.concat(sessionStorage.getItem('jwt'))

    }
    
    });
    let json = await response.json();

    setState({ ...state, label: 'Unlike' })

    console.log('reponse from backend',json)
    
}


return (
        <div class="card">
            <img src={image} class="card-img-top" alt={description}/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <button onClick={like} href="#" class="btn btn-primary">{state.label}</button>
                </div>
        </div>
            )
            }

export default Feed;


//<a href="#" class="btn btn-primary">{buttonLabel}</a>