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
    <h3>timestamp : {timeInSeconds.toFixed(2)} </h3> 
    <button onClick={()=>handleTimer()}> Start Timer </button>
    <button onClick={()=>setStartTime(null)}> Stop Timer </button>

    </>)
}

