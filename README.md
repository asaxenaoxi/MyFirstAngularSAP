# MyFirstAngularSAP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Generate a service

To generate a service to share data between component, you first need to generate a service and lets call it data by calling on the main
directory of the angular project "ng generate service <name of service>"

## Build for Dev and Prod
ng build <- builds larger files
ng build --prod <- build is more optimized
ng build --prod --base-href="myurl" <- this is needed for production with the correct URL for it to be just deployed on a web server
Build folder is created "dist"

## Manage distribution using github repo online for free - this allows you to host your angular app on github while the code is also comitted
First install the following pkg
npm install -g angular-cli-ghpages
