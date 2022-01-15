# QuirklogicBackEnd


## Description

 - A restful api built with NodeJS. 
 - End point for Quirk Logic Backend. 
 - A well tested application.

## Development server

Run `node server` for a dev server. To able to use this applications, users will have to set environment variables.The environment file is also upload under this repository on github.


## Running unit tests

Run `npm test` to execute the unit tests via jest.


## Build Code Structure
```bash
| -- src
  |
  | -- api 
  |
    |
    | -- entity
    |
      |
      | -- Book.js
      |  
    |
    | -- repo
    |
      | -- BookRepo.js
    |
    | -- routes
    |
       | -- BooksRoute.js
      |
    |
  | -- test 
  |
    | -- Book.spec.js
    |
    | -- BookRepo.spec.js
    |
    | --BooksRoute.spec.js
    | 
  |
|
  ```
      
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
