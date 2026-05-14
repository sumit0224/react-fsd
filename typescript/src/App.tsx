import React, { useEffect, useState } from 'react'

const App = () => {
  const [password, setPassword] = useState<string>("")
  const [length, setLength] = useState<number>(6)
  const [number, setNumber] = useState<boolean>(false)
  const [special, setSpecial] = useState<boolean>(false)

  const genratePass = () => {
    let pass = ""

    let char: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let num: string = "1234567890"

    let specialChar: string = "~!#$%^&*()_+={}[]:';<>?/"
    if (number) {
      char += num
    }
    if (special) {
      char += specialChar
    }

    for (let i: number = 0; i < length; i++) {
      let rand = Math.floor(Math.random() * char.length)
      pass += char[rand]
    }
    setPassword(pass)

  }

  useEffect(() => {
    genratePass()
  }, [length, number, special])


  return (
    <div className="w-screen h-screen bg-zinc-900 text-white flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-zinc-800 p-6 rounded-2xl shadow-2xl space-y-5">

        <h1 className="text-3xl font-bold text-center tracking-wide">
          RANDOM PASSWORD
        </h1>

        {/* Password Input */}
        <div className="flex gap-2">
          <input
            value={password}
            disabled
            type="text"
            className="flex-1 px-4 py-3 rounded-lg bg-zinc-700 border border-zinc-600 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4">

          {/* Number Checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={number}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNumber(e.target.checked)
              }
              className="w-4 h-4 accent-blue-500"
            />
            <span className="text-sm font-medium">Include Numbers</span>
          </div>

          {/* Length Range */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Password Length</span>
              <span>{length}</span>
            </div>

            <input
              type="range"
              value={length}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLength(Number(e.target.value))
              }}
              min="6"
              max="30"
              className="w-full accent-blue-500"
            />
          </div>

          {/* Special Characters */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={special}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSpecial(e.target.checked)
              }
              className="w-4 h-4 accent-blue-500"
            />
            <span className="text-sm font-medium">
              Include Special Characters
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
