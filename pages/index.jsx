import { useState } from "react"


export default function Home() {
  const [keyBoard, setKeyBoard] = useState(false)
  const [text, setText] = useState([])
  const keyLayout = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "<-",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
    "space"
];


const handleChange = (letter) => {
  switch(letter) {
    case '<-':
       setText(text.splice(0, text.length-1))
       break;
    case 'space' :
      setText([...text, " "])
      break;
    default:
      setText([...text, letter])
  }
}
  console.log(text);
  return (
    <div>
      <textarea onFocus={() => setKeyBoard(true)} className="border-2 border-black" value={text.join('')}></textarea>
      {keyBoard && 
        <div className="bg-[#004134] w-full min-h-1/2 fixed bottom-0 text-white flex flex-wrap">
        {keyLayout.map((letter,index) => {
          return (
            <button key={index} onClick={() => {handleChange(letter)}} className="w-1/12 px-4 py-2 m-1 cursor-pointer bg-[#3B675D]">
              {letter}
            </button>
          )
        })}
        </div>
      }
    </div>
  )
}

