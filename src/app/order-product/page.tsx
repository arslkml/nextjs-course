'use client'
// Navigating Programmatically
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter()

    const handleClick = () => {
        console.log('Placing Your Order');
        router.forward()
    }

  return (
    <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Holder</button>
    </>
  )
}
