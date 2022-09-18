import React, { useEffect } from 'react'

export default function Readings() {

  const [loadReading, setLoadingReading] = useState(true);
  const [readings, setReadings] = useState([]);


  useEffect(() =>{
    const fetchReadingData = async ()=>{
        setLoadingReading(true);
        try {
          // call to API
          const response = ResdingService.all();
          setReadings(response.data);
        } catch (error) {
          console.log(error);
        }
        setLoadingReading(false);
    }
    fetchReadingData();
  }, []);
  
 
  
    

  return (
    {readings.map((reading) =>(
    <div id={reading.id}>
      <p>{reeading.MeterNumber}</p>
    </div>
    ))}
    )
}
