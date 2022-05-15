# Seneca Learning Component

This component was created for Seneca Learning as a React showcase by Alexander Skelton.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Downloads required dependencies for the project.\

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Assumptions

1. I have assumed an ES2015 capable browser as I have set tsconfig file to target es6. I have tested in the latest version of Mozilla Firefox and Chrome.
2. I have implemented components as hooks instead of classes.
3. I am managing state with Redux. At first, I thought this might be over-engineering the solution, but with components at multiple levels of the hierarchy relying on the state of selected options, it made sense to use react instead of passing large numbers of props.
4. I have not made use of a grid system framework like Bootstrap. Instead, my components mostly use flex layout combined with percentage widths to response to the screen size.
5. I have used typescript to specify prop types.

## Limitations

While the component is responsive down to 320px I don't have a CSS media query to switch from column-based options to row-based options at a particular size. I have a possible query commented out in the index.css file, but it doesn't co-operate with the highlight implementation in its current form.

## Lessons Learned

> Initially, I tried to represent the active responses (selected options) as a JavaScript Map (key = rowId, value = optionId) and store the map in the Redux state. It turns out that this isn't possible as Redux state must be serialisable, and Maps can't be serialised. I opted to use a plain-old **any** object, with properties storing my key-value pairs.

> By far, the most challenging part of this project for me was the animation: getting the highlight to slide. Initially I was simply changing the CSS background colour for active items. However, when following this approach I found the only available animation was fading out the background colour of the previous option and fading in the background colour of the new option. In the end I abandoned this approach and replaced it with a system where an absolutely positioned, semi-transparent `<div>` overlaps the active option on each row. I then used a CSS transform (translate) to handle the slide animation. This raised another issue where the size of the highlight would not match correctly if the window was resized. I fixed this by attaching a resize event listener to the window which allowed me know when to resize and reposition the highlight. I'd love to know if there is an easier way to do this!
