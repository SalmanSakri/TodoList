import './App.css';
import React, { useEffect, useState } from 'react';
import logo from "./logo.png"

const getLocalItem = () => {
  let list = localStorage.getItem('lists');
  // console.log(list)
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}

function App() {

  const [text, setText] = useState("");
  const [task, setTask] = useState(getLocalItem())

  const changeText = (e) => {
    setText(e.target.value)
    // console.log(e)
  }

  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    setTask([...task, text]);
    setText("")
  }

  const removeTask = (a) => {
    const finalData = task.filter((curEle, index) => {
      return index !== a;
    })
    setTask(finalData)
  }


  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(task))
  }, [task])


  return (
    <div className=''>
      <div className='flex justify-center mt-2'>
        <img className='h-12 w-12' src={logo}alt='img'/>
      </div>
      <section className=" text-gray-600 body-font relative m-3">
        <div className="container mt-28 shadow-lg rounded-xl px-5 mx-auto pb-20">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-bold title-font -mt-16 shadow-xl rounded-lg mb-4 bg-slate-50 text-black">TODO List</h1>
          </div>
          <div className="p-2 flex justify-center w-full">
            <div className="">
              <h1 for="name" className="leading-7  text-xl font-semibold text-black">What To Do In This Day</h1>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div>
              {/* <input placeholder='write Herw' /> */}
              <textarea className='w-full h-28 shadow-md rounded p-2' placeholder='type Here' value={text} onChange={changeText} ></textarea>
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-3">Done</button>
            </div>
          </form>
          <div>
            <div>
              {

                task.map((value, index) => {

                  return (
                    <div key={index}>

                      <div className=' mt-8 shadow-black flex justify-center'  >
                        <textarea className='rounded-xl w-1/2 h-40 p-3'>{value}</textarea>
                      </div>

                      <div className='flex justify-center items-center' >
                        <button className='bg-red-700 mt-2 w-1/5 h-9 text-white rounded-2xl' onClick={() => removeTask(index)}>Delet</button>
                      </div>
                      
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
