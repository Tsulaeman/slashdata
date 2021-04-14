## Starting the app
Use the shell script to start both UI and API servers by running `./start.sh`

If you want to start the servers individually cd into each root dir and run `npm run start`

## Database
I am using SQLite to make things easy to setup here. The db is in ./api
###
To run the migration, cd into the ./api directory.
Run `npm run migrate`
Then run `npm run seed`

Now your DB is setup with some test data. I have removed the db to reduce size of the project, it should autogenerate when you run the commands. If it doesn't just run from your root dir `touch ./api/db.sqlite3`

## Environment variables
Please copy/rename the .env.example in each project folder to .env
You can replace the env varriable value to what suits you or just leave the default.