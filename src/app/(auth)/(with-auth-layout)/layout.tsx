// Route Group Course
export default function Authlayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <h2>Inner Layout</h2>
            {children}    
        </>
    )
}