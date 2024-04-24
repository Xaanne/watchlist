import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import Navbar from './Navbar';
import {Home, Error, Reading} from "./pages";
import {Route, BrowserRouter, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='watchlist' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='reading' element={<Reading/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
