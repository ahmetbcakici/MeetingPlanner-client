import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import MoreOptions from '../../components/MoreOptions';

export default () => {
	const [styleClassFirst, setStyleClassFirst] = useState('passive');
	const [styleClassSecond, setStyleClassSecond] = useState('passive');

	const handleMoreOptions = e => {
		if (e.target.id === 'firstMoreOptions') {
			if (styleClassFirst === 'passive') setStyleClassFirst('active');
			else setStyleClassFirst('passive');
		} else {
			if (styleClassSecond === 'passive') setStyleClassSecond('active');
			else setStyleClassSecond('passive');
		}
	};

	return (
		<Layout>
			{/* Bar which has steps to generate opinion poll */}
			<div
				className="is-fullwidth has-background-white-ter"
				style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
				<div className="columns has-text-centered">
					<div className="column"></div>
					<div className="column">Generate polls</div>
					<div className="column">
						<i className="fa fa-lg fa-chevron-right"></i>
					</div>
					<div className="column">Invite participants</div>
					<div className="column"></div>
				</div>
			</div>

			<div>
				<div className="has-background-white">
					<br />
					<br />
					<div className="columns">
						<div className="column"></div>
						<div className="column is-4">
							<p className="title has-text-link has-text-centered has-text-weight-normal">
								Generate an opinion poll.
							</p>

							<div className="box" style={{ backgroundColor: '#C8E4FF' }}>
								<div className="field">
									<label className="label has-text-weight-normal"> Poll question / title: </label>
									<div className="control">
										<input className="input" type="text" />
									</div>
								</div>

								<div className="field">
									<label className="label has-text-weight-normal">Description:</label>
									<div className="control has-icons-left has-icons-right">
										<textarea className="textarea" rows="3"></textarea>
									</div>
								</div>

								<div className="field">
									<label className="label has-text-weight-normal">Poll answers</label>
									<div className="field-body">
										<div className="field is-expanded">
											<div className="field has-addons">
												<p className="control is-expanded">
													<input
														className="input"
														type="text"
													/>
												</p>

												<p className="control">
													<a className="button is-static">
														<i className="fas fa-trash-alt"></i>
													</a>
												</p>
											</div>
										</div>
									</div>
								</div>

								<MoreOptions
									options={[
										'Yes-No-Maybe poll.',
										'Anonymous opinion poll',
										'Participants can only vote for one option',
										'Display participants in alphabetical order',
									]}
								/>
							</div>
							<br />

							<p> When your poll is ready, fill in the fields below and proceed. </p>
							<div className="box" style={{ backgroundColor: '#C8E4FF' }}>
								<div className="field">
									<label className="label has-text-weight-normal"> Your name: </label>
									<div className="control">
										<input className="input" type="text" />
									</div>
								</div>

								<div className="field">
									<label className="label has-text-weight-normal"> Your email address: </label>
									<div className="control">
										<input className="input" type="text" />
									</div>
								</div>

								<span className="is-size-7 has-text-grey">
									We will send you an email with the link to your poll and the admin area. That's all
									you will receive - we hate spam too.
								</span>

								<br />
								<br />

								<MoreOptions
									options={[
										'Allow participants to leave comments',
										'Simplified editing',
										'I want to be notified by email about activities in this poll',
									]}
								/>

								<div className="field">
									<div className="control">
										<button className="button is-link is-fullwidth">Next</button>
									</div>
								</div>
							</div>

							{/* Box of tip */}
							<div className="box has-background-white-ter">
								<article className="media">
									<div className="media-content">
										<div className="content">
											<p>
												<strong>Tip: </strong> If you have multiple polls you can easily
												organize and manage them with a free Xoyondo account.{' '}
												<Link href="/register">
													<a>Sign up!</a>
												</Link>
											</p>
										</div>
									</div>
								</article>
							</div>
						</div>
						<div className="column"></div>
					</div>
				</div>
				<br />
				<br />
			</div>

			<style jsx>{`
				.passive {
					visibility: 'hidden';
					opacity: 0;
					height: 0;
				}

				.active {
					visibility: 'visible';
					opacity: 1;
					height: 120px;
				}
			`}</style>
		</Layout>
	);
};
