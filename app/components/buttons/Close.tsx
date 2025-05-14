"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

function Close() {
    const router = useRouter()
  return (
    <Image onClick={()=>router.back()} src="/images/close.png" alt="close" width={20} height={20} />
  )
}

export default Close