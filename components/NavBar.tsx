import Link from 'next/link'

export default function NavBar() {
	return (
		<nav className="max-w-md p-3 mx-auto border-b-2 border-gray">
			<ul className="flex ">
				<li className="flex-grow">
					<Link href={'/'} className="p-2 font-bold">
						AMH Menu
					</Link>
				</li>
				<li>
					<Link href={'/overview'} className="p-2">
						Overview
					</Link>
				</li>
				<li>
					<Link href={'/'} className="p-2">
						Today
					</Link>
				</li>
			</ul>
		</nav>
	)
}
