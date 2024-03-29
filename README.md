# Getting Started

## Description

E-BookJS is a simple API application to manage e-books data.

## Tech Stacks

- [Node.js](https://nodejs.org/en)
- [Express JS](https://expressjs.com/)
- [Knex.js](https://knexjs.org/)
- [MySQL](https://www.mysql.com/)

## Quick Start

Clone the Project

```bash
  git clone https://github.com/hafizulf/e-bookJS
```

Copy and Setup `.env`

```bash
cd e-bookJS
cp .env-example .env
```

## Setup Locally

- Install dependencies

```bash
  npm install
```

- Running Application

```bash
  # running app
  npm run start

  # running with nodemon
  npm run dev
```

## Setup Locally Using Docker

- Install [Nodemon](https://www.npmjs.com/package/nodemon) for development

```bash
  npm i nodemon --save-dev
```

- Build and Running App

```bash
# docker-compose up | detach mode | build |
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

# using Makefile
make docker-run-dev-build
```

## Database Migrations and Seeder

```bash
  # migrate database
  npm run migrate

  # seed database
  npm run seed
```

## Running Test

Make sure to setup database test `.env` before.

- Database Migration

```bash
  # migrate database for testing
  npm run migrate:test
```

- Run Test

```bash
  # run all test
  npm run test

  # run all test | watch mode
  npm run test:watch

  # code coverage
  npm run test:coverage
```

## API Documentation

[Swagger](https://swagger.io/) used as API's documentation

```bash
  # Access all api's documentation
  {server}/api-docs
```

## Project Structure

```bash
├───.github
│   └───workflows            * github action workflow
├───src
│   ├───controllers          * controllers/Interface Adapter
│   │   ├───auth
│   │   ├───book
│   │   ├───role
│   │   ├───user
│   │   └───user-access
│   ├───entities             * business entity
│   ├───frameworks
│   │   ├───config           * app config: node env, database, jwt, etc
│   │   ├───database         * knexfile, database migration and seeder
│   │   │   ├───migrations
│   │   │   └───seeds
│   │   ├───middleware       * middleware such as authentication, authorization, cache, etc
│   │   ├───routes           * routes/Interface Adapter
│   │   ├───utils            * utils: response, file remover, paginate, etc
│   │   ├───validators       * validator: schema, rules, etc
│   │   │   ├───auth
│   │   │   ├───book
│   │   │   ├───role
│   │   │   ├───user
│   │   │   └───user-access
│   │   └───webserver        * webserver: plugins, CORS origin, rate limiter, web listener, etc
│   ├───repositories         * business repository: database query
│   │   ├───book
│   │   ├───role
│   │   ├───user
│   │   └───user-access
│   └───use-cases            * business use cases/services
│       ├───auth
│       ├───book
│       ├───role
│       ├───user
│       └───user-access
├───test                     * contains all specs
│   ├───__mock__             * mocks: data, response
│       ├───auth
│       ├───book
│       └───user
│   ├───auth
│   ├───book
│   ├───role
│   ├───user
│   └───user-access
└───uploads                  * e-book files uploaded
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
