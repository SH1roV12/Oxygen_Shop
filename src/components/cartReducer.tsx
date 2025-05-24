export type Product ={
    id: number;
    title:string;
    price:number;
    img:string;
    quantity: number
}

type State = {
    cart: Product[]
}


type Action = 
|{type: "Add_To_Cart", payload: Product}
|{type: "Remove_Item", payload: number}

export const initialState: State = {
    cart:[]
}

export function cartReducer(state: State, action: Action): State{
    switch (action.type) {
        case "Add_To_Cart":
            const indexExit = state.cart.findIndex(item=> item.id === action.payload.id);
            if (indexExit !== -1){
                const updated = [...state.cart]
                const existingItem = {...updated[indexExit]}
                existingItem.quantity += 1
                updated[indexExit] = existingItem
                return {cart:updated}
            }
            else{
                return {cart: [...state.cart, {...action.payload, quantity:1}]}
            }
        case "Remove_Item":
            return {...state, cart: state.cart.filter(item => item.id !== action.payload)};
        default:
            return state
    }
}