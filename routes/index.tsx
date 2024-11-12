import { useSignal } from '@preact/signals'

export default function Index() {
    const count = useSignal(3)
    return (
        <div class='px-4 py-8 mx-auto bg-[#86efac]'>
            Index
        </div>
    )
}
