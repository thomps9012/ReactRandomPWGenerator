# React Random Password Generator

A simple one page application that you can run locally to generate random password, based on factors such as length, special characters, uppercase / lowercase, etc.

Feel free to run the app locally or if you'd like to deploy it to heroku follow the instructions on deployment below.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### Advanced Configuration



### Deployment

If you'd like to deploy this app, I'd recommend Heroku, as it's easily set up to handle React.js deployments. This can also all be accomplished via the terminal / command line (as long as you have an active heroku account).

----
```
<!-- places the terminal in our project -->
git init
<!-- adds mar's heroku buildpack to the project  while also creating the heroku project-->
heroku create -b https://github.com/mars/create-react-app-buildpack
git add .
git commit -m "add in your description here"
git push heroku master
heroku open
```
----
#### Success!