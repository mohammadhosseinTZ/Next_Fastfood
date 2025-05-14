import Link from "next/link"
import style from "./style.module.css"
interface Prop{
    title:string
}
function BlueButton({title}:Prop) {
    return(
        <>
            <Link  href={"/menu"} className={style.blueButton}>{title}</Link>
        </>
    )
}

export default BlueButton