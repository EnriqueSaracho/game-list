# Game List

This repository is based on PedroTech's MERN Recipe App tutorial on youtube. But instead of being a recipe app I'm gonna try to make it about videogames. As a gamer, I like to keep track of the games I've played and compare them to each other to try and find what makes a great game. So it would be very usefull for me to have an app that helps me rate different aspects of each game in an organized manner.

The project is divided in two folders, client and server.

The server dependencies are bcrypt, cors, dotenv, express, jsonwebtoken, and mongoose. The server file is index.js and is located in the src directory with the models and routes directories. In the model files I create the schemas that are then imported to the route files. The API endpoints are defined there and then exported to index.js.

I used create-react-app for the client folder then cleaned it to start fresh. I created a home page to display the list of games with their respective cover photo. The game page is for each individual game and displays things like rating, release date, publisher, etc. The add-game and edit-page are very similar files and are used to create and edit the games saved in the list.
