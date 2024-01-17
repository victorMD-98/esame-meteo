import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./Componenti/Navbar";
import HomePage from "./Pagine/HomePage";
import Risultato from "./Pagine/Risultato";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/risultato/:citta" element={<Risultato/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
