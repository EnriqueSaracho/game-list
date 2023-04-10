# Game List

This repository is based on PedroTech's MERN Recipe App tutorial on youtube. But instead of being a recipe app I'm gonna try to make it about videogames.

## Log / Obstacles

- Commiting the progress to GitHub makes using the database URI in the index.js file unsafe.

  - I installed the dotenv dependency, allowing me to store secret variables in a config.env file. This file is part of .gitignore so any changes won't be commited to GitHub.

- Login component not working.

  - In auth.js, the error was the "token". It appeared as undefined when trying to add its value to the "access_token" cookie. The change made was using "(await response).data.token", instead of "response.data.token".

- When creating the games route, using a get request doesn't show the response in insomnia.
  - res.json(response) is not working.
  - Solution: apparently the way I made the GameSchema, creating a virtual variable "rating" needs a more complicated way of creating the API. For now I'll remove the variable.
