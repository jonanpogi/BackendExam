must have technologies:
    node and mysql

getting started:
    npm install - to install node packages

    setting up the database:

    make sure to enter your db credentials within ./configs/configs.js file
    npx knex migrate:latest - to migrate the user table inside database
    npx knex seed:run - to run the seeder script

    node index.js - to run the app

how to test: (make sure to stop the app before running the test scripts)
    npm test - to run the test scripts
    