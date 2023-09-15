import React,{useState} from "react";

import './App.css';

const App=()=>{

  const [count,setCount]=useState(0);

  const [value,setValue]=useState('');
  
const abela =()=>{
  setCount(count+1);
}



return(
<div>
<h1>
  {count}
 </h1> 

 <button className="abela" onClick={()=>abela()}>click</button>
<input onChange={(e)=>setValue(e.target.value)} />

{
  console.log(value)
}



</div>


);
}

export default App;