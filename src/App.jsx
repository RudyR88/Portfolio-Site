import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/style.css';
import Navbar from './componenets/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
