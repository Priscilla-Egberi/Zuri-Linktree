import './App.css';
import Linktree from './Pages/Linktree';
import Contact from './Pages/Contact';
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/'
            element={
              <Linktree />
            }
          >
          </Route>
          <Route exact path='/contact'
            element={
              <Contact />
            }
          >
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
