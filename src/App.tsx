import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ApiPage from './Pages/ApiPage';


function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route element = {<HomePage/>} path='/' />
            <Route element = {<ApiPage/>} path='/api' />
          </Routes>
        </BrowserRouter>
    )
}

export default App;
