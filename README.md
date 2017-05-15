# Valence: Take Charge of Your Life

> Valence is a wellness tracking application designed with you in mind. Get a visualization of your lifestyle habits that accommodate making healthy decisions: are you sleeping enough? Drinking enough water? Socializing with others in your life? Simply input a few parameters every day and start figuring out how to improve your lifestyle habits now. 
Science has demonstrated how everyday stressors produce accumulated impact on our daily lives. By monitoring these habits through visual feedback, long-term trends can be elucidated well before bad habits become persistent. Stabilize negative habit formations, feel great about positive lifestyle trends. Valence: Take Charge of Life. //TODO: update based on App plan.

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

> Valence allows each user to simply input his or her data each morning and the user will soon see rendered results of long term trends in lifestyle choices, such as hours of sleep, time spent exercising, and general mood. Armed with this information, users can make more informed choices and change their lives for the better. 

## Requirements

- Node 6.4.x
- Body Parser 1.17.0
- Express 4.15.0
- jQuery 3.2.1
- mysql 2.13.0
- React 15.4.2
- React Bootstrap 0.31.0
- React DOM 15.4.2

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g bower
npm install
npm run react-dev
npm run server-dev
```

### Roadmap

View the project roadmap [here](https://trello.com/b/l4yKjHYs/mvp)

Upon opening the link, the page render a loading message from index.html. Once App.jsx is loaded, it superimposes the rest of the page onto the screen. The page is divided into 3 main components:  CategoryList.jsx, Dashboard.jsx, and Graph.jsx. The CategoryList and Dashboard components are rendered by App.jsx, and the Graph component is rendered by Dashboard.jsx.

The user is presented with an input field where they may enter a username. Once the button is clicked, the username is searched from the database to make sure if it exists. The username entry can handle capitalizations by reverting the text to lowercase in server/index.js If the username does not exist or the field is left blank, a message will appear stating that the user does not exist. If the username is in the database, the application will render the user’s graph through a GET request to the database. Also, the userNotFound state is changed to true. The page will scroll automatically to the Dashboard component, located at the bottom of the screen.

The user is able to input values in the CategoryList component. Upon clicking the “Submit Info” button, the application performs a POST request to the database. The server handles this data using helper functions found in server/query.js. The insertUserData function will input the values into the database in sequential order. Queries incorporate the user’s id that is assigned to them in the users table to look up the user’s info and send the right data to the graph rendering component. 


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
