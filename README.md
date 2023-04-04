<div align="center">

<img src="https://user-images.githubusercontent.com/99184393/211183762-03b6e9b4-9fcd-4874-a0e4-20cf00537c06.gif" alt="logo" width="400" height="auto" />
  
</br>

![React](https://img.shields.io/badge/react-v18.1.0-fc2323.svg)
![Firebase](https://img.shields.io/badge/firebase-9.8.1-F57C00.svg)
[![sass](https://img.shields.io/badge/Sass-1.52.1-ff369a.svg?)](https://github.com/prettier/prettier)

![](https://img.shields.io/badge/Maintained-Yes-indigo)
![](https://img.shields.io/github/stars/jadeli1720/netflix-clone.svg)
![](https://img.shields.io/github/last-commit/jadeli1720/netflix-clone.svg)

<a href="https://flickfinder-jadeli1720.vercel.app/" target="_blank">VIEW DEMO</a>

</div>

#

## :scroll: Table of Contents
- [About the Project](#sparkles-about-the-project)
- [Features](#film_strip-features)
- [Tech Stack](#books-tech-stack)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Environment Variables](#key-environment-variables)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)


## :sparkles: About the Project

An iterative Netflix clone project that uses React, Firebase for authentication, the  <a href="https://www.themoviedb.org/?language=en-US" target="_blank"><img style="margin: 0px 4px 0px" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="tmdb logo" width="70px" /></a> API, React bootstrap and [other](#books-tech-stack) libraries

<!-- 1 or 2 gifs or images need to go here of the app -->
## :film_strip: Features

<details>
  <summary> 📦 Current </summary>
  <ul>
    <li>Homepage with FAQ accordion</li>
    <li>Sign in/Sign up  and log out functionality</li>
    <li>Once logged into the application and a user selects their profile, a banner displays an available trailer or poster image.</li>
    <li>User can browse the rows of movies/tv shows that are organized by various genres.</li>
    <li>Custom button sliders for easy row navigation.</li>
    <li>Click on a particular movie/tv show to see that movies/tv shows details, including a trailer.</li>
    <li>Feature modal also includes a list of recommended movies/tv shows that are similar to the selection.</li>
  </ul>
</details>

<details>
  <summary> 🔮 Future </summary>
  <ul>
    <li>Search Bar functionality.</li>
    <li>Sign in/Sign up  and log out functionality</li>
    <li>Refactor with Redux or Context to handle state.</li>
    <li>When user clicks on a movie in the list of recommended movies/tv shows, navigate to it in a new feature modal.</li>
    <li>Error handling.</li>
    <li>Add tests.</li>
    <li>Lighthouse testing and improvements.</li>
    <li>Accessibility improvements.</li>
    <li>Possible redesign and renaming.</li>
    <li>Payment implementation (stripe)</li>
  </ul>
</details>


## :books: Tech Stack

<details>
  <summary>🖥️ Front End</summary>
  <ul>
    <li>Axios</li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://react-bootstrap.github.io/">React Bootstrap</a></li>
    <li><a href="https://react-icons.github.io/react-icons//">React Icons</a></li>
    <li><a href="https://www.npmjs.com/package/react-player">React Player</a></li>
    <li><a href="https://www.npmjs.com/package/react-ratings-declarative">React Ratings Declarative</a></li>
    <li><a href="https://sass-lang.com/">Sass</a></li>
  </ul>
</details>

<details>
  <summary>🗝️ API and Authentication</summary>
  <ul>
    <li><a href="https://firebase.google.com">Firebase</a></li>
    <li><a href="https://www.themoviedb.org">The Movie Database</a></li>
  </ul>
</details>

## :hammer_and_wrench: Getting Started

### :stars: Prerequisite Set up

#### :fire: [Firebase](https://firebase.google.com/)

- A Firebase account and project will need to be created in order to use the Authentication setup currently available in the project.
- If you are unfamiliar with Firebase, I used the following [tutorial](https://youtu.be/x_EEwGe-a9o?t=11416) from [Karl Hadwen](https://youtu.be/x_EEwGe-a9o?t=11416) to set up the account and authentication database for this app.
- Or you can follow thier own documentation  [here](https://firebase.google.com/docs/web/setup)



#### :movie_camera: [The Movie Database](https://www.themoviedb.org) API

- Create an account with TMDB
- Use the following [ API Documentation](https://developers.themoviedb.org/3/getting-started/introduction) to create a API Key

### :closed_lock_with_key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```js
REACT_APP_TMDB_APIKEY=value
REACT_APP_FIREBASE_UUID=value
REACT_APP_FIREBASE_APIKEY=value
REACT_APP_FIREBASE_AUTHDOMAIN=value
REACT_APP_FIREBASE_PROJECTID=value
REACT_APP_FIREBASE_STORAGEBUCKET=value
REACT_APP_FIREBASE_MESSSENDID=value
REACT_APP_FIREBASE_APPID=value
```

### :running_woman: Run Locally

#### :keyboard: Clone

```shell
git clone https://github.com/jadeli1720/netflix-clone
```

#### :cd: CD into Project

```shell
cd netflix-clone
```

#### :minidisc: Install Dependencies

```shell
npm install
#or
yarn install
```

#### :white_check_mark: Start App

```shell
npm start
```

:eyeglasses: Open http://localhost:3000 to view the project in the browser.

## Licenses

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
