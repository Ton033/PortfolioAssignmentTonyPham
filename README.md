# IDATA2502 Portfolio Assignment

This project is a part of the exam portofolio.
It focuses on the deployment of a vue.js, using a CI/CD delivery pipeline.
The application is made with Vue and deployed to Microsoft Azure.
The pipeline is implemented using GitHub Actions, which test, build and deploy the application.

The app in browser:
https://icy-wave-0fea1a01e.5.azurestaticapps.net/

# This project features:
- Automated testing using Jest
- Continuous integration and deployment triggered on every push to the main branch.
- Deployment to Azure Static Web Apps

# Project pipeline
### Checkout Repository Code
- The pipeline fetches the latest code from the repository. 

### Set up Node.js
- It configures Node.js as the runtime environment to prepare the environment for building and testing. 

### Install Dependencies
- It installs the required dependencies specified in package. Json

### Run Unit Tests
- It runs a unit test to validate the application’s functionality

### Build Project
-  Builds the project

### Deploy
- Uses azure credentials secret to log into Azure
- Deploys the vue application to Azure
