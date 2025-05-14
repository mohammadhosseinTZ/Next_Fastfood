import Link from "next/link"
import style from "./style.module.css"
interface Prop{
    title:string
}
function YellowButton({title}:Prop) {
    return(
        <>
            <Link  href={"/menu"} className={style.yellowButton}>{title}</Link>
        </>
    )
}

export default YellowButton