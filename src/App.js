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
import ShowCustomer from './components/Customer/ShowCustomer';
import Villages from './components/Village/Villages';
import AddVillage from './components/Village/AddVillage';
import UpdateVillage from './components/Village/UpdateVillage';
import ShowVillage from './components/Village/ShowVillage';
import Rates from './components/Rate/Rates';
import AddRate from './components/Rate/AddRate';
import UpdateRate from './components/Rate/UpdateRate';
import ShowRate from './components/Rate/ShowRate';
import Readings from './components/Reading/Readings';
import AddReading from './components/Reading/AddReading';
import UpdateReading from './components/Reading/UpdateReading';
import ShowReading from './components/Reading/ShowReading';
import Zones from './components/Zone/Zones';
import AddZone from './components/Zone/AddZone';
import UpdateZone from './components/Zone/UpdateZone';
import ShowZone from './components/Zone/ShowZone';




function App() {
  return(  
     <>
      <Navbar />
    <BrowserRouter>
    <Routes>
    <Route path='/rates' element={<Rates />}/>
    <Route path='/rate/create' element={<AddRate />}/>
    <Route path='/rate/update' element={<UpdateRate />}/>
    <Route path='/rate/show' element={<ShowRate />}/>
    </Routes>
    <Routes>
    <Route path='/readings' element={<Readings />}/>
    <Route path='/reading/create' element={<AddReading />}/>
    <Route path='/reading/update' element={<UpdateReading />}/>
    <Route path='/reading/show' element={<ShowReading />}/>
    </Routes>
    <Routes>
    <Route path='/zones' element={<Zones />}/>
    <Route path='/zone/create' element={<AddZone />}/>
    <Route path='/zone/update' element={<UpdateZone />}/>
    <Route path='/zone/show' element={<ShowZone />}/>
    </Routes>
    <Routes>
    <Route path='/villages' element={<Villages />}/>
    <Route path='/village/create' element={<AddVillage />}/>
    <Route path='/village/update' element={<UpdateVillage />}/>
    <Route path='/village/show' element={<ShowVillage />}/>
    </Routes>
    <Routes>
      <Route path='/customers' element={<Customers/>} />
      <Route path='/customer/create' element={<AddCustomer/>} />
      <Route path='/customer/update' element={<UpdateCustomer/>} />
      <Route path='/customer/show' element={<ShowCustomer/>} />
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
