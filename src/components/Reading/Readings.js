import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Readings() {
 
  const [loading, setLoading] = useState(true);
  const [readings, setReadings] = useState(null);

  useEffect(() => {
     
    const fetchData = async() =>{
      setLoading(true);
      try {
        const response = await ReadingService.get();
        setReadings(response.data);

      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchData();
  }, [])
  
    

  return (
    <div>Readings</div>
  )
}
