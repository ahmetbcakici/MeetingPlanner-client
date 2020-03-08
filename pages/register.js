import Layout from '../components/Layout';

export default () => (
	<Layout>
		<div>
			<div className="has-background-white">
				<br />
				<div className="columns">
					<div className="column"></div>
					<div className="column is-4">
						<p className="title has-text-link has-text-centered has-text-weight-normal">
							Get started with Xoyondo
						</p>
						<p className="subtitle has-text-centered has-text-weight-normal">
							It's free and takes only 12 seconds.
						</p>

						<div className="box" style={{ backgroundColor: '#C8E4FF' }}>
							<div className="field">
								<label className="label">Your name</label>
								<div className="control has-icons-left has-icons-right">
									<input className="input" type="text" placeholder="Your name" />
									<span className="icon is-small is-left">
										<i className="fas fa-signature"></i>
									</span>
								</div>
							</div>

							<div className="field">
								<label className="label">Your email</label>
								<div className="control has-icons-left has-icons-right">
									<input className="input" type="email" placeholder="Your email" />
									<span className="icon is-small is-left">
										<i className="fas fa-envelope"></i>
									</span>
								</div>
							</div>

							<div className="field">
								<label className="label">Password</label>
								<div className="control has-icons-left has-icons-right">
									<input className="input" type="password" placeholder="Your password" />
									<span className="icon is-small is-left">
										<i className="fas fa-key"></i>
									</span>
								</div>
							</div>

							<div className="field">
								<div className="control">
									<button className="button is-link is-fullwidth">Register</button>
								</div>
							</div>
						</div>
					</div>
					<div className="column"></div>
				</div>
				<br />
				<br />

				<div className="has-background-white-ter">
					<br />
					<p className="title has-text-centered has-text-weight-normal is-size-4">
						Advantages of a free account:
					</p>
					<div className="container">
						<section className="section is-small">
							<div className="columns has-text-centered">
								<div className="column is-1"></div>
								<div className="column">
									<p className="is-size-2">
										<i className="fa fa-sitemap"></i>
									</p>
									<p className="is-size-4" style={{ color: '#FF7518' }}>
										All your polls in one place
									</p>
									<p className="is-size-6">
										Manage all of your polls from one central location. Every poll that you create
										or participate in is automatically added to your private Dashboard so that you
										can keep track of updates easily.
									</p>
								</div>
								<div className="column">
									<p className="is-size-2">
										<i className="fa fa-id-badge"></i>
									</p>
									<p className="is-size-4" style={{ color: '#FF7518' }}>
										Your personal Xoyondo page
									</p>
									<p className="is-size-6">
										Create a personal public Xoyondo page with a URL of your choice. You can publish
										one or multiple polls on this page and only need to share one link with your
										participants that is easy to remember.
									</p>
								</div>
								<div className="column is-1"></div>
							</div>
							<br />
							<div className="columns has-text-centered">
								<div className="column is-3"></div>
								<div className="column">
									<p className="is-size-2">
										<i className="fa fa-check"></i>
									</p>
									<p className="is-size-4" style={{ color: '#FF7518' }}>
										Easier handling
									</p>
									<p className="is-size-6">
										As signed in user you have access to all of your polls instantly. Furthermore
										the voting (and vote editing) process is simpler. You also can subscribe to
										updates in your polls with a single click.
									</p>
								</div>
								<div className="column is-3"></div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</Layout>
);
