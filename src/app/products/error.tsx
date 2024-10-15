'use client'
// Error Handling 
export default function ErrorBoundary ({ error, reset }: {
    // Recovering from error with reset
    error: Error,
    reset: () => void
}) {
    return  (
        <div>
            {error.message}
            <button onClick={reset}>Retry</button>
        </div>
    )
}