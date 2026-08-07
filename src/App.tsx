import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Palette from './components/Palette';
import Container from '@mui/material/Container';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/palette/:id" element={<Palette />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;