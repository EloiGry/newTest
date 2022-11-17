import { useState } from "react"


export default function Home() {
  const [keyBoard, setKeyBoard] = useState(false)
  const [text, setText] = useState([])
  const keyLayout = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
    "space"
];


const handleChange = (letter) => {
  setText([...text, letter])}

  return (
    <div>
      <textarea onFocus={() => setKeyBoard(true)} className="border-2 border-black" value={text}></textarea>
      {keyBoard && 
        <div className="bg-[rgb(1,65,52, 0.9)] w-full min-h-1/2 fixed bottom-0 text-white flex flex-wrap">
        {keyLayout.map((letter,index) => {
          return (
            <button key={index} onClick={() => {handleChange(letter)}} className="px-4 py-2 m-1 cursor-pointer opacity-800">
              {letter}
            </button>
          )
        })}
        </div>
      }
    </div>
  )
}

