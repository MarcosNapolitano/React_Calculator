# <div align="center">Calculator</div>

This is originally a final project in the front-end course from [freecodecamp.org](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator). You can visit my version [here](https://marcosnapolitano.github.io/React_Calculator/)! :rocket:

This is one of my first react apps, I used class components since that was the way it was taught in course.
It's a simple calculator, supporting up to 15 digits, that can be used with the numpad keys. 

## Tech Stack

* CSS
* Jquery - for easier selectability purposes only.
* Jquery Ui - handles both the fade in and out in an easier way.
* React
* Vite - as local server and app starter.

## Quickview

![Screenshot of the site](https://marcosnapolitano.github.io/Assets/thumbnail1.jpg)

## Quickstart

*Make sure both node.js and npm are installed on your OS.*

1. Fork the project.
2. Clone project using `git clone git@github.com:<YOUR-USERNAME>/React_Calculator.git`.
3. Navigate into the project using `cd React_Calculator`.
4. Run `npm install` then `npm audit fix` (this is a Vite Server security issue).
6. Finally run `npm run dev`.
7. Now the app is running at `localhost:5173/React_Calculator/`.


*Disclaimer: I'm using a personal kit from FontAwesome for the Twitter icon. I currently don't know if forking this repo without my FontAwesome's user will break this feature, but if that's the case, you have to set up the icon manually.*

## Docs

All logic contained in `App.jsx` in the `App` folder. It holds the `App` class component whose state consists of an object with six elements.

* Quotes: An array of quotes.
* Authors: An array of authors.
* Colors: An array of Css rgb values.
* Quote: Current quote.
* Author: Current author.
* Color: Current color, `rgb(143, 35, 35)` is set as default.

The file called `data.js` is where the actual quotes, authors and colors can be found. They are exported and then imported into `App.jsx` for better legibility purposes.

`componentDidMount()` and `componentWillUnmount()` are called as a good practice in order to add and remove the event listener. However, `componentDidMount()` also calls `this.newQuote()` in order to generate a quote when first entering the site.

### `newQuote()`
This is the method that handles all the changes in the site. It initializes two variables for storing indexes, one for the authors, quotes and another one for the colors. The same variable can't be used since there are fewer colors than quotes, on the other side, quotes and authors indexes correlate to each other in the original arrays. This was originally designed to use the same author index twice. Both indexes are generated using `Math.floor()` and `Math.random()`, but they are limited to each one of their respective *parent's array* lengths.


Once the indexes are generated, `Jquery` is used to select the elements containing the author and the quote. Then `Jquery Ui` fades both of them out. That's when `setTimeout()` is called (the delay time being the same time it takes the fade out to complete) to set the new current *Quote*, *Author* and *Color* states. Finnaly `Jquery Ui` makes the color transition and fade the elements back into view.

## Final Notes

This site was deployed using [GitHub Pages](https://pages.github.com/). A workflow provided by Vite is included to build the app correctly.