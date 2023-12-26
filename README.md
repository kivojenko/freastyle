# Getting Started with react-components

This project aims to create simple and usable library of React components.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode to see all the components and test their work.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Implement into your app

### To make edits to the library while using it in your local app,

- clone this repository
- add to your app dependencies `"react-components": "C:\{path-to-your-folder}\react-components"`
- add to your app tsconfig.json compilerOptions
  `
"baseUrl": "./",
"paths": {"react-components": ["C:\{path-to-your-folder}\react-components"]}`
- you do not need to run this project
