const truncate=(text:string,length:number=5)=>(
    `${text.slice(0,length)}...`
);

export default truncate;