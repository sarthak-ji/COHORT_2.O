- LocalStorage -> Browser ki ek small storage (5-10 MB)

- localStorage.clear(): to clear localStorage.
- localStorage.setItem("key", "value"): to add new item or, overwrite existing ones.
- localStorage.getItem("key"): to get any item.
- locaStorage.removeItem("key"): to remove any item.

- JSON.stringify: array/object -> string
- JSON.parse: string -> array/object


NOTE:
1. 
Axios se jo bhi data aata hai, ya phir aap kabhi bhi kisi api ko call karte hain, toh woh data promise (pending) ke form me aata hai, toh hum async js ka use karenge waha par!

2. 
React: UI banana -> main stack wala saara kaam
useEffect: Ye hook use hota hai kisi bhi task ko side stack me chalane ke liye or, side by side wali cheezon ko chalana like API calling, timer chalana, error handling, animation execution, etc.

3. 
React-Router-dom:
- install react router dom "npm i react-router-dom"
- in main.jsx "import {BrowserRouter} from 'react-router-dom'"
- wrap by BrowserRouter in main.jsx file
- In App.jsx "import { Route, Routes } from 'react-router-dom'"
- make (collection of all route) and inside make
- In mention path (where to go) and elements (what to render) attributes
- In Navbar Use by 'react-router-dom' tag to redirect to any specific route
- Make Navbar Component as well and add it before in App.jsx
- Nestes Routes can be made by writing in this way - path="/product/men"
- Dynamic Routes can be made by writing this way - path="/product/:id"
- You can access id by using useParams() hook inside that component you rendered in a Dynamic Routing

4. 
React - Single Page Applications (URL Change hone pe kuch nahi hota tha!)
REACT-ROUTER-DOM - came to solve this problem

* Types of Routers:-

1. BrowserRouter:
- History API
- URL clean
- modern apps
- Good SEO
- Needs Server Config.

2. Hash Router - contains - /courses/#/about - Older Browsers - No SEO

3. Memory Router - React Native

4. Static Router - SSR

Routes - Container Route - If URL(path) is X then show Y