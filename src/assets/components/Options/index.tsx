import { useDispatch } from 'react-redux'
import { selectOption } from '../../redux/slices/app'

export const Options = () => {
  const dispatch = useDispatch()

  const onSelect = (option: string) => {
    dispatch(selectOption(option))
  }

  return (
  <div className="col-span-1 flex sm:col-span-2">
    <label className=" flex items-center w-1/3 h-10 px-2 border rounded-l-lg has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:border-indigo-400 cursor-pointer text-gray-900 has-[:checked]:text-indigo-400" onClick={() => onSelect("Option A")}>
    <input type="radio" className=" hidden" name="select" />
    <span className="text-inherit">Option A</span>
    </label>
    <label className=" flex items-center w-1/3 h-10 px-2 border has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:border-indigo-400 cursor-pointer text-gray-900 has-[:checked]:text-indigo-400" onClick={() => onSelect("Option B")}>

    <input type="radio" className=" hidden"  name="select" />
    <span className="text-inherit">Option B</span>
    </label>
    <label className=" flex items-center w-1/3 h-10 px-2 border rounded-r-lg has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:border-indigo-400 cursor-pointer text-gray-900 has-[:checked]:text-indigo-400" onClick={() => onSelect("Option C")}>
    <input type="radio" className=" hidden" name="select" />
      <span className="text-inherit">Option C</span>
    </label>
  </div>
  )
}

