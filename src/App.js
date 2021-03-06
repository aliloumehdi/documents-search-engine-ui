import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { AppContextProvider } from './contexts/AppContext/AppContext';

import Home from './pages/Home';
import Results from './pages/Results';
import Site from './pages/Site';
import Upload from './pages/Upload';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContextProvider>
          <Routes>
            <Route path="/results" element={ <Results /> } />
            <Route path="/site" element={ <Site /> } />
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/upload" element={ <Upload /> } />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
