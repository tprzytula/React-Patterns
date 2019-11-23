# React patterns
Simple examples of react patterns.

#### Demo

To start the app simply run ```npm run start```.

Your app should start on ```localhost:3000``` where you can navigate through patterns.

[Live demo](http://react-patterns.tprzytula.me)

#### Patterns

* **[Compound Components](./src/patterns/compoundComponents)**
* **[Render Props](./src/patterns/renderProps)**
* **[Render Props (recreated using hooks)](./src/patterns/renderPropsHooks)**
* **[State Reducer](./src/patterns/stateReducer)**
* **[State Reducer (recreated using hooks)](./src/patterns/stateReducerHooks)**

#### Files

Each pattern located in ```src/patterns``` contains:
* **api/index.js** - API which is using the pattern
* **index.js** - Example usage of the API

Imagine that the **api** directory to be a npm-module that you included in your project. The **API** allows you to write readable code by providing you with many tools.
 
Try to play around in the example file to understand the benefits of it.

#### Inspiration credits

The idea to create this repository came from completing the [Advanced React Patterns](https://frontendmasters.com/courses/advanced-react-patterns/) course from [Kent C. Dodds](https://github.com/kentcdodds)
