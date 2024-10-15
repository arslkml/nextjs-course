"use client"
// Nested Dynamic route
import { notFound } from "next/navigation"

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetails({ params }: {
    params: {
        reviewId: string
        productId: string
    }
}) {
    // Simulate error loading condition to demonstrate error handling
    // const random = getRandomInt(2)

    // if (random === 1) {
    //     throw new Error('Error Loading Review')
    // }

    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }
  return (
    <h1>
        Review {params.reviewId} for Product {params.productId}
    </h1>
  )
}
