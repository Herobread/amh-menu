import Header from '@/components/Header'
import H3 from '@/components/typography/H3'

export default function Page() {
	return (
		<>
			<Header header={'About'} subheader="" />
			<div className="grid gap-3">
				<H3>What:</H3>
				<p>
					This website is just a digitalized version of menu on the
					wall near the entrance to the dining hall.
				</p>
				<p>
					This project far from being perfect, so there is room for
					improvement.
				</p>
				<H3>Why:</H3>
				<p>
					I just like doing some random projects, that can be somewhat
					useful.
				</p>
				<H3>How:</H3>
				<p>(nerd stuff warning)</p>
				<ul className="">
					<li>
						<span className="font-bold">Framework:</span> Next.js
						14, using app directory and Typescript
					</li>
					<li>
						<span className="font-bold">Database:</span> Planetscale
						MySQL with prisma ORM
					</li>
					<li>
						<span className="font-bold">Styling:</span> TailwindCSS
					</li>
					<li>
						<span className="font-bold">Design:</span> Figma
					</li>
				</ul>
			</div>
		</>
	)
}
