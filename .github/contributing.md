# Contributing
To get started with contributing, you'll need the following:

- [nodejs](https://nodejs.org/en) v18+
- [yarn](https://yarnpkg.com/) (npm install -g yarn)
- [Docker](https://www.docker.com/products/docker-desktop/)
  or manually configure [MongoDB](https://www.mongodb.com/try/download/community).


Once all of the above is installed, run `yarn install` in a terminal to install the project's dependencies.
Additionally, run `docker compose up` to start the Mongo server (if using docker).

## Starting Application
To start the application, run `yarn run dev`. This will start a dev server, most likely at [localhost:3000](http://localhost:3000).

You will need to configure environment variables in a file called `.env.local`.
The following is enough to get started if using Docker:

```.dotenv
MONGODB_URI=mongodb://soc:password@localhost:27017/
```

## Project Architecture
This project uses the latest [Next.js](https://nextjs.org/), with the [app router](https://nextjs.org/docs/app).
If you are not familiar with Next.js, and more generally React, follow the [Next.js tutorial](https://nextjs.org/learn/foundations/about-nextjs)
to familiarize yourself.


## Database
This project used MongoDB to store data. A simple configuration is available in the included docker compose.
The database is exposed on port 27017, and an interactive browser at [localhost:8081](http://localhost:8081).
