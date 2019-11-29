import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import Feed from './Feed'
import Form from './Form' //registration form
import './App.css';
import  CounterButton from './CounterButton'
import  LoginForm from './LoginForm'


import AppContext from './Appcontext' //import appcontext

//var fetchUrl = require("fetch").fetchUrl;

//this is just an example button example.

const Button = (prop) => {  // prop can be called anything. prop here is an argument here and prop also act as compenent
  return(
   <button>
     {prop.children}
   </button> 
  )
}

//what I understood is that the feeds are stored in terms array of objects.
/*
const posts = [
  {
    title: "The Title",
    description: "Welcome to ABC.com, the biggest platform for the alphabet.",
    moreInfo: "Click here to learn more about learning ABC"
  },
  {
    title: "Another Title",
    description: "Welcome to ABC.com, the biggest platform for the alphabet.",
    moreInfo: "Click here to learn more about learning ABC"
  },
  {
    title: "And One More",
    description: "Welcome to ABC.com, the biggest platform for the alphabet.",
    moreInfo: "Click here to learn more about learning ABC"
  }
]
*/
const App= ()=> {

  const [state, setState] = useState(
    {
        posts: [],
        postsLoaded: false,
        loadMore: false
    }
)

const [globalState, setGlobalState] = useState(
  {
      user: {},
      loggedIn: sessionStorage.getItem('jwt')? 'true':'false'
  }
)

useEffect(()=>{
  if(!state.postsLoaded) {
  fetch('http://localhost:3001/feed/all')
  .then(response =>response.json())
  .then(json=>{
    setState({
    ...state,
    posts:json,
    postsLoaded:true
  })
  })
  .catch(e=>console.log(' error',e))

}
});

let posts;
/*
fetch('http://localhost:3001/feed/all')//Promise
.then(response=>response.json())//promise
.then(json=>posts = json)
.catch(e=>console.log('error', e))
*///not using

 const isLoading = false;

 return (
  <AppContext.Provider value={[globalState, setGlobalState]}>
  <div className="App">
    <NavBar logo = {logo}/>
    <Form></Form>

{ globalState.loggedIn !== 'true' && <LoginForm />}

       <h1>{globalState.loggedIn}</h1>
{ 
  globalState.loggedIn === 'true' && 
      <div className="container">        
          { 
              state.posts.map(
                  (post)=><Feed
                  _id={post._id} 
                  image={post.image}
                  title={post.username}
                  description={post.comment}
                  buttonLabel="Read more"
                  />
              )
          }
      </div>
  }
      
  </div>
    
    </AppContext.Provider>  
  );
  
};

export default App;



/*

 <CounterButton/>
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

/*
 <div className="container">
        { 
      state.posts.map(
        (post)=><Feed
        image= {post.image}
    title ={post.title}
    description = {post.comment}
    moreinfo = {post.moreinfo}
      />
      )   
      }          
      </div>

<Jumbotron title="Registration"
        lead = "Welcome to Registration form"
        moreInfo = "FOr more infor please....."
        buttonLabel = "Signin"
      />

<Jumbotron title = "The Title"
      description ="Welcome to ABC.com, the biggest platform for the alpabet."
      moreinfo = "Click here to learn more about learning ABC"
      buttonLabel = "Start"/>
    
<Jumbotron 
                title="The Newsletter"
                lead="Welcome to ABC.com, the biggest platform for the alphabet."
                moreInfo="Click here to learn more about learning ABC"
                buttonLabel="Signup"
            /> 

*/

