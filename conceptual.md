### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a JS library for mainly building UIs. You use it to make reusable components

- What is Babel?
    Babel is a compiler that turns newer JS and JSX into something the browser can understand

- What is JSX?
    JSX allows you to write html in javascript, which helps with React components

- How is a Component created in React?
    Components are created pretty much like functions, they usually just return some sort of html mixed in with other functions

- What are some difference between state and props?
    a state is managed inside a component and can change while a prop is passed from a parent component and is read only for the child component

- What does "downward data flow" refer to in React?
    it just means that data flows downward from parent to child components

- What is a controlled component?
    a controlled component means form inputs are contrlled by state

- What is an uncontrolled component?
    an uncontrolled component means the form inputs are contolled by the DOM

- What is the purpose of the `key` prop when rendering a list of components?
    the key is just to help for identifiying and updating elements in a list 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    if the list changes during rerenders, React may not be able to track it correctly

- Describe useEffect.  What use cases is it used for in React components?
    useEffect allows you to do side effects inside of components. whether its getting data or changing the dom. You can control when they are used as well, which makes them more powerful

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef just makes a reference for a DOM element or some value. No it doesnt cause a rerender

- When would you use a ref? When wouldn't you use one?
    Anytime you want to change or access the element directly

- What is a custom hook in React? When would you want to write one?
    a custom hook is just reusbale function you can reuse in multiple components
