import { useEffect, useState } from "react";
import Wrapper from './components/Wrapper'

const App=()=>{
    const [dataUsers,setDataUsers]=useState([]);
    // Api
    useEffect(()=>{
        const fetchItems=async () =>{
            const result =await fetch('http://localhost:3000/');
            const data=await result.json();
            setDataUsers(data);
        }
        fetchItems();
    },[]);

// -------------

        return(
            <>
                <Wrapper dataUsers={dataUsers}/>
            </>
        )
    }



export default App