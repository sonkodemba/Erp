import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Readings() {

    const [loadingData, setLoadingData] = useState(false);
    const [reading, setReading] = useState(null);

    useEffect(() => {
      
      const fetchData =() =>{
        setLoadingData(true);
          try {
            
          } catch (error) {
              console.log(error);
          }
          setLoadingData(false);
      }
      fetchData();

    }, [])
    

  return (
    <div>Readings</div>
  )
}
