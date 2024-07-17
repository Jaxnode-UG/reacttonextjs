
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Video from './Video';
import './App.css'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/video/NT9yaVddmwM9y67OB01zYhBSJm00a2zRuYX00GqIzWQayQ">Video</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video/:playbackId" element={<Video />} />
      </Routes>
    </>
    
  )
}

export default App
