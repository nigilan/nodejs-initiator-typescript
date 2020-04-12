# Nodejs in Typescript #

  

This repo contains the basic setup for Nodejs application using Typescript. 
  

### What is this repository for? ###

  

  

#### Quick summary

Clone this repository and start writing REST APIs'. A sample `GET` request is provided by default. Build upon that my adding more routes and controllers.

  

#### Version - 1.0.0

  

  

### How do I get set up? ###

  

  

#### Summary of set up and usage

* Clone the folder and run the command `npm install` in the command prompt by navigating to that folder.

* Run the command `npm run devStart` to start the application in development mode. You can navigate to [localhost url](http://localhost:3000/test) to see the application in action.

* Run the command `npm run stagingStart` to start the application in staging mode with different port number

* Run the command `npm run build` to compile the code in ES6 to the `dist` folder

* Run the command `npm start` to start the application in production mode.

* Run the command `npm run clean` to remove `dist` folder and populate contents in `dist` folder afresh.

* Run the command `npm run eslintDryRun` to check the potential fixes from `eslint`(airbnb coding style) for your new changes.

* Run the command `npm run eslintRun` to save all the fixes from the `eslint` and it will be stored in the file. Make sure to commit the changes after this command.

#### Configuration

* Configure the port number for various environments like development, staging and production
  

#### Dependencies

All the dependencies that are necessary to the application will get installed once you run the `npm install`. It includes development dependencies like nodemon, testing frameworks and swagger. All the dependencies are present in the `package.json` folder.

  

#### How to run tests

Run the command `npm test` to run all the unit tests for the application. This command will run all the unit, integration and give you the results. Run the command `npm run apiTest` to run all the API tests in the project. Prior to running the `npm test`, in the `pretest` script, it will look for `eslint` errors/warnings and list them. Fix them and commit the code in the repository.

  

#### Deployment instructions


#### Writing tests

Write unit tests for each implemented feature. Write Swagger comments for each API that is going to be written. Make sure the test the new API in [Swagger UI](http://localhost:3000/api-docs). Substitute your port number when running the Swagger UI URL. Swagger serves as a documentation, make sure write all API test case scenarios in `Supertest`(testing framework, that comes preinstalled).


####  Other useful links
 [Coding Standards](https://github.com/airbnb/javascript)
 