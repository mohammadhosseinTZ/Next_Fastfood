"use client"
import { CartContext } from "@/app/reducer/cart";
import Link from "next/link"
import { useContext, useEffect, useState } from "react";
import style from "./style.module.css"

function Nav() {
    const context = useContext(CartContext)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
      setIsClient(true)
    }, [])
    
    return (
        <ul>
            <li><Link href={"/"}>HOME</Link></li>
            <li><Link href={"/"}>ABOUT</Link></li>
            <li><Link href={"/food"}>MENU</Link></li>
            <li><Link href={"/admin"}>ADMIN</Link></li>
            <li className={style.list}><Link href={"/cart"}>CART </Link>{isClient &&<span className={style.cart}>{context?.state.items.length}</span>}</li>
        </ul>
    )
}

export default Nav