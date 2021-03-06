import truncate from '../../utils'

const TextHolder =({item})=>{
    const {id,title}=item;
    return(
<div className={"to-do-list__item__text-holder"}>
    <div>{id}</div>
    <div>{truncate(title)}</div>
</div>)};

export default TextHolder;