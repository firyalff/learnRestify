# learnRestify
REST server using Restify, MSC pattern. This restify sample API written fully in ES6 syntax (But not import and export, since node JS only support this in experimental mode). M stands for Model, S stands for Service, and C stands for Controller. 

Arsenal used in this project:

 - Bookshelf and Knex
 - Jsonwebtoken
 - Newrelic

Configs are stored in JSON format, separated by context (not environment), which you can find in `./configs` directory. Routes are written in JSON files, you just need to write prefix, controller, and middleware (single route and group) in routes JSON files, located in `./app/routes` directory.

Feel free to give suggestion by opening up an issue in this repository. There's no written test and brief documentation yet, but i'll finish those A.S.A.P. 

Happy engineering!!!
 
