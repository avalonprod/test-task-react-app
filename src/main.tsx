
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import './output.css'
import store from './assets/redux/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>


)
