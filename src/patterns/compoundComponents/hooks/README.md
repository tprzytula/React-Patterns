### [⬅](https://github.com/tprzytula/react-patterns)
# Compound components

### Introduction
This is an example of how to have compound components with purely functional components.

We will recreate the previous example that was written using class components to showcase the differences and similarities between two approaches.

### API

You can use following components:

* **Badge** - Small badge with avatar and name
* **Profile** - Profile of the user
* **Social** - Links to social pages
* **Skills** - List of skills grouped by categories

To use them u need to pass **"user"** prop to the parent component.
Each component will get access to this props and use some of the values from there.
Check *data/profileData.json* for details.

### Fun things to do with the user implementation (index.js)

* play around and reorder the components
* add your own component in between of them
* wrap one of the components with your own element and style it differently

### Demo

<img src="./demo/CompoundComponents.png" width="250">
