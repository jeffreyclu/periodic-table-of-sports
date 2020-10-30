# Periodic Table of Sports

## Contents

- [Introduction](#Introduction)
- [Architecture](#Architecture)
- [Prerequisites](#Prerequisites)
- [Installation Instructions](#Installation-Instructions)
- [Available Scripts](#Available-Scripts)
- [Working Example](#Working-Example)

## Introduction

This project is a collaboration with the Sports team at Perkins Eastman. The Periodic Table of Sports presents over 80 differrent sports in a "periodic table" format. The table is sortable by different attributes such as Type and Cost, and filterable by attributes such as Professional or Olympic sports.

![Screen Shot 2020-10-30 at 10.27.20 AM](https://raw.githubusercontent.com/jeffreyclu/periodic-table-of-sports/3da247b9fe008a806cf2f81d3e757fbd78ce900f/README.assets/Screen%20Shot%202020-10-30%20at%2010.27.20%20AM.png)

## Architecture

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

| Area of Focus           | Technology          |
| ----------------------- | ------------------- |
| Frontend UI             | [React](https://reactjs.org/)               |
| Component Styling       | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)   |
| Database                | [Google Sheets API](https://developers.google.com/sheets/api)      |
| Server                  | [Express](https://expressjs.com/)             |

## Prerequisites

In order to run this application, the following are required:

- [Node.js](https://nodejs.org/en/) 14.15+
- An IDE (Integrated Development Environment) - [VS Code](https://code.visualstudio.com/) is recommended
- [Git](https://git-scm.com/)
- A [Github](https://github.com/) account
- A [Google](https://google.com) Account
- A [Google API developer](https://developers.google.com/) key

## Installation Instructions

1. Download and install [Git](https://git-scm.com/downloads)

2. Download and install [VS Code](https://code.visualstudio.com/download)

3. Download and install [Node.js](https://nodejs.org/en/download/)

4. Create a [Github](https://github.com/) account, login, and fork this repo

5. Open VS Code and navigate to a local working folder (e.g. My Documents)

6. Open a terminal window in VS Code and navigate to the same working folder by using the `cd` [command](https://www.howtogeek.com/659411/how-to-change-directories-in-command-prompt-on-windows-10/).

7. In the terminal window, run the command `git clone [your-repo-url]` to clone your forked repo locally on your computer

8. In the terminal window, run the command `cd periodic-table-of-sports` to change the working directory

9. Open a browser, login to Google and make a copy of [this sheet](https://docs.google.com/spreadsheets/d/1fWhPRda2Nb9umDM6NCScFV12WcR-QC9XT0gKat1IBIk/edit?usp=sharing)

10. Click File -> Publish to the Web. Ensure that Entire Document and Web Page are selected and click Publish.

11. Click File -> Share and then enable sharing for `Anyone with the link`.

12. Open a new tab and login to the [Google Developer Console](https://console.developers.google.com/apis/dashboard).

13. In the console, create a New Project and name it `periodic-table-of-sports`.

14. Once the project is created, click Credentials on the side bar. Near the top of the screen click Create Credentials and select API Key. Copy the API Key and Click Close for now.

15. Near the top click `ENABLE APIS AND SERVICES`. Search for `Google Sheets API` and then enable the service. Once it's enabled, go back to the main dashboard.

16. In VS Code, create a new file called `.env` in the `periodic-table-of-sports`folder. This environment file will hold the links to your Google Sheet as well as your Google Developer API Key. For security purposes, the spreadhseet links or API Key will never be published to github as long as the `.env` file is included in the `.gitignore` folder.

17. Copy and paste the following into the `.env` file:

      ```
      REACT_APP_SPREADSHEET_LINK=https://sheets.googleapis.com/v4/spreadsheets/[your-google-sheet-id]/values/Levels?key=[your-google-developer-API-key]
      ```


18. In the `.env` file, replace `[your-google-sheet-id]` with the Sheet ID from your Google Sheet URL (see screenshot below) and replace `[your-google-developer-API-key]` with the API key generated in step 12. Save and close the `.env` file.
![Sheet ID Screenshot](https://raw.githubusercontent.com/jeffreyclu/interactive-stacking/master/README.assets/Screen%20Shot%202020-10-28%20at%203.23.11%20PM.png)

19. In the terminal window, run the command `npm install` to install all required packages.
20. In the terminal window, run the command `npm start` to start the application in Development mode.
21. Visit http://localhost:3000 to view the app.
22. Make changes to `src/components/app/app.js` and watch the changes live in the browser.
23. To build and serve the app, run the command `npm run serve` to build and serve the application in Production mode.

##  Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run serve`

Builds and serves the static files in the [build](#npm-run-build) folder using a simple express.js server. The app will be available at http://localhost.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Working Example

https://jstable.herokuapp.com/
