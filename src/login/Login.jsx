import { useState } from "react"



export default function Login({setDetails}) {
    const [userName, setUserName] = useState('');
    const [reqId, setReqId] = useState('');

    return (
        <div className='bg-black flex flex-col items-center justify-around parent'>
          <h1 className='text-2xl text-white'>Log In</h1>
          <div className='flex flex-col justfiy-center items-center'>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2" placeholder="Enter Username" type="text" name="search"/>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2" placeholder="Enter Password" type="text" name="search"/>
            <button className="p-3 bg-purple-600 rounded-lg text-white m-2">Enter</button>
          </div>
        </div>
    )
}