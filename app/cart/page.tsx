'use client'

import { useContext, useEffect, useState } from "react"
import { CartContext, CartItem } from "../reducer/cart"
import style from "./style.module.css"
import Image from "next/image"

function Cart() {
    const context = useContext(CartContext)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    let sum = context?.state.items.reduce((acc:number , cur:CartItem) =>{
        acc+= cur.price
        return acc ;
    } ,0)
    type CountedItem = {
        item: CartItem
        count: number
    }

    const foods = context?.state.items.reduce<{ item: CartItem, count: number }[]>((acc, cur) => {
        const finded = acc.findIndex(el => el.item.id === cur.id)

        if (finded !== -1) {
            acc[finded].count += 1
        } else {
            acc.push({ item: cur, count: 1 })
        }

        return acc
    }, [])



    return (
        <div className="main-container">

            <div className={style.wrapper}>
                <div className={style.nav}>
                    <h1>Your Cart:</h1>
                    <div>
                        Total Purchase:
                        <span> ${isClient && sum}</span>
                    </div>
                </div>
                <div className={style.items}>
                    {isClient &&
                        foods?.map(({ item, count }) => (
                            <div key={item.id} className={style.item}>

                                <div className={style.imgWrapper}>
                                    <Image src={item.image} alt={item.name} fill />
                                </div>

                                <h5>{item.name}</h5>
                                <div className={style.actions}>
                                    <button onClick={()=>context?.dispatch({type:"ADD_ITEM" , payload:item})}>+</button>
                                    <button onClick={()=>context?.dispatch({type:"REMOVE_ITEM" , payload:+item.id})}>-</button>
                                    <span className={style.count}>{count}</span>
                                </div>
                            </div>
                        ))}
                </div>


            </div>
        </div>
    )
}

export default Cart