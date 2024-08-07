import logo from './logo.svg';
import './App.css';
import { Button } from './components/ui/button';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Button>Test</Button>
    </div>
  );
}

export default App;
