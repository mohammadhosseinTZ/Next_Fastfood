import { NextApiRequest } from "next";
import { NextResponse  } from "next/server";

interface PropsT {
  params: {
    id: string;
  };
}

interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
  ){
    const { id } = await params
  const res = await fetch("http://192.168.1.6:3000/api/foods", { cache: "no-store" });
  if (!res.ok) {
    return new NextResponse("Failed to fetch foods", { status: 500 });
  }

  const data: Item[] = await res.json();

  const item = data.find((el) => el.id == Number(params.id));

  if (!item) {
    return new NextResponse("Food not found", { status: 404 });
  }
  
  return NextResponse.json(item);
}
