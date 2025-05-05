import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg' // Not used
import './App.css' // Not used


function Header(){
  return(
<header className='header'>
  <img src="/src/assets/react.svg"className="logo"alt="react-logo" />
   <nav>
    <ul className='nav-list'>
    <li className='nav-list-item'>pricing</li>
    <li className='nav-list-item'>about</li>
    <li className='nav-list-item'>contact</li>
    </ul>
    </nav>
</header>
)}
function MainComp(){
  return(
  <main>
    <h1>"Reasons
  I'm excited to learn React"</h1>
  <ul>
    <li>learning new concepts</li>
    <li>joining react community😁</li>
  </ul>

  //pop quiz from scrimba


1. Where does React put all of the elements I create in JSX when I 
call `root.render()`?

in dom elements id named root

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
it will show Hello world! in h1 font

3. What's wrong with this code:
```
root.render(
<h1>Hi there</h1>
<p>This is my website!</p>
)
```it should be in a div or main tag

4. What does it mean for something to be "declarative" instead of "imperative"?
declarative means you want something to happen but imperative means you have to tell how something is going to happen

5. What does it mean for something to be "composable"?
means reuseabale


  </main>
  )
}
function Footer(){
  return(
<footer className='footer'>© 2025 development. All rights reserved.</footer>
  )
}
function App() {
 
  return (
    <Fragment>
   

   
<Header/>

<MainComp/>

<Footer/>

  </Fragment>
  )
}

export default App

