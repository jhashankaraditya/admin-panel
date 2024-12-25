import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard';
import Layout from './Components/Layout/Layout';
import Calendar from './Pages/Calendar/Calendar';
import Boards from './Pages/Board/Boards';
import DataGrid from './Pages/DataGrid/DataGrid';

function App() {
  return (
    <div id='dashboard'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='dashboard' element={<Dashboard/>}></Route>
            <Route path='calendar' element={<Calendar/>}></Route>
            <Route path='board' element={<Boards/>}></Route>
            <Route path="users" element={<DataGrid/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;