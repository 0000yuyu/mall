import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Menu from './components/Menu';

function App() {
  return (
    <div class="app_container">
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
      </Route>
      </Routes>
    </div>
  );
}
function Layout(){
  return (
    <div class="layout_container">
      <Outlet/>
      <Menu/>
    </div>
  )
}

export default App;
