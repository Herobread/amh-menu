import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="max-w-md p-3 mx-auto border-t-2 border-gray flex flex-col">
			<p className="font-bold">Info:</p>
			<Link href={'/about'} className="hover:underline">
				About
			</Link>
			<Link
				href={'https://github.com/Herobread/amh-menu'}
				className="hover:underline"
				target="_blank"
			>
				GitHub Repo
			</Link>
			<p>
				Data source: <i>Paper menu near entrance</i>
			</p>
			<p>
				Version: <i>Beta 0.6.1</i>
			</p>
		</footer>
	)
}
