import Link from "next/link"

export default function page() {
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href="/blog/first">Blog</Link>
      <Link href="/products">Product</Link>
    </>
  )
}
