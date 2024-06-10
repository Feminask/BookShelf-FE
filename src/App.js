import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Header from './pages/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>

      </Routes>
    </div>
  );
}

export default App;
