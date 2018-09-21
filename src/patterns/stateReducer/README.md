### [⬅](https://github.com/tprzytula/react-patterns)
# State Reducer

### Introduction
State Reducer allows the user to interfere with the internal state of a component.
This enables deep customization.

The purpose of `<Repeater>` component is to copy a provided element x amount of times.
It gives tools to increase and decrease the amount of copies.

In this example it will be used to control the amount of stars in a review form.
Review form in this use case requires to have at least 1 and no more than 6 stars.
State Reducer pattern will be handy to fulfill this requirement.

### API

**Props:**

* **element** - component/element to be copied
* **stateReducer** - reduces internal state changes
* **initialAmount** - sets the starting amount of copies

**Methods:**

* **increase** - add another copy of our element
* **decrease** - removes one of the copies

### Demo

<img src="./demo/StateReducer.png" width="250">