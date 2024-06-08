import React, { FormEvent, useState } from 'react'

export const GenerationCode = () => {
  const [code, setCode] = useState<string>()
 
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setCode("NEWCODE123")
  }

  return (
    <form className="col-span-1 flex flex-col justify-center items-center p-6 border rounded-lg " onSubmit={handleSubmit}>
    <input  type="text" className="w-full h-10 border-2  rounded-lg p-2 outline-0 focus:border-3 focus:border-indigo-400" disabled value={code}/>
    <button className="w-full rounded-lg bg-indigo-400  h-10 text-white p-2 mt-2" >Check</button>
  </form>
  )
}
