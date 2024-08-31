import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  //useRef hook -----> for copy input in clipboard
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{ //this hook memomize the value in cache 
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqruvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*(){}[]"

    for(let i=0;i<=length;i++)
    {
      let index = Math.floor(Math.random()* str.length+1)
      pass += str.charAt(index)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword]) //we are putting setPassword here for optimization (not neccesary) if you put password instead then it will go into infinite loop

  const copyPasswordToClipboard = useCallback(()=>{ //used useCallback for optimization which will take a call back function and dependencies in this only password is the dependency
    //passwordRef has many methods for optimization
    passwordRef.current?.select();  //this ? check wheather there is value or not 
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{ //this hook call at first when we run the app.jsx and also call the function automatically on re-render or if any change occurs in the given dependencies
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator]) //here dependencies means if any change occures in lenth,numberAllowed,charAllowed or passwordGenerator() then re-render and call the passwordGenerator method

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center py-5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef} //due to this line now it can talk with code on line no:11
          />
          <button onClick={copyPasswordToClipboard} className='bg-red-900 text-center text-white ml-2 py-2 px-5 flex shadow rounded-lg'>COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
