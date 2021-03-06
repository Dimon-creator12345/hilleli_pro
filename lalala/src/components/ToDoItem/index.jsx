import Check from './Check'
import TextHolder from './TextHolder'
import Remove from './Remove'

const ToDoItem=({item})=>{
    return(
<div className={"to-do-list__item"}>
    <Check/>
    <TextHolder item={item}/>
    <Remove/>
</div>)}

export default ToDoItem;