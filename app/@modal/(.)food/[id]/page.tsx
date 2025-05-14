import Image from "next/image";
import style from "./style.module.css"
import { Add, Close, More } from "@/app/components";
import Link from "next/link";

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
    <div className={style.modal}>
      <Close />

      <div className={style.imgWrapper}><Image src={data.image} alt={data.name} fill /></div>

      <div className={style.data}>
        <h5>

          {data.name}

        </h5>
        <span>${data.price}</span>
      </div>
      <p className={style.desc}>{data.desc}</p>
      <Add title="Add To Cart" item={data}/>

      <More title={"MORE"} id={data.id} />
    </div>
  )
}

export default FoodItem