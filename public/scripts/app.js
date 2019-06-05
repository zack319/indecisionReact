'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    )
);

var user = {
    name: 'Zakaria Jaouad',
    age: 26,
    location: "Pawtucket"
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name + "!"
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
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
