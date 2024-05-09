import { useState } from "react"
function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen"
        style={{ backgroundColor: color }}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-4 py-3 rounded-2xl">
            <button onClick={()=>setColor('red')} className="outline-none px-4 text-white shadow-xl rounded-xl"
              style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={()=>setColor('green')} className="outline-none px-4 text-white shadow-xl rounded-xl"
              style={{ backgroundColor: "green" }}>Green</button>
              <button onClick={()=>setColor('yellow')} className="outline-none px-4 text-black shadow-xl rounded-xl"
                style={{ backgroundColor: "yellow" }}>Yellow</button>
            <button onClick={()=>setColor('blue')} className="outline-none px-4 text-white shadow-xl rounded-xl"
              style={{ backgroundColor: "blue" }}>Blue</button>
              <button onClick={()=>setColor('black')} className="outline-none px-4 text-white shadow-xl rounded-xl"
                style={{ backgroundColor: "black" }}>Black</button>
                <button onClick={()=>setColor('grey')} className="outline-none px-4 text-white shadow-xl rounded-xl"
                  style={{ backgroundColor: "grey" }}>Grey</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
