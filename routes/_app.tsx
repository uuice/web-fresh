import { type PageProps } from '$fresh/server.ts'
import { useSignal } from '@preact/signals'
export default function App({ Component }: PageProps) {
    const test = useSignal('test')
    return (
        <html style={test}>
            <head>
                <meta charset='utf-8' />
                <meta name='author' content='uuice' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <title>title</title>
                <link rel='stylesheet' href='/styles.css' />
            </head>
            <body>
                <Component />
            </body>
        </html>
    )
}
