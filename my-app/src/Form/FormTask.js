import React, { useState } from "react";

const FormTask = () => {

 const[username,setname]=useState("")   
 const[userdetail,setdetail]=useState("")   
 const[iscomplete,setcomplete]=useState("")   
 const[newarrdata,setnewarrdata]=useState("")   
 const[submit,setsubmit]=useState("")

 const ChangeName=(e)=>{
    console.log("e",e.target.value);
    setname(e.target.value)
 }
 const ChangeDetails=(e)=>{
    console.log("e",e.target.value);
    setdetail(e.target.value)
 }
 const onCheck=(e)=>{
    console.log("e",e.target.value);
    setcomplete(e.target.value)
 }

  return <div>

    <h1>Form-Task</h1>
    <form>
        {/* <label for="userName">Enter User Name</label> */}
        <input type="text" name="userName" placeholder="Enter User-Name" onChange={ChangeName}/>
        <input type="text" name="userDescription" placeholder="Enter User-Details" onChange={ChangeDetails}/>
        <input type="checkbox" onChange={onCheck}>
        

        </input>
    </form>
  </div>;
};

export default FormTask;
