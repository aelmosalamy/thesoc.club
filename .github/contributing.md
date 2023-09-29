# Contributing
To get started with contributing, you'll need the following:

- [nodejs](https://nodejs.org/en) v18+
- [yarn](https://yarnpkg.com/) (npm install -g yarn)
- [Docker](https://www.docker.com/products/docker-desktop/)
  or manually configure [MongoDB](https://www.mongodb.com/try/download/community).


Once all of the above is installed, run `yarn install` in a terminal to install the project's dependencies.
Additionally, create a file called `.env.local` and run `docker compose up` to start the Mongo server (if using docker).

## Starting Application
To start the application, run `yarn run dev`. This will start a dev server, most likely at [localhost:3000](http://localhost:3000).

If you want to configure your own environment variables, modify `.env.local`.
If modifying default production or development environment, change `.env.development` and `.env.production`.

## Project Architecture
This project uses the latest [Next.js](https://nextjs.org/), with the [app router](https://nextjs.org/docs/app).
If you are not familiar with Next.js, and more generally React, follow the [Next.js tutorial](https://nextjs.org/learn/foundations/about-nextjs)
to familiarize yourself.


## Database
This project used MongoDB to store data. A simple configuration is available in the included docker compose.
The database is exposed on port 27017, and an interactive browser at [localhost:8081](http://localhost:8081).
