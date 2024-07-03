### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
- - React is a popular, powerful front-end framework. It was developed by and is sponsored by Facebook/Meta. It is comprised of reusable "view components" that encapsulat logic and HTML into each component. It makes it easier to build modular applications.

- What is Babel?
- - Babel transpiles JSX to JavaScript.

- What is JSX?
- - JSX stands for JavaScript XML. It is a syntax mostly used with React that allows you to write HTML-like code directly in JavaScript making it easier to manage components.

- How is a Component created in React?
- - You can create a component using function components or class components. Function components are simpler and use JavaScropt functions. They accpet props and return React element describing what should be n screen.

- What are some difference between state and props?
- - A prop allows you to customize components to make them more easily reusable. They are passed in like arguments to the function and alter the contents of the page based on what is passed through. They are immutable, as in the component cannot change its own props. State is data specific to a component. State can be changed by the component.

- What does "downward data flow" refer to in React?
- - This refers to the pattern where data in a React applications flows in a single downward directions from parent to child components. State and props are passed down from parent to child but the children component do not send data back up to the parent components directly.

- What is a controlled component?
- - A controlled component renders and controls elements on the page using state to control form data. Changes made to the form cause updates to the state which updates the component.

- What is an uncontrolled component?
- - An uncontrolled component renders the form but updates via the DOM and not thrugh state.

- What is the purpose of the `key` prop when rendering a list of components?
- - The key component adds a unique identity to each of the elements rendered. It helps React update and manage the rendering of components.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
- - An array index can change if the information in the array changes, causing the possiblilty of missing or duplicate keys.

- Describe useEffect.  What use cases is it used for in React components?
- - useEffect is a built-in hook for side effects. This can incude things like fetching data, starting a timer, and manually changing the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
- - useRef is another built-in hook in React that returns a mutable object with a key of *current*, whose value is equal to the initial value passed into the hook. The object persists across renders. Mutating the object does not trigger a re-render.

- When would you use a ref? When wouldn't you use one?
- You would use a ref to access an underlying DOM element or when setting up/clearing a timer. You wouldn't use to when you need data to communicate between components. You wouldn't use it for Forms, you wouldn't use it for trigerring re-renders or for state.

- What is a custom hook in React? When would you want to write one?
- A custom hook is a JavaScript function that typically uses built in hooks. The function name should start with "use". Custom hooks can be reusable across different components. You can make a hook to abstract logic, handle repeated tasks or generating our own JSX.
