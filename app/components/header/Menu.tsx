"use client"
import Image from "next/image"
import style from "./style.module.css"
interface NavProps{
    nav : boolean ,
    setNav : React.Dispatch<React.SetStateAction<boolean>>

}
function Menu({ nav, setNav }: NavProps) {
    return (
        <div className={style.menu } onClick={()=>setNav(!nav)}>
            <Image src={"./images/menu.png"} alt="menu" layout="responsive" width={100} height={100}  className={style.menuIcon}/>
            <Image src={"./images/close.png"} alt="menu" layout="responsive" width={100} height={100} className={style.closeIcon} />
        </div>
    )
}

export default Menu