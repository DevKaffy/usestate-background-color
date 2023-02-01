import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#761187');
 
  return (
    <section
      style={{
        background: color,
        display: "flex",
        padding: "auto",
        columnGap: "2rem",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: '0 2rem 5rem 2rem',

      }}
    >
      <button
        className="border border-[black] bg-[#871111] w-[6.31rem] h-[3.62rem]"
        onClick={() => setColor("#871111")}
      ></button>
      <button
        className="bg-[#5A6628] w-[6.31rem] h-[3.62rem] border border-[black]"
        onClick={() => setColor("#5A6628")}
      ></button>
      <button
        className="bg-[#113287] w-[6.31rem] h-[3.62rem] border border-[black]"
        onClick={() => setColor("#113287")}
      ></button>
      <button
        className="bg-[#761187] w-[6.31rem] h-[3.62rem] border border-[black]"
        onClick={() => setColor("#761187")}
      ></button>
    </section>
  );
}

export default App
