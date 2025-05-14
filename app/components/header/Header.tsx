"use client"
import style from "./style.module.css"
import { BlueButton, Menu } from "../buttons";
import YellowButton from "../buttons/YellowButton";
import Nav from "./Nav";
import { useEffect, useState } from "react";

export default function Header() {
    const [nav , setNav] = useState<boolean>(false)

    
    return (
        <header className={style.header}>
            <div className="main-container">
                <Menu nav={nav} setNav={setNav}/>
                <div className={`${style.nav} ${nav ? style.active : ''}`}>
                    <Nav/>
                </div>
                <div className={style.login}>
                    <BlueButton title="LOGINT" />
                    <YellowButton title="REGISTER" />
                </div>
            </div>
        </header>
    )
}