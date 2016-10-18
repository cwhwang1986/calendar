## About
This is a minimum viable product, a calendar to help users plan their course schedule.
All the avaliable courses are from bigCatalog.json file.

Below are features implemented in this calendar page:

● As a user, I must be able see all the courses in my course catalog
● As a user, I must be able to see my calendar
● As a user, I must be able to select and unselect courses
	○ When I select a course, I should see that course populate on my calendar
	○ When I unselect a course, I should see that course disappear from my calendar
● As a user, I must be able to unselect a course from the calendar itself
● As a user, I must be informed when I try to select courses with a time conflict
● As a user, I must be able to name my calendar (The idea is that we would hook the
application up to a backend API that persist their calendar)
● As a user, I must be able to edit the name of my calendar
● As a user, I must be able search course in the catelog


## Deployment
You must run the script from this directory: calendar-data/, because it always expects to find package.json in the directory.

	npm install && npm start

and then go to localhost:3000.


## Development
To continuously watch for changes and automatically rebuild and serve the files, run from this directory: calendar-data/. If it's the first time installing the app, please run npm install first, and then run  
    
    npm run watch



## Built with
1. React
2. Grunt
3. Webpack 
4. Node express
5. EJS


