### [⬅](https://github.com/tprzytula/react-patterns)
# Render Props

### Introduction
Render prop allows users to be in charge of what they want to render when using our component.
It's a great tool to share functionality between components.

In this example the `<Storage>` component helps with managing data.
User of the component can add/remove and get the current state of the storage.
 
In this example the **data** is simply stored in the **LocalStorage** but it could
also be a wrapper for any database system.

### API

The **Storage** component gives you an API that allows you to store and manage your items.

**Properties:**

* **items** - current state of storage

**Methods:**

* **add** - pushes item to the storage
* **remove** - removes item from the storage

### Usage

Wrap your elements with the `<Storage>` component and use it's methods to manage your store.

### Pros
* reusability, multiple components can be wrapped with the `<Storage>`
* user of the component doesn't need to worry about the implementation details of the storage

### Demo

<img src="./demo/RenderProps.png" width="250">