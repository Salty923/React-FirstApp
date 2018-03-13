//import react core library
import React from 'react';

//import dom render library
import ReactDOM from 'react-dom'

//YouTube Data API key
const API_KEY = 'AIzaSyDBINtzBUQc_UTEZFhP8Q9FutI71rUIr2M'

//Create a new component. This will produce html
const App = () => {
    //JSX javascript xml
    return <div> HI! </div>;
}

//Take this compnents html and put in dom
//APP is type  to make instance add JSX tags
ReactDOM.render(<App />, document.querySelector('.container'));