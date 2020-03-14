import { useState } from 'react';

export default ({ options, apoll }) => {
	const handleMoreOptions = () => {
		styleClass === 'passive' ? setStyleClass('active') : setStyleClass('passive');
	};

	const [styleClass, setStyleClass] = useState('passive');

	return (
		<div style={{ paddingBottom: '1rem' }}>
			<div className="field">
				<label
					className="label has-text-weight-normal has-text-link"
					style={{ cursor: 'pointer', userSelect: 'none' }}
					id="firstMoreOptions"
					onClick={handleMoreOptions}>
					<i className={styleClass === 'passive' ? 'fas fa-caret-right' : 'fas fa-caret-down'}></i>
					&nbsp; More options:
				</label>
			</div>

			<div>
				<div style={{ transition: '250ms' }} className={styleClass}>
					{apoll ? (
						<div>
							<div className="field">
								<label className="label has-text-weight-normal"> General subject of your polls: </label>
								<div className="control">
									<input className="input" type="text" />
								</div>
							</div>

							<div className="field">
								<label className="label has-text-weight-normal">Additional descriptions</label>
								<div className="control has-icons-left has-icons-right">
									<textarea className="textarea" rows="2"></textarea>
								</div>
							</div>

							<div>
								<label className="checkbox" style={{ paddingBottom: '.5rem' }}>
									&nbsp;
									<input type="checkbox" />
									&nbsp;Allow participants to leave comments
								</label>
								<label
									className="checkbox is-block"
									style={{ paddingBottom: '.5rem', paddingLeft: '2.3rem' }}>
									&nbsp;
									<input type="checkbox" />
									&nbsp;<span>Confidential comments: Only you (the administrator) can view the comments</span>
								</label>
							</div>
						</div>
					) : (
						options.map(item => (
							<div>
								<label className="checkbox" style={{ paddingBottom: '.5rem' }}>
									&emsp;
									<input type="checkbox" />
									&nbsp;{item}
								</label>
							</div>
						))
					)}

					{/* {options.map(item => (
						<label className="checkbox is-block" style={{ paddingBottom: '.5rem' }}>
							&emsp;
							<input type="checkbox" />
							&nbsp;{item}
						</label>
					))} */}
				</div>
			</div>

			<style jsx>{`
				.passive {
					visibility: hidden;
					opacity: 0;
					height: 0px;
				}

				.active {
					visibility: visible;
					opacity: 1;
					height: 100%;
				}
			`}</style>
		</div>
	);
};
