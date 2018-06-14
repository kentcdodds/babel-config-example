import {greeting} from '@local/test'

// if this file was transpiled then the arrow function
// should be a regular function
const transpiled = () => console.log(greeting)
