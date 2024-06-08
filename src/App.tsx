import { CheckCode } from "./components/CheckCode"
import { Comments } from "./components/Comments"
import { GenerationCode } from "./components/GenerationCode"
import { Options } from "./components/Options"

function App() {


  return (
    <div className="app h-screen">
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 max-w-3xl mx-auto py-6 sm:grid-cols-2 px-2">
        <Options />
        <CheckCode />

        <GenerationCode />

        <Comments/>
      </div>
    </div>
  )
}

export default App
