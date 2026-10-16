import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const[length,setlength] = useState(8)
  const[numberallowed,setnumberallowed]=useState(false);
  const[charallowed,setcharallowed]=useState(false);
  const[password,setpassword]=useState("");

  //useref hook
  const pswdref = useRef(null);

  const pswdGen = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberallowed) {
      str += "0123456789";
    }
    if (charallowed) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }
    setpassword(pass);


  }, [length, numberallowed, charallowed, setpassword]);

  const copyPasswordTOClipboard = useCallback(() => {
    pswdref.current.select();
    window.navigator.clipboard.writeText(password);
  },
  [password]);
    
      

  useEffect(() => {
    pswdGen();
  }, [length, numberallowed, charallowed, pswdGen]);

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'
     >
      <h1 className='text-2xl font-bold text-center mb-2 text-white'>Password Generator</h1>
      <div className='flex shadow-lg 
        rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password}
        style={{backgroundColor:'white'}}
        className='w-full py-1 px-3 outline-none' 
        placeholder='password' readOnly ref={pswdref}/>

        <button
        onClick={copyPasswordTOClipboard}
         className='outline-none bg-blue-500 text-white py-1 px-3 hover:bg-blue-600'>
          Copy
        </button>


      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range" min="4" max="100" 
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setlength(e.target.value)}
          />
            <label htmlFor="">Length: {length}</label>
        </div>


        <div className='flex item-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberallowed}
          id="numbers"
          checked={numberallowed}
          onChange={()=>{setnumberallowed((prev)=>!prev)}}
          />
          <label htmlFor="numbersInput">Numbers</label>
        </div>


        <div className='flex item-center gap-x-1'>
          <input type="checkbox" id="chars"
          defaultChecked={charallowed} 
          checked={charallowed}
          onChange={()=>{setcharallowed((prev)=>!prev)}}
          />
          <label htmlFor="chars">Special Characters</label>
        </div>


      </div>

    
     </div>
    </>
  )
}

export default App
