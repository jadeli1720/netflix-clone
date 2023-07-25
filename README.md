<div align="center">

<img src="https://user-images.githubusercontent.com/99184393/211183762-03b6e9b4-9fcd-4874-a0e4-20cf00537c06.gif" alt="logo" width="400px" height="auto" />
  
</br>
</br>

![React](https://img.shields.io/badge/react-v18.1.0-61DAFB.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-1.52.1-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-9.8.1-F57C00.svg?style=for-the-badge&logo=firebase)
[![The Movie Databse](https://img.shields.io/badge/TMDB-v3-00C7B7.svg?&style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org)

![Repo Maintained Badge](https://custom-icon-badges.demolab.com/badge/Maintained-Yes-brightgreen?style=for-the-badge&logo=tools&logoColor=white)
![Number of times this repo has been starred badge](https://custom-icon-badges.demolab.com/github/stars/jadeli1720/netflix-clone?style=for-the-badge&logo=star&logoColor=white&color=fff700)
![Last commit badge](https://custom-icon-badges.demolab.com/github/last-commit/jadeli1720/netflix-clone.svg?style=for-the-badge&color=EF2D5E&logo=git-commit)

<a href="https://flickfinder-jadeli1720.vercel.app/" target="_blank">VIEW DEMO</a> 
<p>NOTE: Because this app looks identical to the web browser version of Netflix (at the time of publishing), Google has tagged it as a Dangerous/Deceptive site. I have tried to remedy this issue by putting at the top of the page the TMDB Logo and a clear label stating that this is not the Netflix app, however, this has not removed the warning. Please know that this is the only reason for the warning and nothing else. I have plans to completely rebuild and rebrand this app in the future, but until then, please check out the demo link above; or the gifs below to view it. Thanks for visiting!</p>

</div>

</br>

## :scroll: Table of Contents

- [About the Project](#sparkles-about-the-project)
- [Features](#film_strip-features)
- [Tech Stack](#books-tech-stack)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#stars-prerequisites)
  - [Run Locally](#running_woman-run-locally)

## :sparkles: About the Project

An iterative Netflix clone project that uses React, Firebase for authentication, the  <a href="https://www.themoviedb.org/?language=en-US" target="_blank"><img style="margin: 0px 4px 0px" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="tmdb logo" width="70px" /></a> API, React bootstrap and [other](#books-tech-stack) libraries

### :camera_flash: Screenshots

 <div align="center">
  
#### Homepage

 <img src="https://github.com/jadeli1720/jadeli1720_public/blob/main/home-page.gif" alt="Home page demo">

  </br>

#### Movie/TV-show Browser Page

<img src="https://github.com/jadeli1720/jadeli1720_public/blob/main/browser-page.gif" alt="Movie broweser page demo">

 </div>

## :film_strip: Features

<details>
  <summary> 📦 Current </summary>
  <ul>
    <li>Homepage with GIF's and a FAQ accordion</li>
    <li>User Authentication and account creation supported by Firebase</li>
    <li>Profile page</li>
    <li>The Browser page contains a banner that shows a randomly selected trailer that loops and can be un-muted by the user. If a trailer is not provided, then a poster image takes its place</li>
    <li>Carousel row of movies/tv-shows sorted by various categories and genres</li>
    <li>A User can click on a particular movie/tv-show and a feature modal displays the media's details including a trailer</li>
    <li>Feature modal also includes a list of recommended movies/tv-shows that are similar to the selection</li>
  </ul>
</details>

<details>
  <summary> 🔮 Future </summary>
  <ul>
    <li>Search Bar functionality</li>
    <li>Refactor codebase with Redux or Context to handle state.</li>
    <li>Allow a new modal to pop up when user clicks on one of the recommended movies/tv shows in the Feature Modal</li>
    <li>Add better error handling</li>
    <li>Add tests</li>
    <li>Lighthouse testing and improvements</li>
    <li>Accessibility improvements</li>
    <li>Payment implementation (stripe)</li>
    <li>Full profile page that allows user to change Avatar picture</li>
    <li>Redesign and Rebuild</li>
    <li>Build a backend to handle all data coming from TMDB</li>
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
    <li><a href="https://www.themoviedb.org">The Movie Database (TMBD)</a></li>
  </ul>
</details>

## :hammer_and_wrench: Getting Started

### :stars: Prerequisites

#### :fire: [Firebase](https://firebase.google.com/)

- A Firebase account and project will need to be created in order to use the Authentication setup currently available in the project.
- If you are unfamiliar with Firebase, I used the following [tutorial](https://youtu.be/x_EEwGe-a9o?t=11416) from [Karl Hadwen](https://youtu.be/x_EEwGe-a9o?t=11416) to set up the account and authentication database for this app.
- Or you can follow their provided documentation [here](https://firebase.google.com/docs/web/setup)

#### :movie_camera: [The Movie Database](https://www.themoviedb.org) API

- Create an account with TMDB
- Use the following [ API Documentation](https://developers.themoviedb.org/3/getting-started/introduction) to create an API Key

#### :closed_lock_with_key: Environment Variables

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

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=for-the-badge)
