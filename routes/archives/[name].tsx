import { useSignal } from '@preact/signals'
import { type PageProps } from '$fresh/server.ts'
export default function ArchiveDetail(props: PageProps) {
    const count = useSignal(3)
    return (
        <div class='px-4 py-8 mx-auto bg-[#86efac]'>
            ArchivesDetail Hello {props.params.name}
        </div>
    )
}
