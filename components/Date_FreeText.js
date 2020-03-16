import { useState } from 'react';

export default ({deneme,post_func}) => {
	const [possibleDates, setPossibleDates] = useState('');

	return (
		<div>
			<br />
			<div className="columns">
				<div className="column"></div>
				<div className="column is-5">
					<div className="box" style={{ backgroundColor: '#C8E4FF' }}>
						<div className="field">
							<label className="label has-text-weight-normal">Enter possible dates below</label>
							<div className="field-body">
								<div className="field is-expanded">
									<div className="field has-addons">
										<p className="control is-expanded">
											<input
												className="input"
												type="text"
												value={possibleDates}
												onChange={e => {
													setPossibleDates(e.target.value);
												}}
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

						<br />

						<a className="button is-small is-link" onClick={() => {deneme(possibleDates)}}>Next</a>
					</div>
				</div>
				<div className="column"></div>
			</div>
			<br />
			<br />
		</div>
	);
};
