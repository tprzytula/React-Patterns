### [⬅](https://github.com/tprzytula/react-patterns)
# [State Reducer example](../classComponents/README.md) recreated using hooks

### Introduction
This is an example of how to manipulate internal state of a custom hook.

We will recreate the previous example written with class components to showcase the differences and similarities between two approaches.

The `<Repeater>` component was replaced with the `useRepeater` hook.
It still provides increase/decrease methods and the list of component copies.

### API

**Props:**

* **element** - component/element to be copied
* **stateReducer** - reduces internal state changes
* **initialAmount** - sets the starting amount of copies

**Methods:**

* **increase** - add another copy of our element
* **decrease** - removes one of the copies
* **RepeatedComponents** - List of components

### Demo

<img src="./demo/StateReducerHooks.png" width="250">
