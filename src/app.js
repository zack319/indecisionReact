console.log('App.js is running');

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();
};

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
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);