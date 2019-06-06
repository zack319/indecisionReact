console.log('App.js is running');

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['One', 'Two']
}

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

let count = 0;
const someId = 'myidhere';

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne} className="button">+1</button>
        <button onClick={minusOne} className="button">-1</button>
        <button onClick={reset} className="button">reset</button>
    </div>
);

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={minusOne} className="button">-1</button>
            <button onClick={reset} className="button">reset</button>
        </div>
    );

    // render template to screen
    // it figures out the minimal number of DOM changes that needs to be done => that is the efficienty of React!!
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();