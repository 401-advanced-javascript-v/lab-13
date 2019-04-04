![CF](http://i.imgur.com/7v5ASc8.png) LAB-13
=================================================

## Bearer Authorization

### Author: Vanessa

### Links and Resources
* [repo]()
* [travis]()
* [back-end]()

#### Documentation
* [jsdoc]()

### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - MONGODB_URI=mongodb://localhost:27017/stuff
* `SECRET` - hello

#### Running the app
* First tab
    * mongod --dbpath=/Users/erintrainor/codefellows/data/db 
* Second tab
    * mongo
* Third tab
    * nodemon

* CLI to get the bearer token
    * http post :3000/signin "Authorization:Tokenkey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTUzMTU4NjUxYzA4NWIzYTRmZjY5ZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTU0MzMwNzMwfQ.Scjq8MUc-jFcHCC8JWlXBW4N7h-XTWuqGQAVpU3fHks"

#### Tests
* How do you run tests?
  * npm run test
* What assertions were made?
  * Just the tests that came with the starter code
* What assertions need to be / should be made?
  * The additional tests requested in the lab docs

#### UML

