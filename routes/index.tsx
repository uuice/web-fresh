import { useSignal } from '@preact/signals'

export default function Index() {
    const isDevelopment = Deno.env.get('ENV') === 'development'
    console.log(isDevelopment, 'isDevelopment')
    const count = useSignal(3)
    const isDev = useSignal(false)
    isDev.value = isDevelopment
    return (
        <div class='px-4 py-8 mx-auto bg-[#86efac]'>
            Index 12222{isDevelopment ? '开发' : '生产'}
            Index 12222{isDev ? '开发' : '生产'}
            Index 12222{isDev.toString()}
        </div>
    )
}
