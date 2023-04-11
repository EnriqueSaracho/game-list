# Game List

This repository is based on PedroTech's MERN Recipe App tutorial on youtube. But instead of being a recipe app I'm gonna try to make it about videogames. As a gamer, I like to keep track of the games I've played and compare them to each other to try and find what makes a great game. So it would be very usefull for me to have an app that helps me rate different aspects of each game in an organized manner.

The project is divided in two folders, client and server.

The server dependencies are bcrypt, cors, dotenv, express, jsonwebtoken, and mongoose. The server file is index.js and is located in the src directory with the models and routes directories. In the model files I create the schemas that are then imported to the route files. The API endpoints are defined there and then exported to index.js.

I used create-react-app for the client folder the cleaned it to start fresh.

## Log / Obstacles

- Commiting the progress to GitHub makes using the database URI in the index.js file unsafe.

  - I installed the dotenv dependency, allowing me to store secret variables in a config.env file. This file is part of .gitignore so any changes won't be commited to GitHub.

- Login component not working.

  - In auth.js, the error was the "token". It appeared as undefined when trying to add its value to the "access_token" cookie. The change made was using "(await response).data.token", instead of "response.data.token".

- When creating the games route, using a get request doesn't show the response in insomnia.
  - res.json(response) is not working.
  - Solution: apparently the way I made the GameSchema, creating a virtual variable "rating" needs a more complicated way of creating the API. For now I'll remove the variable.
