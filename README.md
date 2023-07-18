# NodeJS boilerplate

Made by @massaynus

there are branches in each one a different setup for all your needs

please checkout the repo at: <https://github.com/massaynus/node-boilerplate>

## What is this?

This template will make it easy to start writing anything by configuring all the necessary infra out of the box.

it has the abiltity to configure all the following easilly:

- babel and prettier + eslint
- mongoose
- graphql
- redis
- rabbitmq

## Running your code

- the template is docker ready so you could do: `docker-compose up --build` and that would be it!
- you can run `npm run deploy` to just build the code on the machine and run **index.js** directly
- `npm run build` outputs everything built by babel to the **./dist** folder if you need anymore flexibility
- `npm run aws:deploy` to build the code and deploy it using `serverless` to aws as a lambda

## Deployed at?

currently there is a live version of this deployed at AWS on <https://l22sp2vmej.execute-api.us-east-1.amazonaws.com/Development>

to make and example call please consider invoking this link: <https://l22sp2vmej.execute-api.us-east-1.amazonaws.com/Development/api/v1/plan?from=60.200309580474354,%2025.15206098556519&to=60.19461994799159,24.870836734771732&date=07-31-2023&time=8%3A40am>
