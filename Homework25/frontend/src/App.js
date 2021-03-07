import { useEffect, useState } from "react";
import Wrapper from './components/Wrapper'

const App=()=>{
    const [dataUsers,setDataUsers]=useState([]);
    // Api
    useEffect(async ()=>{
        let result=await fetch('http://localhost:3000/');
        let data=await result.json();
        setDataUsers(data);
    },[])

// -------------
return(
    <>
    {dataUsers.length?<Wrapper dataUsers={dataUsers}/>:undefined}
        
    </>
)

    
    }



export default App