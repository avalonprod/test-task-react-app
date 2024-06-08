import { ChangeEvent, FormEvent, useState } from 'react'

export const CheckCode = () => {
  const [promoCode, setPromoCode] = useState<string>('');
  const [isValid, setIsValid] = useState<string>("");

  const validPromoCodes = ['DISCOUNT10', 'SALE20', 'FREESHIP'];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!e.target.value.length) {
      setIsValid("")
    }
    setPromoCode(e.target.value)
  }
  /**
   * Handles form submission by preventing default behavior and 
   * setting the validity of the entered promo code.
 */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validPromoCodes.includes(promoCode)) {
      setIsValid("valid");
    } else {
      setIsValid("invalid");
    }
  };

  return (
    <form className="col-span-1 flex justify-center items-center p-6 border rounded-lg " onSubmit={handleSubmit} >
    <input  type="text" className={`w-full h-10 border-2 rounded-l-lg p-2 outline-0 focus:border-3 focus:border-indigo-400 ${isValid.length ? isValid == "valid" ? 'border-green-500' : 'border-red-500' : ""}`} onChange={handleChange}  required/>
    <button className="rounded-r-lg bg-indigo-400  h-10 text-white p-2" >Check</button>
  </form>
  )
}
