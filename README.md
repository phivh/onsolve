## Implement an application called “MarvelManager” that has
- A Home Page that lists all Marvel’s characters in 3 columns: Name,
Description (if available, limit to 100 letters) and Thumbnail. The data
(result)=>{
given by Marvel Comics API (see below to know how to use Marvel Comics API)
Here is a mockup (just sample)
 
- When use click on the Marvel’s Thumbnail, it displays the Details Page which show all information about that character: name, image, full description, list of available comics (including comic’s description & thumbnail)
Mockup:
 
Technology: you can use any front-end libs, framework that you are familiar with: ReactJs, AngularJS or even jQuery
Unit tests are required
Marvel Comics API:
- Follow this link to register an account:
https://www.marvel.com/register?referer=https%3A%2F%2Fdeveloper.
marvel.com%2Faccount
- Get public/private keys and having a look at this URL to understand how to call the APIs: https://developer.marvel.com/docs
Nice to have:
- Beautiful UI design/ Responsive design using UI framework and libs (Bootstrap, PureCSS...)
- Working well on multi-browsers
- Pagination OR infinite loading on Home page
- Can use keyboard to navigate (TAB & SHIFT-TAB to move between items, press ENTER to access)
- Deploy your app on a live server & send us URL
- CI/CD implemented

## ReactJs Marvel Manager - Listing All Comics Marvel [![Build Status](https://travis-ci.com/phivh/onsolve.svg?branch=marvelmanager)](https://travis-ci.com/phivh/onsolve)

The project is built to demonstrate my knowledge in ReactJS and other compliment stuffs such as Redux, Material UI, Travis-CI and how I as a FrontEnd Developer structure an application with difference features and components.

### Enviroinment
- Node.js (v10)
- Yarn 
- Mavel API public key but still get 401 Unauthorized though I got developer key (https://developer.marvel.com/account) - try fixing now.
### How can run this app locally
1. Clone this repo
```
git clone https://github.com/inglkruiz/react-marvel-api.git
```
2. Instal dependencies pkg by Yarn
```
yarn install
```
3. Change your Marvel API public key following folder
```
./src/configs/config.js => replace your public key
```
4. Start and run the app
```
yarn start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
5. Test
```
yarn test
```
Jest will look for test files with any of the following popular naming conventions:

This project was based on Create React App.





