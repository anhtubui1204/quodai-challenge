# QuodAI React Challenge #2


## Common Scripts

You can run:

### `npm install`

Install libraries and dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

## Learn More

This simple webapp is built using ReactJS v16. with Redux.\
This app fetchs and displays list of github issues.

### Libraries and Dependencies

#### `Bootstrap` for styling:
+ pros: Help me saving more time for developing styling by using the predefined terms such as grid system, background, font config, etc.
+ cons: By having own standard of grid system, selector, or other codes, it limits my design if I become too dependent to Bootstrap. There will be conflict between my css codes with Bootstrap if I am not aware of that.

#### State sharing between the component:
In this app, I use 2 methods for state sharing between the components.\
I use the traditional way which is using props. For example, `Pagination` and its parent `HomePageContainer` both use state "page", so I move up the "page" to the parent component instead of placing it in `Pagination`. This is the most simple way to implement but in large scale app, whenever you want to share state between the components which are way too far, it will be difficult and hard to maintain.\
\
Another method that I use is using redux store, which provides globalized state. It is called globalized because the state in store can be loaded from any levels of components. For example, `NotiDropdown` component and `HighlightedListPageContainer` component share the same state "highlighted-items". With the help of redux store, each component can load the state directly without moving up the state to the most closest common parent component, which is the traditional way. The cons of redux is that it is more complicated to implement, need more boilerate codes and excessive use of memory.

#### Make use of React Hooks
The app is using fully React Hooks. The reason why I develop it by React Hooks is that it allows developers to write stateful component in a more straightforward way. No need to introduce class which might cause confusion for both people and machine. 

#### Prevent wasted render
As in this app I use React Hooks, using "useEffect" function is one of the ways to prevent unnecessary re-render. By using this function, you can make a component only re-render whenever there are changes of certain values.\
Another way is using immutable data structure.


### Deployed App
The app is deployed to Heroku:
+ URL: https://quodai-challenge.herokuapp.com 
+ Git: https://github.com/anhtubui1204/quodai-challenge
+ AWS: http://ec2-52-77-249-31.ap-southeast-1.compute.amazonaws.com

