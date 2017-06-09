[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


# wine-cellar - Capstone Project

## DESCRIPTION

An application that allows a current user to login and create a wine cellar
that keeps track of all the bottles of wine in your cellar.  It uses a custom
Rails API to create, read, update and delete wine CRUD actions. This application
is deployed online at the URL found below.

## FEATURES

1.  Single page application (SPA) using a custom back end Rails
    implementation written in JavaScript.

2.  Full user sign up, sign in, change password and sign out authentication
     with custom back end Rails server.

3.  Complete user authentication error handling for user sign up, sign in,
     change password and sign out to promote user experience.

4.  Full support of wine API AJAX events with custom back end Rails
     server that can create, read, update and delete wine data in
     a Postgres SQL database using custom GET, POST, PUT/PATCH, and DELETE
     requests.  All actions which change data are authenticated and the changed
     data is "owned" by the current user performing the change.

5.   Use of jQuery and Handlebars templates for DOM manipulation and event
     handling.

6.  Use of Material Design (http://materializecss.com/) front end framework.


# Front-End Client Application URL

-   [`Front-End Deployed App`] (https://conorjennings.github.io/wine-cellar/)


## GitHub Application Repositories

-   [`Front-End Client`](https://github.com/conorjennings/wine-cellar)
-   [`Back-End API`](https://github.com/conorjennings/wine-cellar-api/)


## Heroku API URL

-   [`Heroku API URL`](https://wine-cellar-api.herokuapp.com/)



## List of Servers Used

Front-end:
  GRUNT server (http://localhost:7165/)

Back-end Rails server:
  http://localhost:4741/ (for development only)
  https://wine-cellar-api.herokuapp.com (production only)


  ## Wireframes
  My wireframes can be found at the links below. As I got approached my MVP I then reviewed and tweaked my design to make it cleaner and more understandable.
  ![Wireframe](http://i.imgur.com/1AlGXOV.jpg)
  ![Wireframe](http://i.imgur.com/R1c28Jm.jpg)

  ## ERD
  This is stored here on imgur:
  ![Wireframe](http://i.imgur.com/idSuf49.jpg)

  ## Sample Screens:
  ![Wireframe](http://i.imgur.com/1Hbi30z.png)
  ![Wireframe](http://i.imgur.com/OGJ7imL.png)
  ![Wireframe](http://i.imgur.com/5MDTx0G.png)

  ## User Stories Used

  1.	As a user, I want to sign up and create an account.
  2.	As a user, I want to sign in so I can inventory my wine cellar.
  3.	As a user, I want to be able to change my password.
  4.	As a user, I want to be able to sign out of the application.
  5.	As a user, I want to create a new bottle of wine.
  6.	As a user, I want to view all wines in my cellar.
  7.	As a user, I want to update an existing wine in my cellar.
  8.	As a user, I want to be able to delete wine in my cellar.


## Planning and Software Design - Development Process


## Planning - Problem Solving Strategy

1.  Using Google Chrome Development Tools (Inspect) was a big help on this project in detecting niggly issues.
2.  Added console.log messages to codein more places that I care to remember, but they helped out big time.
3.  Occasionally added the Chrome debugger and step through code examining variables and logic.
4.  Google issues (i.e. meterializecss) to ramp up on Material Design

## Coding Standards

1.  Used git source code control and GitHub repositories daily. Created several branches (authentication, crud, ux, debug, caps).
2.  Deployed often and deployed early. This saved me a ton of last minute panic scenarios from prior projects!
2.  Commented code to describe use of functions and variables as well as authorization and client/API logic.
3.  Followed all linter suggestions including proper spacing and indentations. Had to turn off one linter that conflicted with Materialize.Toast()
4.  Frequent and small commits to git hub repository.
5.  Followed separation of concerns as often as possible.



## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
