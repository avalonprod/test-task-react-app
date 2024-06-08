import React, { FormEvent, useState } from 'react'

export const CheckCode = () => {
  const [promoCode, setPromoCode] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const validPromoCodes = ['DISCOUNT10', 'SALE20', 'FREESHIP'];



  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(promoCode)
    if (validPromoCodes.includes(promoCode)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <form className="col-span-1 flex justify-center items-center p-6 border rounded-lg " onSubmit={handleSubmit} >
    <input  type="text" className={`w-full h-10 border-2  rounded-l-lg p-2 outline-0 focus:border-3 focus:border-indigo-400 ${isValid ? 'border-red-500' : 'border-green-500'}`}  required/>
    <button className="rounded-r-lg bg-indigo-400  h-10 text-white p-2" >Check</button>
  </form>
  )
}
