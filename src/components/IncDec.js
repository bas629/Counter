import { useState } from "react";
import  "./IncDec.css"

function  IncDec()
{  
    let [Number,changeNumber]=useState(0);
      
    function Increment()
    {   Number=Number+1; 
         changeNumber(Number);
         

    }
    function decrement()
    {   Number=Number-1;
        if(Number>=0)
      {  changeNumber(Number);}
        else
        {
            Number=0;
        }
         

    } 

    function Reset()
    {
        Number=0;
        changeNumber(Number);
    }
    return (

   <div >
   <div className="box">     
   <button onClick={decrement} className="text-5xl font-bold  border-r-4 pr-10 border-b-slate-600">-</button>
     <p className="text-5xl font-bold  ">{Number}</p>
 <button onClick={ Increment} className="text-5xl font-bold border-l-4 pl-10  border-b-slate-600">+</button>
     </div>
     <button onClick={Reset} className="text-3xl my-10 ml-[84px] font-bold  bg-slate-300 p-5 rounded-md">Reset</button>
   </div>




)





} 

export default IncDec