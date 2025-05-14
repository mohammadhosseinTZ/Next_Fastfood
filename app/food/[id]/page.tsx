import Image from "next/image";
import style from "./style.module.css"
import { Add } from "@/app/components";


type Props = {
  params: {
    id: string;
  };
};
interface Item {
  id: number,
  name: string,
  image: string,
  price: number,
  desc: string
}
const fetchData = async (id: string) => {
  const res = await fetch(`http://192.168.1.6:3000/api/foods/${id}`, { cache: "no-store" })
  if (!res.ok) return
  const data = await res.json()
  return data
}
async function FoodItem({ params }: Readonly<Props>) {

  const data: Item = await fetchData(params.id)

  return (
    <div className={style.food}>
      <div className={`main-container ${style.foodWrapper}`}>
        <div className={style.imgWrapper}><Image src={data.image} alt={data.name} fill /></div>
        <div className={style.description}>

          <h5 className={style.title}>

            {data.name}

          </h5>

          <p className={style.desc}>{data.desc}</p>
          <div className={style.addToCart}>
            <Add title="Add To Cart" styleProps={{ color: "white", fontSize: "17px" , background:"#ebac02" }} item={data}/>
            <span className={style.price}>${data.price}</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FoodItem