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

## Consumer
1. Place the jsx Context wrapper for:
	- Provider: in the Parent component (e.g. App.js)
	- Consumer: in the child component (e.g. Navigation.js)