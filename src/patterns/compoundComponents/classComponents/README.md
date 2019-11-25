### [⬅](https://github.com/tprzytula/react-patterns)
# Compound components

### Introduction

Compound components provides users of your library with a big flexibility
when it comes to usage of it's internals. Only the needed parts can be picked and
ordered in a desired way with the possibility to mesh them with any other custom components.

In this example our component will help the user to build their own CV profile.

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
