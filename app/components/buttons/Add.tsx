"use client"

import style from "./style.module.css"
import { CartContext } from "@/app/reducer/cart"
import { useContext } from "react"
type CartItem = {
  id: number
  name: string
  price: number
  desc: string,
  image:string
}
function Add({title , styleProps , item}:{title:string ,   styleProps?: React.CSSProperties , item:CartItem }) {
  const context = useContext(CartContext)
  const handleAdd = ()=>{
    context?.dispatch( {type:"ADD_ITEM" , payload:item})
  }
  return (
    <button onClick={handleAdd} style={styleProps}   className={style.add}>{title}
    </button>
  )
}

export default Add