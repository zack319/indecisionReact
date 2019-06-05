console.log('App.js is running');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var userName = "Zakaria Jaouad";
var age = 26;
var userLocation = "East Providence";

var templateTwo = (
    <div>
        <h1>{userName + "!"}</h1>
        <p>Age: {age}</p>
        <p>Location: {userLocation}</p>
    </div>
);

// Challenge 1:
    // create tempalteTwo
    // h1 with your name
    // p tag with your age
    // location
// Render templateTwo instead of template

var appRoot = document.getElementById('app');

// takes 2 arguments
ReactDOM.render(templateTwo, appRoot);