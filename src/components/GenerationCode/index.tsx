import { FormEvent, useState } from 'react'

export const GenerationCode = () => {
  const [promoCode, setPromoCode] = useState<string>()
  const promoСodes = ['DISCOUNT10', 'SALE20', 'FREESHIP']
  
  // Randomly selects a promotional code from an array
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const randomIndex = Math.floor(Math.random() * promoСodes.length);
    const randomCode = promoСodes[randomIndex];
    setPromoCode(randomCode);
  }

  return (
    <form className="col-span-1 flex flex-col justify-center items-center p-6 border rounded-lg " onSubmit={handleSubmit}>
    <input  type="text" className="w-full h-10 border-2  rounded-lg p-2 outline-0 focus:border-3 focus:border-indigo-400" disabled value={promoCode}/>
    <button className="w-full rounded-lg bg-indigo-400  h-10 text-white p-2 mt-2" >Generate Code</button>
  </form>
  )
}
