"use client";
import React, { useState } from 'react'

const page = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [mainTask, setMainTask] = useState([])

    const submitHandler=(e)=>{
        e.preventDefault();
        setMainTask([...mainTask,{title,desc}]);
        console.log(title);
        console.log(desc);
        setTitle("");
        setDesc("");
    }

    const deleteHandler=(i)=>{
        let copyMainTask=[...mainTask];
        copyMainTask.splice(i,1);
        setMainTask(copyMainTask);
    }

    let renderText=<h5 className='text-center justify-center p-10'>No Task Available</h5>
    if(mainTask.length>0){
        renderText= mainTask.map((t,i)=>{
            return <div>
                <li className='flex justify-between p-10'>
                    <p>{i+1}</p>
                    <h5>{t.title}</h5>
                    <h6>{t.desc}</h6>
                    <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 text-white rounded px-4 py-2.5'>Delete</button>
                </li>
            </div>
        })
    }
  return (
    <>
        <h1 className='bg-black text-white text-center justify-center text-2xl font-bold py-4'>Palash's ToDo List</h1>
        <form onSubmit={submitHandler} className='m-8 text-center'>
            <input value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }} className='border-black border-2 rounded px-4 py-2 mr-2' placeholder='Enter Title' type="text" />
            <input value={desc} onChange={(e)=>{
                setDesc(e.target.value)
            }} className='border-black border-2 rounded px-4 py-2 mr-4' placeholder='Enter Description' type="text" />
            <button className='bg-black text-white px-4 py-2.5 rounded'>Add Task</button>
        </form>
        <hr />
        <div className='bg-slate-300'>
            <ul>{renderText}</ul>
        </div>
    </>
  )
}

export default page