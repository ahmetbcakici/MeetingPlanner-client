export default class Prices extends React.Component {
	state = {
		currency: 'USD',
	};
	render() {
        var x = this.state.currency;
		return (
			<div>
				<ul className="list-group">
					<li className="list-group-item">
						Bitcoin rate for {this.props.bpi.USD.description}:{' '}
						<span className="badge badge-primary">{this.props.bpi.USD.code}<strong>{this.props.bpi.USD.rate}</strong></span>
					</li>
				</ul>
			</div>
		);
	}
}
