import ListOfItems from "./components/listItems"
import Modal_Window from "./components/modal"
import { cartReducer, initialState } from "./components/cartReducer"
import { useState, useReducer } from "react"
import "./app.css"
function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <div>
      <ListOfItems openModal={()=>setIsOpen(true)} dispatch={dispatch}/>
    {isOpen && <Modal_Window closeModal={()=>setIsOpen(false)} dispatch={dispatch} cart={state.cart}/>}
      <button onClick={()=>console.log(state)}>debug</button>
    </div>
  )
}

export default App
