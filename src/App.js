import React from 'react';
import logo from './logo.svg';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import Feed from './Feed'
import './App.css';

//this is just an example button example.

const Button = (prop) => {  // prop can be called anything. prop here is an argument here and prop also act as compenent
  return(
   <button>
     {prop.children}
   </button> 
  )
}

//what I understood is that the feeds are stored in terms array of objects.

const posts = [
  {
    title: "The Title",
    lead: "Welcome to ABC.com, the biggest platform for the alphabet.",
    moreInfo: "Click here to learn more about learning ABC"
  },
  {
    title: "Another Title",
    lead: "Welcome to ABC.com, the biggest platform for the alphabet.",
    moreInfo: "Click here to learn more about learning ABC"
  },
  {
    title: "And One More",
    lead: "Welcome to ABC.com, the biggest platform for the alphabet.",
    moreInfo: "Click here to learn more about learning ABC"
  }
]

const App= ()=> {

 const isLoading = false;

 return (
  <div className="App">
    <NavBar logo = {logo}/>
    <Jumbotron title = "The Title"
      description ="Welcome to ABC.com, the biggest platform for the alpabet."
      moreinfo = "Click here to learn more about learning ABC"
      buttonLabel = "Start"/>

<div className="container">
        
        {
            isLoading && <p>Loading...</p>
        }
        {
            !isLoading && posts.map(
              (post)=><Feed 
                image={post.image}
                title={post.title}
                description={post.description}
                buttonLabel="Read more"
              />
            )
        }
        
      </div>
      
       
  </div>
    
    
  );
}

export default App;



/*
prop={
  customText:"Something",
  color:"blue",
  children:[] //children captures all compenents inside compenents and siblings are entered into arrays.
}
<Feed
    image =""
    title = "Shopping in Tehran"
    description = "50% off ou"
    buttonLabel
*/

