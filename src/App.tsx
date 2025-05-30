import './App.css'

const App = () => {

  return  (
 <div>
    <Header /> 
    <div>
    <Techologies />
    </div>
  </div>
  )
}

export default App

const Techologies = () => {
  return (
    <ul>
      <li>html</li>
      <li>css</li>
      <li>javascript</li>
      <li>react</li>
    </ul>
  )
}

const Header = () => {
  return (
    <div>
      <a href="#s">Home</a>
      <a href="#">News Feed</a>
      <a href="#">Messages</a>
    </div>
  )
}


 



