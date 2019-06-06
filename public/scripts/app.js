"use strict";

console.log('App.js is running');

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
};

// JSX - JavaScript XML
var template = React.createElement(
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
    ),
    React.createElement(
        "form",
        { onSubmit: onFormSubmit },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
            "button",
            null,
            "Add Option"
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
