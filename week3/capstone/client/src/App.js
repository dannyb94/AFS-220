import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Nav from './components/container/Nav';
// import Body from './components/container/Body';

function App(){
  return (
    <BrowserRouter>
      <div>
        <Nav />
        {/* <Body /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
