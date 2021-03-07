import { useEffect, useState } from "react";
import Wrapper from './components/Wrapper'
import fetchUsers from './utils'

const App=()=>{
    const [dataUsers,setDataUsers]=useState([]);

    useEffect(()=>{
        fetchUsers(setDataUsers);
    },[])

// -------------
return(
    <>
    {dataUsers.length?<Wrapper dataUsers={dataUsers}/>:undefined}
        
    </>
)

    
    }



export default App