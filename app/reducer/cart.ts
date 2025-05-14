
import { createContext, Dispatch } from "react"

export type CartItem = {
    id: number
    name: string
    price: number
    desc: string,
    image: string
}
type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'ADD_ITEM_FIRST'; payload: CartItem[] }
    | { type: 'REMOVE_ITEM'; payload: number }

export type CartState = {
    items: CartItem[]
}
export const cartInitialState: CartState = {
    items: []
}
export const cartReducer = (state: CartState, action: CartAction) => {


    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case "ADD_ITEM_FIRST":
            return {
                ...state,
                items: action.payload,
            };

        case "REMOVE_ITEM":
            const indexToRemove = state.items.findIndex(item => item.id === action.payload);
            if (indexToRemove === -1) return state;

            const newItems = [...state.items]; 
            newItems.splice(indexToRemove, 1); 

            return {
                ...state,
                items: newItems,
            };

        default:
            return state;
    }

}
export const CartContext = createContext<{
    state: CartState
    dispatch: Dispatch<CartAction>
} | null>(null)
