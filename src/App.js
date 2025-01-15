import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Menu from './components/Menu';
import Category from './Page/Category';

function App() {
  return (
    <div class="app_container">
      <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path='home/*' element={<Home/>}/>
        <Route path='category/*' element={<Category/>}/>
      </Route>
      </Routes>
    </div>
  );
}
function AppLayout(){
  return (
    <div class="layout_container">
      <Outlet/>
      <Menu/>
    </div>
  )
}

export default App;
