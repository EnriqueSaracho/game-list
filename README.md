# Game List

As a huge fan of videogames, I like to keep track of the games I've played and want to play and compare them to each other to try and find what makes a great game. This app helps me with that by organizing the games I input either by title, rating or release date, and lets me rate different aspects of each game in an organized manner. Also it stores and displays a few interesting details of each game like the developers, series, if I have played the game before, etc.

The project is divided in two folders, client and server.

The server dependencies are bcrypt, cors, dotenv, express, jsonwebtoken, and mongoose. The server file is index.js and is located in the src directory with the models and routes directories. In the model files I create the schemas that are then imported to the route files. The API endpoints are defined there and then exported to index.js.

I used create-react-app for the client folder then cleaned it to start fresh. I created a home page to display the list of games with their respective cover photo. The game page is for each individual game and displays things like rating, release date, publisher, etc. The add-game and edit-page are very similar files and are used to create and edit the games saved in the list.

## Interesting features learned or reinforced

- HTTP Requests with Express and Axios.
- React Router.
- Database Schemas with mongoose.
- useNavigate().
- useState().
- Importing components from other files or installed.
- Environmental Variables.
- React icons.
- Searchbars with React.
- Sorting lists.
