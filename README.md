# Kainos Job Role Manager - Frontend

An online job application that serves both Kainos recruitment admin to retrieve and update job roles and their relevant information and applicants to apply for roles.

Try out the application in production here:
https://8ddx2p65g4.eu-west-1.awsapprunner.com/

## Table of Contents


- [How to start the application](#how-to-start)
- [How to run linting checks](#how-to-lint)
- [Tests](#tests)
  - [Unit Tests](#unit-test)
  - [Integration Tests](#integration-test)
  - [User Interface Tests](#ui-test)
- [Running the backend](#backend)

## How to start the application (locally)

1. Install application dependencies, run:
```
    npm install
```

2. Start the application with either:

```
    npm start 
```

(To reload server when changes are made)
```
    npm run dev
```


3. To check that your application is running enter url:

```
    http://localhost:3000
 ```

## How to run linting checks
1. To run linting checks:
```
    npm run linter
```

## Tests

### Unit Tests 
```
    npm run test-unit
```

### Integration Tests 
```
    npm run test-integration
```
Note: integration tests are currently disabled since the backend server is currently not running outside of the application

### User Interface Tests 
```
    npm run test-ui
```

### Accessibility Tests

#### Locally
1. Add your local end point to the urls in the .pa11yci file (ex. https://localhost:3000/job-role)
2. Run the application by doing the command `npm start` or `npm run dev`
3. Open another terminal and run the following command: `npm run test-accessibility`
4. Make sure to remove any localhost endpoints before merging to main.

#### On Deployed Endpoints
```
    npm run test-accessibility
```


## Running the backend
1. Follow the steps to run the backend for this application <a href="https://github.com/thomkainos/kainos-job-role-manager-backend" target="_blank">here</a>

