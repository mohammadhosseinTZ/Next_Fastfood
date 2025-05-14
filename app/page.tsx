import Image from "next/image"
import style from "./style.module.css"
import { BlueButton, Foods } from "./components"
import Link from "next/link"
function Home() {
  return (
    <section>
      <div className={style.hero}>
        <div className={` main-container`}>
          <div className={style.des}>
            <h1>Delicious Fast Food, Delivered Fast</h1>
            <p>Satisfy your cravings with hot, fresh meals — ready when you are.</p>
            <Link href={"/food"}>MENU</Link>
          </div>
          <div className={style.imgWrapper}>
            <Image src="./images/hero.jpg" alt="fast food" layout="responsive" width={800} height={600} />
          </div>
        </div>
      </div>
      <section className={style.body}>
        <div className={`main-container ${style.foods}`}>
          <div className={style.desFoods}>
            <h2>Our Best Menu</h2>
            <p>Made from fresh ingredients, cooked with love and passion by our amazing chefs</p>
          </div>
          <div>
            <Foods />
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home