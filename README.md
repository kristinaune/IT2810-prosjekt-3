# IT2810 Group 62 - Project 3

### Getting started

Go to /client, run “npm i”, then “npm start”.
The client should connect to the API-server on the VM. If not, you have to run the development server. To do this, go to /server and run “npm run dev”. In /client/src/utilities/CONFIG.ts, change API_ADDRESS to “localhost:4000” and save.

Once the application is running, it can be tested with “npm test”.

### Overall functionality

Our webpage is based on IMDb’s film database and implements a search function where you can search among the 250 best movies rated by IMDb. The website also contains implementation of filtering on the search result and on all the movies. It is possible to register a user on the site, and you will stay logged in until you log out on the site. If you are registered and logged in you will be able to add movies to “my list”, which is a collection of all the movies a user wants to watch later.

## Functionality according to the task:

### Frontend

#### Search

When the user opens the webpage, he is presented with a searchfield. This search field is implemented as a <form> that uses the input string from the user to search for movies that match the string. The user can search by title, actors or genre on the search page. It is taken into account that the user both can use lowercase and uppercase letters. After the user has accessed the result list with movies, it is possible for the user to filter the result by rating, production year or length of play. The filtering will filter on all movies in the result list, not just the movies that are loaded on the page. Redux is used in this case to update the state for the result list when the user is searching for a movie or filtering on the result list.

#### Sort and filtering

We have chosen to implement sort and filtering two places on our webpage. As mentioned above, it is implemented on the Search page. On this page the user is able to sort the result by rating, production year and length of play. We have also implemented filtering at the page “All movies”. On this page the user is able to filter the entire dataset by rating and release year with a slider. You can for example use the filter so you get all movies rated between 9 and 10. It is also possible to filter all the movies on genre, and the user is able to choose more than one genre and the result list will include all the movies that have all the matches.

#### Presentation of large result sets

We have chosen to have two different layouts for presentation of the large dataset. On the Search page we render the component named ResultList. This component will respond to the changes the user does when he filters the result list in the Search field. Each movie in the ResultList is a separate component called SearchMovieListItem. This component takes in the movie, which is the movie to be shown, and startSetDisplayMovie, which is an action dispatcher used to show the movie modal. SearchMovieListItem will be rendered when the ResultList is rendered, and in this way we can represent all the movies as a list and they will all have the same layout.

On the pages All movies and My movie list we present the movies in a different way than on the Search page. The component named MovieList will render a list of MovieItem-components, which are simple components consisting of the movie’s poster and title.

To handle large data sets, we have created a function called paginator that loads 20 movies at a time. Several movies are loaded after scrolling down on the page. This function is used in the components named AllMovies, MyListAuth and ResultList.

One could argue that pagination on the backend with Model.skip() would be a better fit. However, handling cursors in the frontend and backend would add unnecessary latency to the application. The whole database is fairly small; only 144KB. The real bottleneck is downloading every movie’s poster from an external source, which is more smoothly handled by limiting the number of movies rendered at a time.

#### More details about objects

To get more information about each movie, the user is able to click on the movie he wants to read more about it. When the user clicks on the movie, an action containing the movie will be dispatched to the Redux-store, and a modal with more information about the movie will pop up. This action can be dispatched from any movie-presenting component in the application.

#### User-generated data

One can register a user on the website by entering the name and email under the tab ‘Account’. By doing this the user gets access to a functionality for saving movies they like or want to watch later. If a user of the website is not registered or logged in, this functionality won't appear. To implement this there are two different components that can render, depending on whether the user is logged in or not. MyListUnAuth is rendered if the user is not logged in, and has no functionality. MyListAuth renders if the user is logged in, and will show all the movies that the user has added to their list.

A user’s list of movies is represented by an array of IMDb-IDs. When a user adds or removes a movie from “My List”, an action dispatcher will be called. This will query the API to update the list of ID’s. On fulfillment, the API will return the updated User-object, which is dispatched to the Redux-store.

### Backend

The application’s backend consists of a MongoDB-database running in a Docker-container on a NTNU-hosted VM, and a NodeJS/Express.js-server, also running on the VM.

However, the Node.js server is not installed as a service, and may crash. If you can’t connect to the API from the frontend, go to “/server” and start the development server by typing npm run dev. Then go to client/src/utilities/CONFIG.ts and change API_ADDRESS to “localhost:4000”.

### Technologies

The application is based on the MERN-stack (MongoDB, Express.js, React, NodeJS), with a few extra libraries.

#### React and Typescript

The user interface is based on React and the create-react-app boilerplate. TypeScript has been used in both frontend and backend, with custom types defined in src/types.ts.

#### Redux

We have used Redux to handle application state. One of the reasons why we have chosen to use Redux is because one of our group members had experienced and used this before. Redux is also widely used in business and it is well documented online.

#### REST API og backend

We chose the MERN stack as it was well documented and let us write both backend and frontend in the same language. One of the main advantages with GraphQL is custom queries, a feature our application would not benefit from.

Other components and libraries:

#### Frontend

- Thunk: A Redux-middleware for dispatching async actions to the Redux-store.
- Axios: for making HTTP-requests
- NoUISlider: a component that lets us define a number-range, used to filter movies.

#### Backend

- Express: a JavaScript library used as API-server.
- mongoose: an ODM connecting the API to the database.
- Nodemon for real-time compiling while developing the backend.

#### Linting

- Eslint with TypeScript-plugin

#### Testing

- Jest as main test-library
- Puppeteer for end2end-testing
- Redux-Mock-Store for mocking Redux store in testing.

## Testing

The tests can be run by typing npm test inside the /client-directory.

#### End-2-end

By using Jest and puppeteer we have created tests that mimic user behavior, such as registering a user, logging in, adding a movie to “my list” and so on.

#### Unit-tests

We have written unit-tests in Jest for actions and reducers.

