# Context
1. Accessing the Context can be either through: hook (i.e. *useContext*) / consumer (i.e. *<Context.Consumera>*)
note: typically *hook*
2. Consider using Context when:
	- There will be mutiple levels of props passing
	- A props is widely used throughout lots of components in a React project
3. Create separate .js file for the Context (e.g. /store/auth-context)
4. Place the Context Provider in the parent component where it covers all of the components that are going to need the respective props to pass (e.g. App.js)
5. Let's say A is the parent and C is the child component that'll use the props from A. (i.e. A > B > C; A > D)
	- In that case, it is necessary for C to utilize Context for using the props from A.
	- But D is not necessary to use Context. A normal props passing is enough since the level of D is directly attached to A.
6. Not optimized for high frequency changes (i.e. changes in a second)
Redux is appropriate for the high freq changes

## Consumer
1. Place the jsx Context wrapper for:
	- Provider: in the Parent component (e.g. App.js)
	- Consumer: in the child component (e.g. Navigation.js)

# Hooks
Rules:
1. Only use hooks in:
	- Component function: **one that returns jsx code**
	- Custom hook
2. Call it in the first lines of the function -- do not call it from any nest

# useRef
1. One useRef reserved to one input tag. Three input = three useRef
2. use attribute 'ref' in input tag to reserve it to the respective useRef.
This way, we can **always track what happens** in *real-time what's happenning in the respective input tag* by referring it. E.g. `.current.value`, `.current.focus()`

# useImperativeHandle
1. The combination of `React.forwardRef` and `useImperativeHandle` hook is put in the children component
2. This way, a parent component can *trigger any function*/ *access the value* from its children component through *useImperativeHandle*'s **object return**
3. This is because both parent & children components connected with **ref** (i.e. similar to *props*)
4. This can be utilized for the purpose of: focusing, scrolling, etc

# useEffect
Put anything referred inside a useEffect as its dependency (i.e. only when the dependency is required)

These are what this program will do:

 - It will show from the console that the program will keep *Cleaning up* everytime we input any character to the input fields.
 - every once in a while (e.g. 500 ms) after any character input, the validation of either email/password inputted will be checked automatically. It is indicated by printing *Checking form validity* to the console.

# useReducer
- The use is similar to useState
- It can integrate >1 useState's into 1 useReducer (more effective)
note: this will be applicable only for states that are related between one another

# useReducer + useEffect
- By using useReducer, *it integrated the previous useState's of entered-Email/Password & email/password-IsValid* **into one useReducer EACH.**
- Instead of checking the *setFormIsValid* in the separate email & password handler, it is integrated instead using the previous **useEffect** 
- In the useEffect, the **dependencies** were made to be pointing to email & password validity state instead of their values 
(i.e. otherwise, each character update to input field will trigger useEffect -> not efffective)
- Destructuring is used for pointing the isValid of each password & email from their reducer states.
