import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Nav from './components/container/Nav';

function App(){
  return (
    <BrowserRouter>
      <div>
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
