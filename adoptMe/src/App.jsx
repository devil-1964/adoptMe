import './App.css'
import Pet from './Pet'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './Logo';
import SearchParam from "./SearchParam";
import Details from './Details';

function App() {

  return (
    <BrowserRouter>

      <Logo />
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParam />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
