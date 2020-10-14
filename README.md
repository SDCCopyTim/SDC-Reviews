# TimCamp Reviews Module

> Reviews module for a product page on a camp spot rental website. Created as part of our Front-End Capstone project at Hack Reactor.

## Related Projects

  - https://github.com/Go-Tim/nick-nav
  - https://github.com/Go-Tim/tracy-detail-desc-calendarsticky
  - https://github.com/Go-Tim/overview-2
  - https://github.com/Go-Tim/tim-suggestions

## Table of Contents

1. [Usage](#usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

1. [Install Dependencies](#installing-dependencies)
2. [Setup the database and add mock data](#database)
3. [Run the app](#running-the-app)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Database
- For the mongo database, run the seed file from the command line—while in the root directory, run $ `node database-mg/seedReviews.js`
- For the postgresql database, from the root directory, run $ `psql -d -U [your username] postgres <./database/schema.sql`

### Running the app
1. In a terminal, from the root directory:
```sh
npm run build
npm run start
```
2. Open a browser and navigate to http://localhost:3004
