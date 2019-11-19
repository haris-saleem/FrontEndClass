import React from 'react';

const Feed = ({image,title,description,buttonLabel}) => { //change into that const{} for me
 return (
        <div class="card">
            <img src={image} class="card-img-top" alt={description}/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="#" class="btn btn-primary">{buttonLabel}</a>
                </div>
        </div>
            )
            }

export default Feed;
