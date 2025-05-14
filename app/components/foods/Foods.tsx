import Image from 'next/image';
import React from 'react'
import Food from './Food';

interface FoodT {
    id: number;
    name: string;
    price: number;
    image: string;
}

const fetchData = async (): Promise<FoodT[] | string> => {

    const res = await fetch("http://192.168.1.6:3000/api/foods" , {cache:"no-store"})
    if (res.ok) {
        const data: FoodT[] = await res.json()
        return data
    } else {
        return "something happend ..."
    }
}
async function Foods() {
    const foods = await fetchData()
    if (typeof foods === "string") {
        return <div>{foods}</div>;
    }

    return (
        <div>
            <Food foods={foods}/>
        </div>
    )
}

export default Foods