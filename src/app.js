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

var user = {
    name: 'Zakaria Jaouad',
    age: 26,
    location: "Pawtucket"
};

var templateTwo = (
    <div>
        <h1>{user.name + "!"}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
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