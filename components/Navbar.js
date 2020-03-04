import Link from 'next/link';

export default () => (
	<div>
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a>About</a>
				</Link>
			</li>
		</ul>

		<style jsx>{`
			ul {
                list-style:none;
                font-size:30px;
			}
		`}</style>
	</div>
);
