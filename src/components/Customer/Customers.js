import React from 'react';
import CustomerService from '../Services/CustomerService';
import { useState } from 'react';
import { useEffect } from 'react';


export const Customers = () => {

    const [loading, setLoading] = useState(true);
    const [customers, setCustomers] = useState(null);


    useEffect(() => {
      
        const fetchData = async () =>{
            setLoading(true);
            try {
              /**
               * Make call to the API
               */
              const response = CustomerService.all();
              setCustomers(response.data);
            } catch (error) {
              console.log(error);
            }
            setLoading(false);
        }
        fetchData();

    }, []);
    
  return (
    <div>Customers</div>
  )
}
