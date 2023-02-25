import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/style.css';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
