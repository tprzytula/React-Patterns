### [⬅](https://github.com/tprzytula/react-patterns)
# [Render Props example](../classComponents/README.md) recreated using hooks

### Introduction
Using hooks we were able to recreate the render prop example in a much simpler and more intuitive manner.

The `<Storage>` component was replaced with the `useStorage` hook.
It still provides add/remove methods and the current state of the storage but you don't need wrapper for your components. 

### API

The **Storage** component gives you an API that allows you to store and manage your items.

**Properties:**

* **items** - current state of storage

**Methods:**

* **add** - pushes item to the storage
* **remove** - removes item from the storage

### Usage

Import the hook and use it's methods and values

### Pros
* reusability, multiple components can use the hook
* user of the component doesn't need to worry about the implementation details of the storage

### Demo

<img src="./demo/RenderPropsHooks.png" width="250">
