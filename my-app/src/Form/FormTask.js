import React, { useState } from "react";

const FormTask = () => {
    const[updateName,SetUpdatedName]=useState("");
    const[description,SetUpdatedDescription]=useState("");
    const[completed,Setcompletion]=useState();
    const[arrayvalue,setArray]=useState([]);
    const[showerror,setError]=useState(false);
   

    const handleUpdatedName=(e)=>{
        console.log("tasktname",e.target.value)
        SetUpdatedName(e.target.value)
    }
    const handleDesvalue=(e)=>{
        console.log("description",e.target.value)
        SetUpdatedDescription(e.target.value)
    }
    const handlecheckbox=(e)=>{
        console.log("completed",e.target.checked)
        Setcompletion(e.target.checked ? "Completed":"InComplete")
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        setError(true);
        if(updateName==="" || description==="")return;
       
        console.log(updateName,description,completed)
       pusharr();
       
       
    }
      const pusharr=()=>{
        setArray([...arrayvalue, {name:updateName,des:description,taskstatus:completed}]);
        //console.log(arrayvalue)
    }

  return <div>

    <h1>Form-Task</h1>
     <form onSubmit={handlesubmit}>
            <label >Name:</label>
            <input type="text" placeholder="updateName"  onChange={handleUpdatedName}/><br/>
            {updateName === "" && showerror &&<p>name required</p>}
            <label >Description:</label>
            <input type="text" placeholder="description"  onChange={handleDesvalue}/><br/>
            {description === ""&& showerror &&<p>Description required</p>}
            <label >Task Status:</label>
            <input type="checkbox" onChange={handlecheckbox}/>
            <input type="submit"/>
        </form>
        <ul>Task List:
            
            {arrayvalue.map((item,index)=>(
                <li key={index}>Name:{item.name} <br/> Description:{item.des} <br/> Task Status:{item.taskstatus}</li>
               
               
            ))}
        </ul>
  </div>;
};

export default FormTask;
