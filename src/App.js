
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List';
import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Service from './pages/Service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/service" element={<Service/>}/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;
