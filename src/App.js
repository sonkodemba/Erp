import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { AddUser } from './components/Users/AddUser';
import { UserList } from './components/Users/UserList';
import ShowUser from './components/Users/ShowUser';
import { UpdateeUser } from './components/Users/UpdateeUser';
import Consuptions from './components/Consumption/Consuptions';
import AddConsumption from './components/Consumption/AddConsumption';
import ShowConsumption from './components/Consumption/ShowConsumption';
import UpdateConsumption from './components/Consumption/UpdateConsumption';
import Meters from './components/Meter/Meters';
import AddMeter from './components/Meter/AddMeter'
import ShowMeter from './components/Meter/ShowMeter';
import UpdateMeter from './components/Meter/UpdateMeter';
import{Customers} from './components/Customer/Customers';
import AddCustomer from './components/Customer/AddCustomer';
import UpdateCustomer from './components/Customer/UpdateCustomer';
import ShowCustomer from './components/Consumption/ShowCustomer';

function App() {
  return(  
     <>
      <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path='/customers' element={<Customers/>} />
      <Route path='/customer/create' element={<AddCustomer/>} />
      <Route path='/customer/update' element={<UpdateCustomer/>} />
      <Route path='/customer/show' element={<ShowConsumption/>} />
    </Routes>
   
     <Routes>
       <Route path="/user/create" element  ={<AddUser/>} />
       <Route path="/users" element={<UserList />} />
       <Route path="/user/show" element  ={<ShowUser />} />
       <Route path="/user/update" element  ={<UpdateeUser />} />
      </Routes>
      <Routes>
        <Route path="/consumptions" element={<Consuptions />} />
        <Route path="/consumption/create" element  ={<AddConsumption />} />
        <Route path="/consumption/show" element={<ShowConsumption />} />
        <Route path="/consumption/update" element={<UpdateConsumption />} />
      </Routes>

      <Routes>
        <Route path="/meters" element={<Meters/>} />
        <Route path="/meter/create" element={<AddMeter/>} />
        <Route path="/meter/show" element={<ShowMeter/>} />
        <Route path="/meter/update" element={<UpdateMeter/>} />
      </Routes>
    </BrowserRouter> 
     </>
  );

}

export default App;
