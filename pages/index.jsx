import React, { useState } from "react";

  const keyLayout = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "&#8676;"];
  let keyLayout1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
  let keyLayout2 = ["&#8682;", "a", "s", "d", "f", "g", "h", "j", "k", "l", "&#8626;"]
  let keyLayout3 = ["&#10003;", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?"]
  const keyLayout4 = ["]"]



export default function Home() {
  const [keyBoard, setKeyBoard] = useState(false)
  const [text, setText] = useState([])
  const [uppercase, setUppercase] = useState(false)
  const ref = useOutsideClick(() => setKeyBoard(false));

  


const handleChange = (letter) => {
  switch(letter) {
    case '&#8676;':
       setText(text.splice(0, text.length-1)) 
       break;
    case ']' :
      setText([...text, " "])
      break;
      case '&#8626;' : 
      alert("Votre message a bien été envoyé")
      setText([])
      break;
      case '&#10003;' : 
      alert("Votre message a bien été enregistré")
      setText([])
      break;
      case '&#8682;' :
        if (!uppercase) {
          const newKey1 = keyLayout1.map(e => e.toUpperCase()) 
          keyLayout1 = newKey1
          const newKey2 = keyLayout2.map(e => e.toUpperCase()) 
          keyLayout2 = newKey2
          const newKey3 = keyLayout3.map(e => e.toUpperCase()) 
          keyLayout3 = newKey3
          setUppercase(true)
        }
        else {
          const newKey1 = keyLayout1.map(e => e.toLowerCase())
          keyLayout1 = newKey1
          const newKey2 = keyLayout2.map(e => e.toLowerCase()) 
          keyLayout2 = newKey2
          const newKey3 = keyLayout3.map(e => e.toLowerCase()) 
          keyLayout3 = newKey3
          setUppercase(false)
        }
        break;
    default:
      setText([...text, letter])
  }
}

const handleTarget = (e) => {
    const split = e.target.value.split("")
    setText([...text, split[split.length-1]])
}

const handleKeyDown = (e) => {
  if (e.key === 'Backspace') {
    e.preventDefault()
    const newText = text.splice(0, text.length-1)
    setText(newText)
}
}


  return (
    <div ref={ref} className="flex flex-col justify-center align-center">
      <textarea onFocus={() => setKeyBoard(true)} onChange={(e)=> handleTarget(e)} onKeyDown={(e)=>handleKeyDown(e)} rows='5' className="my-4 mx-32 md:mx-48 border-2 border-black" value={text.join('')}></textarea>
      {keyBoard && 
        <div className="bg-[#004134] fixed bottom-0 top-50 w-full text-white flex flex-wrap items-center justify-center">

        {keyLayout.map((letter,index) => {
          return (
            <button  key={index} onClick={() => {handleChange(letter)}} className="rounded w-1/12 px-2 py-1 md:px-4 md:py-2 m-0.5 md:m-1 cursor-pointer bg-[#3B675D] hover:bg-opacity-40">
              <span dangerouslySetInnerHTML={{__html: `${letter}`}}></span>
            </button>
          )
        })}

        <div className="mx-2 w-full flex justify-center"> 
        {keyLayout1.map((letter,index) => {
          return (
            <button  key={index} onClick={() => {handleChange(letter)}} className="rounded w-1/12 px-2 py-1 md:px-4 md:py-2 m-0.5 md:m-1 cursor-pointer bg-[#3B675D] hover:bg-opacity-40">
              {letter}
            </button>
          )
        })}
        </div>
        {keyLayout2.map((letter,index) => {
          return (
            <button  key={index} onClick={() => {handleChange(letter)}} className="rounded w-1/12 px-2 py-1 md:px-4 md:py-2 m-0.5 md:m-1 cursor-pointer bg-[#3B675D] hover:bg-opacity-40">
              <span dangerouslySetInnerHTML={{__html: `${letter}`}}></span>
            </button>
          )
        })}
        {keyLayout3.map((letter,index) => {
          return (
            <button  key={index} onClick={() => {handleChange(letter)}} className="rounded w-1/12 px-2 py-1 md:px-4 md:py-2 m-0.5 md:m-1 cursor-pointer bg-[#3B675D] hover:bg-opacity-40">
              <span dangerouslySetInnerHTML={{__html: `${letter}`}}></span>
            </button>
          )
        })}
        {keyLayout4.map((letter,index) => {
          return (
            <button  key={index} onClick={() => {handleChange(letter)}} className="rounded w-2/3 px-2 py-1 md:px-4 md:py-2 m-0.5 md:m-1 cursor-pointer bg-[#3B675D] hover:bg-opacity-40">
              <div className="transform rotate-90 text-3xl">{letter}</div>
            </button>
          )
        })}
        </div>
      }
    </div>
  )
}

const useOutsideClick = (callback) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
};
