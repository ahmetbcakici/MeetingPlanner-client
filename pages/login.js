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
							Sign in to Xoyondo
						</p>
						<div className="box" style={{ backgroundColor: '#C8E4FF' }}>
							<div className="field">
								<label className="label">Username</label>
								<div className="control has-icons-left has-icons-right">
									<input className="input" type="text" placeholder="Your username" />
									<span className="icon is-small is-left">
										<i className="fas fa-user"></i>
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
									<button className="button is-link is-fullwidth">Login</button>
								</div>
							</div>
						</div>
						<p className="has-text-centered">
							You don't have an account yet? <a href="/register">Register free.</a>
						</p>
					</div>
					<div className="column"></div>
				</div>
			</div>
			<br />
			<br />
		</div>
	</Layout>
);
