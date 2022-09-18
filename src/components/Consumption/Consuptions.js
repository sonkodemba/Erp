import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
 
export default function Consuptions() {

  const [loadingData, setLoadingData] = useState(true);
  const [consumption, setConsumption] = useState(null);

  useEffect(() => {
     
    const fetchData = async () =>{
        setLoadingData(true);
        try {
           
           const response = await ConsumptionService.all();
          
        } catch (error) {
          console.log(error);
        }
        setLoadingData(false);
    }
    fetchData();

  }, []);
  
  return (
    <div>Consuptions</div>
  )
}
