import Button from './components/FunctionalComponent';
import { LeftArrow,RightArrow } from "./components/FunctionalComponentTwo";
const name = "Harshith";
const isLoggedIn = false;

function App() {
  
  return (
    //React fragment
    <>
    {
      /*JSX
      Rule 1:Return one parent element
    */}
    <h1>Hello </h1>
    <p>Hello again!</p>
    {
      /*JSX
      Rule 2:Every tag must be closed properly
    */}
    <p>Error</p>
    <input type="text" />
{
      /*JSX
      Rule 3:Use camelCase for HTML attributes
    */}
    <button onClick onSubmit> Click </button>
    {
      /*JSX
      Rule 4:Embedding Javascript with curly braces
    */}
    <h3>Hello, {name}</h3>
    {
      /*JSX
      Rule 5:Use expressions,not statements 
    */}
    <p>{isLoggedIn ? "Welcome back!" : "Please login."}</p>
    <Button />
    </>
  )
}

export default App
