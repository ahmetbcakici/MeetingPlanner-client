import Link from 'next/link';

export default () => (
	<nav className="navbar is-primary" role="navigation" aria-label="main navigation">
		<div className="container">
			<div className="navbar-brand">
				<a className="navbar-item" href="/">
					<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
				</a>

				<a
					role="button"
					className="navbar-burger burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a className="button is-light is-rounded is-outlined">Let's Plan!</a>
							<Link href="/login">
								<a className="button is-primary">
									<i className="fas fa-user"></i>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
);
