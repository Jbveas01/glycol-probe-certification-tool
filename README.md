# Kroger Technology Glycol Probe Application

Web application designed for Kroger Technology's Glycol Probe Certification Program.
This application stores probe data, updates probe data, displays relevant stats, and displays probes that need to be recertified. This repository contains the full application (Front end production build + Server). The front end was developed on a separate repository which is located at [Glycol Probe Front End](https://github.com/Jbveas01/glycolprobes).

The full application is also hosted on Heroku found here: [https://ancient-hollows-84500.herokuapp.com/](Glycol Probe Application)

## How to run

1. Clone the repository
2. Install nodejs
3. In cloned folder run the following commands:
   `npm install`
   `npm start`
4. Once application has started navigate to [localhost:3001](localhost:3001)

## Features

[x]Posts Data from form to MongoDB atlas
[x]Gets Glycol Probe data from MongoDB and displays it
[x]Grabs data from multiple arrays and displays it in tables
[x]Utilizes Regex for proper Probe Serial # formatting on input form
[x]Uses the current date and displays how many days until probes are expired (2 years)
[x]Visualizes data in multiple graphs on Dashboard
[x]Uses an Express web server to handle server side routing and logic
[x]Developed using MERN stack.
