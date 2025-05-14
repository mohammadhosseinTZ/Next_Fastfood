import Image from 'next/image';
import Link from 'next/link';
import style from "./style.module.css"

interface FoodT {
  id: number;
  name: string;
  price: number;
  image: string;
}

const fetchData = async (): Promise<FoodT[] | string> => {

  const res = await fetch("http://192.168.1.6:3000/api/foods", { cache: "no-store" })
  if (res.ok) {
    const data: FoodT[] = await res.json()
    return data
  } else {
    return "something happend ..."
  }
}
async function Food() {
  const foods = await fetchData()
  if (typeof foods === "string") {
    return <div>{foods}</div>;
  }

  return (
    <div className={`${style.wrapper} main-container`}>
      {foods.map((food, i) => (
        <div className={style.item}>
          <Link href={`/food/${food.id}`}>
            <div className={style.imgWrapper}>
              <Image src={food.image} alt={food.name} fill />
            </div>
          </Link>
          <h5 className={style.title}>
            <Link href={`/food/${food.id}`}>
              {food.name}
            </Link>
          </h5>
          <div className={style.cart}>
            <p>${food.price}</p>
            <Link href={`/food/${food.id}`}>More Details</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Food