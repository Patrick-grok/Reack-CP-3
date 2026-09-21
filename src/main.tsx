import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import List from "./component/ProductList.tsx"
import App from "./App.tsx"
// import TodoList from './component/TodoList.tsx'
createRoot(document.getElementById('root')!).render(

  <StrictMode>
      <App />
    {/*  <TodoList />*/}
  </StrictMode>,
)
