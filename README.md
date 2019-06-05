# Indecision React App

### From course on Udemy ###

##Installation

    -> npm install
    -> npm install -g live-server
    -> npm install -g babel-cli

##Usage

    -> babel src/app.js --out-file=public/scripts/app.js --presets=env,react
        => this will render all React scripts into JavaScript for the browser
    -> babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
        => same as above plus watches all changes to the directory
    -> live-server public
        => starts a local server on localhost:8080
        => automatic react live reload available
        => you might need to install react extension to Chrome or Firefox (open console to check it out)