import { useSignal } from '@preact/signals'
import Counter from '../islands/Counter.tsx'
export default function Index() {
    const isDevelopment = Deno.env.get('ENV') === 'development'
    console.log(isDevelopment, 'isDevelopment')
    return (
        <div class='px-4 py-8 mx-auto bg-[#86efac]'>
            Index {isDevelopment ? 'development' : 'production'}

            <Counter></Counter>
        </div>
    )
}
