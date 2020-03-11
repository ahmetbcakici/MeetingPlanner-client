import { useState } from 'react';

export default ({ options }) => {
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
					{options.map(item => (
						<label className="checkbox is-block" style={{ paddingBottom: '.5rem' }}>
							&emsp;
							<input type="checkbox" />
							&nbsp;{item}
						</label>
					))}
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
