'use client'

import { useState } from 'react'

export default function Counter({dictionary,}: { dictionary: {
        increment: string
        decrement: string
        text: string
    }
}) {
    const [count, setCount] = useState(0)
    return (
        <p>
            {dictionary.text}:{' '}
            <button onClick={() => setCount((n) => n - 1)}>
                {dictionary.decrement}
            </button>{' '}
            {count}{' '}
            <button onClick={() => setCount((n) => n + 1)}>
                {dictionary.increment}
            </button>
        </p>
    )
}