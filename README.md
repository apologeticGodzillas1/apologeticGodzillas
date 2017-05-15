# Valence: Take Charge of Your Life

> Valence is a wellness tracking application designed with you in mind. Get a visualization of your lifestyle habits that accommodate making healthy decisions: are you sleeping enough? Drinking enough water? Socializing with others in your life? Simply input a few parameters every day and start figuring out how to improve your lifestyle habits now. 
Science has demonstrated how everyday stressors produce accumulated impact on our daily lives. By monitoring these habits through visual feedback, long-term trends can be elucidated well before bad habits become persistent. Stabilize negative habit formations, feel great about positive lifestyle trends. Valence: Take Charge of Your Life.

## Team

  - Rajas Kale
  - Jon-Eric Escobedo
  - Chris Keating

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

> Valence allows each user to simply input his or her data each day and the user will soon see rendered results of long term trends in lifestyle choices, such as hours of sleep, time spent exercising, and general mood. With this information, users can make more informed choices and change their lives for the better. 

## Requirements

Dependencies
- Body Parser: ^1.17.0
- Chai": ^3.5.0
- Chai-http: ^3.0.0
- Enzyme: ^2.8.2
- Express: ^4.15.0
- Highcharts: ^5.0.11
- jQuery: ^3.2.1
- Lodash: 4.6.1
- MySQL: 2.13.0
- Nodemon: 1.11.0
- React: 15.4.2
- React Bootstrap: 0.31.0
- ReactDOM: 15.4.2
- React Test Renderer: ^15.5.4
- Require: 2.4.20
- Sinon: 1.17.3

Development Dependencies
- Babel Client: 6.7.5
- Babel Core: 6.23.1
- Babel Jest: 20.0.0
- Babel Loader: 6.3.2
- Babel Preset ES2015: 6.24.1
- Babel Preset React: 6.24.
- Babel Register: 6.7.2
- Chai: 3.5.0
- Enzyme: 2.8.2
- ESLint Config Hack Reactor: git://github.com/reactorcore/eslint-config-hackreactor
- Jest: 20.0.0
- Jest Client: 20.0.0
- Mocha: 2.3.3
- React Addons - Test Utilities: 15.5.1
- React Test Renderer: 15.5.4
- Regenerator Runtime: 0.10.5
- Sinon: 1.17.3
- Webpack: 2.2.1


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run react-dev
npm run server-dev
npm run test
npm start
```

### Roadmap

View the project roadmap [here](https://trello.com/b/l4yKjHYs/mvp)

Upon opening the link, the page render a loading message from index.html. Once App.jsx is loaded, it superimposes the rest of the page onto the screen. The page is divided into 3 main components:  CategoryList.jsx, Dashboard.jsx, and Graph.jsx. The CategoryList and Dashboard components are rendered by App.jsx, and the Graph component is rendered by Dashboard.jsx.

The user is presented with an input field where they may enter a username. Once the button is clicked, the username is searched from the database to make sure if it exists. The username entry can handle capitalizations by reverting the text to lowercase in server/index.js If the username does not exist or the field is left blank, a message will appear stating that the user does not exist. If the username is in the database, the application will render the user’s graph through a GET request to the database. Also, the userNotFound state is changed to true. The page will scroll automatically to the Dashboard component, located at the bottom of the screen.

The user is able to input values in the CategoryList component. Upon clicking the “Submit Info” button, the application performs a POST request to the database. The server handles this data using helper functions found in server/query.js. The insertUserData function will input the values into the database in sequential order. Queries incorporate the user’s id that is assigned to them in the users table to look up the user’s info and send the right data to the graph rendering component. 


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
