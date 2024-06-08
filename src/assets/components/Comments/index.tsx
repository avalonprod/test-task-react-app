import { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addComment, appState } from "../../redux/slices/app"
import { RootState } from "../../redux/store"



export const Comments = () => {
  const [commentVal, setCommentVal] = useState<string>('')

  const { comments }: appState = useSelector((state: RootState) => state.app)

  const dispatch = useDispatch()


  const handleSubmit = (e: FormEvent) =>{
    e.preventDefault()
    dispatch(addComment(commentVal))
    setCommentVal('')
  }

  return (
    <form className="col-span-2 flex flex-col gap-6  p-4 border rounded-xl" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        {comments.map((item, i) =>{
          return <div className="p-3 border border-1 rounded-lg bg-indigo-50 text-indigo-900 border-indigo-400" key={i}>{item}</div>
        })}
        
      </div>
      <textarea className="w-full h-20 px-2 py-1 border border-2 rounded-xl outline-0 focus:border-3 focus:border-indigo-400 resize-none" value={commentVal} onChange={(e) => setCommentVal(e.target.value)}></textarea>
      <button className="rounded-lg bg-indigo-400 w-full  h-10 text-white p-2 " >Send Comment</button>
    </form>
  )
}
