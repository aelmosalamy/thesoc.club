# Contributing
To get started with contributing, you'll need the following:

- [nodejs](https://nodejs.org/en) v18+
- [yarn](https://yarnpkg.com/) (`npm install -g yarn`)
- [Docker](https://www.docker.com/products/docker-desktop/),
  or manually configure [PostgreSQL](https://www.postgresql.org).


Once all of the above is installed, run `yarn install` in a terminal to install the project's dependencies.
Create a file called `.env.local` to store your local configuration settings.
Most settings are preconfigured for you in [.env.development](../.env.development).

Additionally, run `docker compose up -d` to start the Postgres server (if using docker).
On the first application start, or if the database has been changed, run `yarn run migrate`.

## Starting Application
To start the application, run `yarn run dev`. This will start a dev server, most likely at [localhost:3000](http://localhost:3000).

If you want to configure your own environment variables, modify `.env.local`.
If modifying default production or development environment, change `.env.development` and `.env.production`.

## Project Architecture
This project uses the latest [Next.js](https://nextjs.org/), with the [app router](https://nextjs.org/docs/app).
If you are not familiar with Next.js, and more generally React, follow the [Next.js tutorial](https://nextjs.org/learn/foundations/about-nextjs)
to familiarize yourself.


## Database
This project used PostgreSQL (postgres) to store data. A simple configuration is available in the included docker compose.
The database is exposed on port 10100, and an interactive browser at [localhost:8080](http://localhost:8081).
We use [Prisma ORM](https://www.prisma.io/) to interact with the database in the application.
