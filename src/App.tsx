import { CheckCode } from "./assets/components/CheckCode"
import { Comments } from "./assets/components/Comments"
import { GenerationCode } from "./assets/components/GenerationCode"
import { Options } from "./assets/components/Select"

function App() {


  return (
    <div className="app   h-screen ">
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 max-w-3xl mx-auto py-6 ">
        <Options />
        <CheckCode />

        <GenerationCode />

        <Comments/>
      </div>
    </div>
  )
}

export default App
