# Kroger Technology Glycol Probe Application

Web application designed for Kroger Technology's Glycol Probe Certification Program.
This application stores probe data, updates probe data, displays relevant stats, and displays probes that need to be recertified. This repository contains the full application (Front end production build + Server). The front end was developed on a separate repository which is located at [Glycol Probe Front End](https://github.com/Jbveas01/glycolprobes).

The full application is also hosted on Heroku found here: [Glycol Probe Application](https://ancient-hollows-84500.herokuapp.com/)

## How to run

1. Clone the repository
2. Install nodejs
3. In cloned folder run the following commands:
   `npm install`
   `npm start`
4. Once application has started navigate to [localhost:3001](localhost:3001)

## Features

- Posts Data from form to MongoDB atlas
- Gets Glycol Probe data from MongoDB and displays it
- Grabs data from multiple arrays and displays it in tables
- Utilizes Regex for proper Probe Serial # formatting on input form
- Uses the current date and displays how many days until probes are expired (2 years)
- Visualizes data in multiple graphs on Dashboard
- Uses an Express web server to handle server side routing and logic
- Developed using MERN stack.
