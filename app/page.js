"use client";
import React from 'react';
import { useState } from 'react';

const page = () => {
  const [title,setTitle] = useState("");
  // console.log("title",title)
  const [desc,setDesc] = useState("");
  // console.log("desc",desc)
  const [mainTask,setMainTask] = useState([]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData);
    // console.log(data)
    console.log("title",title)
    console.log("desc",desc);
    setTitle(" ")
    setDesc(" ")
    setMainTask([...mainTask, {title,desc}])
    console.log("mainTask",mainTask);
  }

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1);
    setMainTask(copyTask);

  }

  let renderTask = <h2>No Task Available</h2>

  // renderTask = {mainTask.map((t,i)=>{
  //   return (
  //     <div>
  //       <h1>{t.title}</h1>
  //       <h2>{t.desc}</h2>
  //     </div>
  //   )
  // })}
if (mainTask.length>0){
  renderTask = (
    <div>
      {mainTask.map((t, i) => (
        <div key={i} className='flex justify-evenly'>
          <h1>{t.title}</h1>
          <h2>{t.desc}</h2>
        <button onClick={deleteHandler} className='bg-red-500 border border-black rounded-lg p-1'>Delete</button>
          </div>
      
      ))}
    </div>
  );
}
  
  
  return (
    <div>
      <h1 className='bg-black text-white text-center'>TodoList</h1>
      <form onSubmit={handleSubmit}>
          <input name='title' className='p-2 border border-black mr-2 rounded-lg' type='text' value={title} placeholder='Enter task here' onChange={(e)=>setTitle(e.target.value)}/>
          <input name='desc' className='p-2 border border-black mr-2 rounded-lg' type='text' value={desc} placeholder='Enter description here' onChange={(e)=>setDesc(e.target.value)}/>
          <button type='submit' className='border border-black p-2 rounded-lg'>Add Task</button>
      </form>
      <hr className='my-2'></hr>
      <div className='p-8 bg-slate-200'>
          <ul>
            {renderTask}
          </ul>
      </div>
    </div>
  )
}

export default page;
