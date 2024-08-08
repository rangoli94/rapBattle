
import './App.css';
import MenuBar from './components/MenuBar';
import MainContent from './components/MainContent';
import RapWindow from './components/RapWindow';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <MenuBar />
        <Routes>
          <Route exact path="/" element={<MainContent />} />
          <Route exact path="/rap-battle" element={<RapWindow />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
