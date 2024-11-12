import { type PageProps } from '$fresh/server.ts'
import Counter from '../islands/Counter.tsx'
import { useSignal } from '@preact/signals'

export default function Layout({ Component, _state }: PageProps) {
    // do something with state here
    const count = useSignal(3)
    return (
        <div class='layout'>
            <Counter count={count} />
            <Component />
        </div>
    )
}
