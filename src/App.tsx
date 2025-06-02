import './App.css'

const App = () => {

  return  (
 <div className='app-wrapper'>
  <header className='header'>
    <img src="./src/assets/logo.png" alt="" />
  </header>
  <nav className='nav '>
    <div>
      <a>Profile</a>
    </div>
    <div>
      <a>Messages</a>
    </div>
    <div>
      <a>News</a>
    </div>
    <div>
      <a>Music</a>
    </div>
    <div>
      <a>Settings</a>
    </div>
  </nav>
  <div className='content'>
    <div>
    <img src="./src/assets/banner.webp" alt="" width={'1200px'} />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts 
      <div>
        New post
      </div>
      <div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default App




 



