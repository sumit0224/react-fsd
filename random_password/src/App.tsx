import { useEffect, useState } from "react"


const App = () => {
  const [password, setPassword ] = useState<string>("");
  const [length, setLength]  = useState<number>(6);
  const [number, setNumber] = useState<boolean>(false);
  const [spChar, SetSpChar] = useState<boolean>(false);


  const genPass = ()=>{
    let char : string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let num : string = "1234567890"
    let specailChar: string = "~`!@#$%^&*()_+{}<>?"
    let pass: string = ""
    if(number){
      char += num
    }
    if(spChar){
      char+= specailChar
    }
    for(let i :number = 0; i< length; i++){ // 0 - 1 0.3 , 0.4  , 0. 5  * 52 = 20.8 = 20 
      let rand: number = Math.floor(Math.random() * char.length)
          pass += char[rand]
    }
    return setPassword(pass)

  }

  useEffect(()=>{
      genPass()
  }, [number, spChar, length])



  return (
    <div className="w-screen h-screen bg-zinc-900 text-white flex justify-center items-center">
  <div className="bg-zinc-800 p-6 rounded-2xl w-[400px] shadow-lg space-y-5">
    
    <h1 className="text-2xl font-bold text-center">
      Random Password Generator
    </h1>

    {/* Input + Copy Button */}
    <div className="flex gap-2">
      <input
        type="text"
        disabled
        value={password}
        placeholder="Generated Password"
        className="flex-1 px-4 py-2 rounded-lg bg-zinc-700 outline-none"
      />

      <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Copy
      </button>
    </div>

    {/* Options */}
    <div className="space-y-4">

      {/* Number Checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={number}
          onChange={(e : React.ChangeEvent<HTMLInputElement>)=>{
            setNumber(e.target.checked)
          }}
          className="w-4 h-4 accent-blue-500"
        />
        <span>Numbers</span>
      </div>

      {/* Special Character Checkbox */}
      <div className="flex items-center gap-2">
        <input
          checked={spChar}
          type="checkbox"
          onChange={(e : React.ChangeEvent<HTMLInputElement>)=>{
            SetSpChar(e.target.checked)
          }}
          className="w-4 h-4 accent-blue-500"
        />
        <span>Special Characters</span>
      </div>

      {/* Range */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Password Length</span>
          <span>{length}</span>
        </div>

        <input
          value={length}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
            setLength(Number(e.target.value))
          }}
          type="range"
          min="6"
          max="30"
          className="w-full accent-blue-500"
        />
      </div>

    </div>
  </div>
</div>
  )
}

export default App
