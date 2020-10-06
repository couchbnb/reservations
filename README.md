# reservations
handles couchbnb booking reservation dates
Description: handles couchbnb booking reservation dates
Author: James Scolamieri

# port
localhost:3005

# database
mySQL 5.7

# component file system
reservations/index.js -- server start file
  |
  |--reservations/public/index.html
      |
      |--reservations/bundle.js -- webpack bundle
          |
          |--reservations/src/index.js -- React mounting file (bundle source)
              |
              |--reservations/src/components/App.js -- parent React component



### SETUP INSTRUCTIONS ###

# init
1. npm install

# seed data
1. check out reservations/database/seeder.js
2. run CLI mysql -u root -p < schema.sql
3. set up your own config file at reservations/database/config.js (template in folder)
4. run seed script in CLI "npm run seed"
    - this will delete any data, but it does not drop database at this time
    - if you need to reseed from listing #1, you need to drop db and start from step 2

# launch server
1. npm start



### additional instructions for development ###
1. npm run build (sets webpack up to recompile app on changes)