"use strict";

console.log('App.js is running');

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['One', 'Two']

    // JSX - JavaScript XML
};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
        "p",
        null,
        "Here are your options"
    ) : React.createElement(
        "p",
        null,
        "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item 1"
        ),
        React.createElement(
            "li",
            null,
            "Item 2"
        )
    )
);

var count = 0;
var someId = 'myidhere';

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne, className: "button" },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne, className: "button" },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset, className: "button" },
        "reset"
    )
);

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne, className: "button" },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne, className: "button" },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset, className: "button" },
            "reset"
        )
    );

    // render template to screen
    // it figures out the minimal number of DOM changes that needs to be done => that is the efficienty of React!!
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
