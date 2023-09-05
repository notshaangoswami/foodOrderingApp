# Learning js

# parcel

-Dev Build
-Local Server
-HMR-Hot Module Replacement
-Use File Watching Algo written in cpp
-cashing-builds faster for users
-Image Optimization
-Bundling
-Minimisation
-Compression
-Consistent Hashing
-Differential Bundling
-code splitting
-supports older browers
-Diagonstics(beautiful error handling)
-Tree Shaking-Removes unused code

# Food Ordering

Header
-Logo
-Nav items
Body
-Search
-RestaurantContainer
-Restaurant Card
-Img
-Name of res,Star Rating,cuisine,delivery tie

Footer
-Copyright
-LInks
-address
-contact

# Export/Import

/\*

Two types of Import/Export
-Default Import/Export
export default Component
import Component from "path"

-Named Import/Export
export const COMPONENT
import {COMPONENT} from "Paths"

\*/

# HOOKS

-Hooks are utility functions that give superpowers
-react hooks keep ui layer in sink with data layer(config driven UI)
1.useState-Whenever a state variables updates, react re-renders the component
2.useEffect-It is called after the component has been rendered.

# React is fast why?

-Effective DOM manipulation(React fibre,React conciliation,Virual DOM,Diff Algo)
-Has Vitual DOM(Object representation of html tags)
-Diff ALgo is used to find difference btw old and new virtual dom and hence updates the UI

# useEffect cases

1.No dependancy Array ie => useEffect(()=>{})
-In this case useEffect will be called on "every" render ie whenever the page refreshes.
2.Empty Dependancy Array ie=> useEffect(()=>{},[])
-In this case useEffect() will ONLY be called on INITIAL RENDER and not everytime.
3.Filled dependancy Array ie=>useEffect(()=>{},[dependancy])
-In this case useEffect() is called whenever dependanct inside array changes.

# Types of Routing and React is single page website

1.Client Side Routing(eg. React as it doesnot reloads the page while navigating but just switches the component=> Hence it is fast=>Single page applications)
2.Server Side Routing- Traditonal way of making websites.Anchor tag was used to navigate and hence it reloads everytime the page by making server calls.

# Life Cycle of React class components(For SIngle child)

-Parent Constructor()
-Parent Render()
-child Constructor()
-child render()
-child componentDidMount()
-parent componentDidMount()
Note:-Api calls are written in componentDidMount() in class based Components.Similar to useEffect()hook.
because in React => Component is rendered(without any data)=>Api call(fetched data)=> Component Re-rendered with data(config driven UI)
# Life Cycle of React class components(For multiple childs)

-Parent Constructor()
-Parent Render()
 -firstchild Constructor()
 -firstchild render()
 -secondchild constructor()  
 -secondchild render()       //optimization of react(bundles/BATCHES all the "render phase" of its child)--->DOM  M
 -firstchild componentDidMount()  //Second phase-Commit phase where component is mounted of the childs
 -secondchild componentDidMount()
-parent componentDidMount()
