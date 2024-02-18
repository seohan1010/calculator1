import { useState } from 'react';
import classes from '../style/main.module.css';

const Main = ()=>{
    const [input,setInput] =useState<string>('')


const onClickHandler=()=>{
        setInput((prev)=>prev + " new value ")
}

return (

<>
<div className={classes.main}>
    <input className={classes.top_blank}  type='text' readOnly={true} value={input}></input>
    
    {/* i have to  make some grid for it*/}
    <button onClick={()=>onClickHandler()}> test button</button>

</div>
</>

)

}


export default Main;