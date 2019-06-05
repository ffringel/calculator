[![Build Status](https://travis-ci.org/ffringel/calculator.svg?branch=master)](https://travis-ci.org/ffringel/calculator)

# Calculator App

## Problem Statement

Design a A calculator website which logs calculations as they happen and shares those calculations with everyone connected to the website. For example, user A and user B go to your site at the same time. User A calculates "5 + 5", which equals "10". This is logged below the calculator as "5+5 = 10". User B is updated about this calculation right after user A posts it. Now, user B calculates "3x_4". This calculates to 12 and displays "3x_4=12" right below the prior calculation. User

A sees this update immediately after user B posts it. Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest. Once the calculator is completed, send me the URL for your application.

### Tools used

- nodejs
- reactjs
- socket.io
- express

## Using the app

### 1. Visit: [https://le-calculator.herokuapp.com/](https://le-calculator.herokuapp.com/)

### 2. Build the App

- Clone this repo and navigate to it's root
- Run `npm install` to install all dependencies
- Start app server using `node server`
- Start the client using `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view app in browser

## CI/CD

CI/CD has been configured such that for every push to this repo, Travis CI runs the tests, and if all tests pass, it gets deployed automatically to the Heroku cloud.
