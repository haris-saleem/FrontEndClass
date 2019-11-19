import React from 'react';


const Jumbotron = (prop) => { //change into that const{} for me
    return (
        <div className = 'jumbotron'>
        <h1 className="display-4">{prop.title}</h1>
        <p className="lead">{prop.description}</p>
        <hr className="my-4" />
        <p>{prop.moreinfo}</p>
        
        <a className="btn btn-primary btn-lg" href="#" role="button">{prop.buttonLabel}</a>
        </div>
)
}

export default Jumbotron;
