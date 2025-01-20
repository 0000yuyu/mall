import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Menu from './components/Menu';
import Category from './Page/Category';
import Cart from './Page/Cart';

function App() {
  return (
    <div class="app_container">
      <Routes>
      <Route path="/*" element={<AppLayout />}>
        <Route path='/*' element={<Home/>}/>
        <Route path='category/*' element={<Category/>}/>
        <Route path='cart/*' element={<Cart/>}/>
      </Route>
      </Routes>
    </div>
  );
}
function AppLayout(){
  return (
    <div class="layout_container">
      <div className='layout_outlet'>
        <Outlet/>
      </div>
      <Menu/>
    </div>
  )
}

export default App;
