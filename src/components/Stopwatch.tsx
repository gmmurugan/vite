import { useState } from "react";

export default function StopWatch() {
    const [startTime, setStartTime] = useState(Date.now());
    const [now, setNow] = useState(Date.now());

    {console.log(Date.now())};
    let timeInSeconds = 0;
    if (startTime != null && now != null) {
        timeInSeconds = (now - startTime) / 1000;
    }

    function handleTimer(): void {
        try{
            setStartTime(Date.now());
            setNow(Date.now())
        }
        catch{
            throw new Error("Function not implemented.");
        }
        finally{
            console.log('finally')
        }
        setInterval(()=> {
            setNow(Date.now())
        }, 10)
    }
    return( 
    <>
    <h3>Seconds : {timeInSeconds.toFixed(2)} </h3> 
    <button style={{color: 'green'}}onClick={()=>handleTimer()}> Start Timer </button>
    <button style={{color: 'red'}} onClick={()=>setStartTime(null)}> Stop Timer </button>

    </>)
}

