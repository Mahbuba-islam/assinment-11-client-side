import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';

import Home from './Pages/Home/Home/Home';
import OurTeams from './Pages/Home/OurTeams/OurTeams';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';


import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import ManageItems from './Pages/ManageItems/ManageItems';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';
import ManageInventories from './Pages/ManageInventories/ManageInventories';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/InventoryItem/:id' element={
        <RequireAuth>
          <InventoryDetails></InventoryDetails>
        </RequireAuth>}></Route>
       <Route path='/manageItems' element={
        <RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>}></Route>
       <Route path='/addItems' element={
        <RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}></Route>
       <Route path='/myItems' element={
        <RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
       <Route path="/about" element={<About></About>}></Route>
        <Route path="/ourTeams" element={<OurTeams></OurTeams>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
       <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/manageInventories" element={ <ManageInventories></ManageInventories>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
