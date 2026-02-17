# Namaste React 🚀


# Parcel
- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling- support older browsers
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking- remove unused code
- Different dev and prod bundles


# Two types of Export/Import

- Default Export/ Import

export default Component;
import Component from "path";

- Named Export/Import (When you have to export multiple things)

export const Component/ CONST_NAME
import {Component/ CONST_NAME} from "path";


# React Hooks 
(Normal JS utility functions)
- useState() - Superpowerful State Variables
- useEffect()


# App sturcture
- Create components for below

- Create a food ordering APP which will consists of below components
- Header - Add logo on the left and the navigation links on the right
- Body- Create a body with Search bar on the top and add card containers at the bottom
- Footer- Add footer with basic copyright text and few links


# 2 types of Routing in React 
- Client side routing
- Server side routing

# Redux Toolkit 
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect store to our application
- Slice (cartSlice)
- Dispatch Action
- Selector

# Types of Testing (developer)
- Unit Testing - To test react one/ specific component in isolation
- Integration testing- Testing multiple interating component to perform one action
- End to End testing (e2e testing) - When user land on the page and leaves the page the whole user flow gets tested in e2e 
- e2e requires different tools like cypress, Selenium


# Setting up Testing in our App
- Installed React-Testing-Library
- Installed JEST
- Installed Babel(transpiler) dependencies (which are required when we use Babel with Jest)
- Configure Babel.config.js
- Configure Parcel config to disabled default babel transpilation from Parcel- .parcelrc file
- Jest configuration > npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Install @babel/preset- Inside babel.config.js file
- Install npm i -D @testing-library/jest-dom 
- Do Jest configuration with npx jest --init
-  Setup Jest environment- npm install --save-dev jest-environment-jsdom




