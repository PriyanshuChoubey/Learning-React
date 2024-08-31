import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")
  

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center grap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-10 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "Red"}}
          onClick={()=>setColor("red")} //onClick() takes a function that why we use ()=>setColor("red")
          >RED</button>
          <button className="outline-none px-10 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}
          onClick={()=>setColor("green")}  
          >GREEN</button>
          <button className="outline-none px-10 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}
          onClick={()=>setColor("blue")}
          >BLUE</button>
          <button className="outline-none px-10 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}
          onClick={()=>setColor("black")}
          >BLACK</button>
        </div>
      </div>
    </div>
  )
}

export default App
