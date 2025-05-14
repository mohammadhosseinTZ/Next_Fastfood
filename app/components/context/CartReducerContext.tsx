"use client"
import { CartContext, cartInitialState, cartReducer, CartState } from "@/app/reducer/cart"
import { useEffect, useReducer } from "react"

function init(initialState: CartState): CartState {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("carts")
      return {
        items: item ? JSON.parse(item) : [],
      }
    }
    return initialState
  }

function CartReducerContext({ children }: Readonly<{
    children: React.ReactNode
}>) {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState, init)
    useEffect(() => {
        const item = localStorage.getItem("carts")
        if (item) {
            dispatch({ type: "ADD_ITEM_FIRST", payload: JSON.parse(item) })
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("carts", JSON.stringify(state.items));

    }, [state.items])
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartReducerContext