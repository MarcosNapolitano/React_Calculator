# <div align="center">Calculator</div>

This is originally a final project in the front-end course from [freecodecamp.org](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator). You can visit my version [here](https://marcosnapolitano.github.io/React_Calculator/)! :rocket:

This is one of my first react apps, I used class components since that was the way it was taught in course.
It's a simple calculator, supporting up to 15 digits, that can be used with the numpad keys. It proved a nice challenge for my coding skills at the time. I have cleaned the code since then to make it more clear, but I left the core ideas present in order to preserve the way I used to code. My main inspiration for this app was Windows own calculator, I really like the way it feels and performs so I tried to emulate it as much as possible. It is far from perfect, but it is a nice time stamp from that point in time.

## Tech Stack

* CSS
* React
* Vite - as local server and app starter.

## Quickview

![Screenshot of the site](https://marcosnapolitano.github.io/Assets/thumbnail5.jpg)

## Quickstart

*Make sure both node.js and npm are installed on your OS.*

1. Fork the project.
2. Clone project using `git clone git@github.com:<YOUR-USERNAME>/React_Calculator.git`.
3. Navigate into the project using `cd React_Calculator`.
4. Run `npm install` then `npm audit fix` (this is a Vite Server security issue).
6. Finally run `npm run dev`.
7. Now the app is running at `localhost:5173/React_Calculator/`.

## Docs

All logic contained in `App.jsx` in the `App` folder. It holds the main `App` class component.

`componentDidMount()` and `componentWillUnmount()` are called as a good practice in order to add and remove the event listener.

This is a pretty imperative app, as it relies in a lot of *if* cases, but the main idea was to separate the input numbers by "number1" then hit an "operator" then "number2". Also the idea was to operate on the result itself (the result of a first operation) both with new operators and with the *enter* key. Nevertheless the code is commented enough to clearly show what is going on. 

## Final Notes

This site was deployed using [GitHub Pages](https://pages.github.com/). A workflow provided by Vite is included to build the app correctly.