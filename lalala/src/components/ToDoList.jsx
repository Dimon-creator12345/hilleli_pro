import React from 'react'
import ExampleClassComponent from './ExampleClassComponent'
import ToDoItem from './ToDoItem'
import list from '../constants'

const ToDoList=()=>{
return(<div>
    <div className="to-do-list-wrapper">
        <ExampleClassComponent/>
        <div className="to-do-list-wrapper">
        {list.map((item,index)=>(
        (!item.hidden && <ToDoItem key={item.id} item={item}/>)
        ))}
        </div>
    </div>
</div>)
}

export default ToDoList;