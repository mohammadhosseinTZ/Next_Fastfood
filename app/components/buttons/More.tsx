"use client"

import style from "./style.module.css"
import { useRouter } from "next/navigation"
function More({title , id}:{title:string , id:number}) {
    const router = useRouter()
  return (
    <button className={style.more} onClick={()=>{
        window.location.href = `/food/${id}`
        
    }}>{title}</button>
  )
}

export default More