import React, { Component } from 'react';
import Layout from '../../components/Layout';
import axiosInstance from '../../config';
import Date_FreeText from '../../components/Date_FreeText';
import Date_Calendar from '../../components/Date_Calendar';

export default class Meeting extends Component {
	state = {
		whichPage: 0,
		whichSection: 0,
		pollTitle: '',
		additionalDescriptions: '',
		userName: '',
		emailAddress: '',
		possibleDates: '',
	};

	handleNextButton = () => {
		this.setState({ whichPage: 1 });
	};

	setWhichSection = e => {
		this.setState({ whichSection: parseInt(e.target.id) });
	};

	setPollTitle = e => {
		this.setState({ pollTitle: e.target.value });
	};

	setAdditionalDescriptions = e => {
		this.setState({ additionalDescriptions: e.target.value });
	};

	setUserName = e => {
		this.setState({ userName: e.target.value });
	};

	setEmailAddress = e => {
		this.setState({ emailAddress: e.target.value });
	};

	setPossibleDates = async pd => {
		let pdFilterSpaces = [];
		await pd.map(item => {
			if (item) pdFilterSpaces.push(item);
		});
		await this.setState({ possibleDates: pdFilterSpaces });
		this.postOperation();
	};

	postOperation = () => {
		const { pollTitle, additionalDescriptions, userName, emailAddress, possibleDates } = this.state;

		axiosInstance
			.post('api/freeone', {
				pollTitle,
				additionalDescriptions,
				userName,
				emailAddress,
				possibleDates,
			})
			.then(data => {
				console.log(data);
			});
	};

	render() {
		if (this.state.whichPage === 0) {
			return (
				<Layout>
					{/* Bar which has steps to schedule meeting */}
					<div
						className="is-fullwidth has-background-white-ter"
						style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
						<div className="columns has-text-centered">
							<div className="column"></div>
							<div className="column">General information</div>
							<div className="column">
								<i className="fa fa-lg fa-chevron-right"></i>
							</div>
							<div className="column has-text-grey-light">Choose dates and times</div>
							<div className="column">
								<i className="fa fa-lg fa-chevron-right"></i>
							</div>
							<div className="column  has-text-grey-light">Invite participants</div>
							<div className="column"></div>
						</div>
					</div>

					<div>
						<div className="has-background-white">
							<br />
							<br />
							<div className="columns">
								<div className="column"></div>
								<div className="column is-5">
									<p className="title has-text-link has-text-centered has-text-weight-normal">
										Schedule a meetings
									</p>
									<div className="box" style={{ backgroundColor: '#C8E4FF' }}>
										<div className="field">
											<label className="label has-text-weight-normal">Poll title:</label>
											<div className="control">
												<input
													className="input"
													type="text"
													value={this.state.pollTitle}
													onChange={this.setPollTitle}
												/>
											</div>
										</div>

										<div className="field">
											<label className="label has-text-weight-normal">
												Additional descriptions:
											</label>
											<div className="control has-icons-left has-icons-right">
												<textarea
													className="textarea"
													rows="3"
													value={this.state.additionalDescriptions}
													onChange={this.setAdditionalDescriptions}></textarea>
											</div>
										</div>

										<div className="field">
											<label className="label has-text-weight-normal">Your name:</label>
											<div className="control">
												<input
													className="input"
													type="text"
													value={this.state.userName}
													onChange={this.setUserName}
												/>
											</div>
										</div>

										<div className="field">
											<label className="label has-text-weight-normal">Your email address:</label>
											<div className="control">
												<input
													className="input"
													type="email"
													value={this.state.emailAddress}
													onChange={this.setEmailAddress}
												/>
											</div>
										</div>

										<span className="is-size-7 has-text-grey">
											We will send you an email with the link to your poll and the admin area.
											That's all you will receive - we hate spam too.
										</span>

										<br />
										<br />
										<div className="field">
											<div className="control">
												<button
													className="button is-link is-fullwidth"
													onClick={this.handleNextButton}>
													Next
												</button>
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
														<a href="/register">Sign up!</a>
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
				</Layout>
			);
		} else if (this.state.whichPage === 1) {
			return (
				<Layout>
					<br />
					<br />
					<p className="title has-text-link has-text-centered has-text-weight-normal">Choose your dates</p>
					<div className="columns has-text-centered">
						<div className="column"></div>
						<div className="column is-4 has-background-white-ter">
							<a className="btn" onClick={this.setWhichSection} id="0">
								calendar
							</a>
						</div>
						<div className="column is-4 has-background-white-ter">
							<a className="btn" onClick={this.setWhichSection} id="1">
								free text
							</a>
						</div>
						<div className="column"></div>
					</div>
					{this.state.whichSection === 1 ? ( // note: should be 0 as default
						<Date_Calendar />
					) : (
						<Date_FreeText getPossibleDates={this.setPossibleDates} />
					)}
				</Layout>
			);
		}
	}
}
