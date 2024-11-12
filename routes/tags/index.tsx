import { useSignal } from '@preact/signals'
import Counter from '../../islands/Counter.tsx'

export default function TagIndex() {
    const count = useSignal(3)
    return (
        <div class='px-4 py-8 mx-auto bg-[#86efac]'>
            TagIndex
        </div>
    )
}
