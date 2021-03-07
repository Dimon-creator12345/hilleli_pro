const fetchUsers=async (setDataUsers)=>{
    let result=await fetch('http://localhost:3000/');
    let data=await result.json();
    setDataUsers(data);
}

export default fetchUsers;