import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import{MeterService} from 'MeterService';


export const Meters = () => {

    const [loadingMeters, setLoadingMeters] = useState(true);
    const [meters, setMeters] = useState([]);

    useEffect(() => {
        const fetchMeterData =async () =>{
            setLoadingMeters(true);
            try{

                const response =  await MeterService.
            }catch(error){console.log(error);
            
            }


        }
        fetchMeterData();   
           
            
    }, []);
    
  return (
    <div>Meters</div>
  )
}
