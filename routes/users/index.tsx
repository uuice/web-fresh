import { useSignal } from '@preact/signals'

export default function UserIndex() {
    const count = useSignal(3)
    return (
        <div class='px-4 py-8 mx-auto bg-[#86efac]'>
            UserIndex 用户列表
        </div>
    )
}
