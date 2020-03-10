import { useState } from 'react';
import Link from 'next/link';

export default () => {
	return (
		<nav className="navbar is-info" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand">
					<Link href="/">
						<a className="navbar-item">
							<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
						</a>
					</Link>

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
								<div class="dropdown is-hoverable">
									<div class="dropdown-trigger">
										<button
											class="button is-light is-rounded is-outlined"
											aria-haspopup="true"
											aria-controls="dropdown-menu4">
											<span>Let's Plan!</span>
											<span class="icon is-small">
												<i class="fas fa-angle-down" aria-hidden="true"></i>
											</span>
										</button>
									</div>
									<div class="dropdown-menu" id="dropdown-menu4" role="menu">
										<div class="dropdown-content">
											<div class="dropdown-content">
												<Link href="/plan/meeting">
													<a class="dropdown-item">
														<i className="fa fa-calendar"></i>&nbsp; Schedule a meeting
													</a>
												</Link>
												<Link href="/plan/opoll">
													<a class="dropdown-item">
														<i className="fa fa-check-square-o"></i>&nbsp; Generate opinion
														poll
													</a>
												</Link>
												<Link href="/plan/apoll">
													<a class="dropdown-item">
														<i className="fa fa-bar-chart-o"></i>&nbsp; Generate anonymous
														poll
													</a>
												</Link>
												<Link href="/plan/message">
													<a class="dropdown-item">
														<i className="fa fa-comments-o"></i>&nbsp; Generate message
														board
													</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<Link href="/login">
									<a className="button is-info">
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
};
