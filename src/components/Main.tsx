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
  

   <div className={classes.first_row}><button className={classes.btn}></button><button className={classes.btn}></button><button className={classes.btn}></button><button className={classes.btn}>CE</button></div> 
   <div className={classes.second_row}><button className={classes.btn}>7</button><button className={classes.btn}>8</button><button className={classes.btn}>9</button><button className={classes.btn}>/</button></div> 
   <div className={classes.third_row}><button className={classes.btn}>4</button><button className={classes.btn}>5</button><button className={classes.btn}>6</button><button className={classes.btn}>x</button></div> 
   <div className={classes.fourth_row}><button className={classes.btn}>1</button><button className={classes.btn}>2</button><button className={classes.btn}>3</button><button className={classes.btn}>-</button></div>   
   <div className={classes.fifth_row}><button className={classes.btn}>0</button><button className={classes.btn}></button><button className={classes.btn}>=</button><button className={classes.btn}>+</button></div> 

</div>
</>

)

}


export default Main;