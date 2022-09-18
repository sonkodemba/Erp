import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
 

export const Meters = () => {

    const [loadingMeters, setLoadingMeters] = useState(true);
    const [meters, setMeters] = useState([]);

    useEffect(() => {
        const fetchMeterData =async () =>{
            setLoadingMeters(true);
            try{

                const response =  await MeterService.all();
                setMeters(response.data);
              }catch(error){console.log(error);
            
            }
            setLoadingMeters(false);

        }
        fetchMeterData();   
           
            
    }, []);
    
  return (
    <div>Meters</div>
  )
}
