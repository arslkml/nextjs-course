import { Metadata } from "next"

type Props = {
    params: {
        productId:string
    }
}
// Generate Metadata Course
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => resolve(`Asus - ${params.productId}`), 100)
    })
    return {
        title: `Product ${title}`,
        description: `View details of product ${params.productId}`,
    }
}


export default function ProductDetails({ params }: Props) {
    return (
        <h1>Product Details {params.productId}</h1>
    )
}