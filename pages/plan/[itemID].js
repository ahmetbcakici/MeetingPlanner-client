import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import axiosInstance from '../../config';

const ItemDetailsPage = () => {
	const router = useRouter();
	const { itemID } = router.query;
	const [itemDetails, setItemDetails] = useState('');

	useEffect(() => {
		getPlan();
	});

	const getPlan = async () => {
		const doc = await axiosInstance.get('api', { params: { itemID } });
		setItemDetails(doc.data);
	};

	return (
		<Layout>
			<div className="container">
				<br />
				<div className="columns">
					<div className="column is-1"></div>
					<div className="column">
						<div className="is-fullwidth" style={{ padding: '.5rem', backgroundColor: '#C8E4FF' }}>
							<p onClick={tester}>
								Poll by <strong>{itemDetails.nameGenerater}</strong>
							</p>
						</div>
						<br />
						<div className="columns">
							<div className="column is-5">
								<p className="title has-text-info has-text-weight-normal">{itemDetails.boardTitle}</p>
								<p>
									{itemDetails.description
										? itemDetails.description
										: "Please indicate when you are available. Then click 'Save'."}
								</p>
								<br />
								<table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
									<thead>
										<th style={{ border: 'none' }}></th>

										{/* Put possible dates as table headers */}
										{itemDetails.possibleDates
											? itemDetails.possibleDates.map(element => (
													<th className="has-background-grey-lighter has-text-centered">
														{element}
													</th>
											  ))
											: null}
									</thead>
									<tbody>
										<tr className="be-first">
											<td className="has-background-primary has-text-white" colSpan="2">
												Be the first to vote in this poll!
											</td>
										</tr>
										<tr style={{ backgroundColor: '#C8E4FF' }}>
											<td style={{ borderColor: 'white' }}>
												<div class="field">
													<div class="control">
														<input
															class="input is-primary"
															type="text"
															placeholder="Your name"
														/>
													</div>
												</div>
											</td>
											<td style={{ borderColor: 'white' }} className="has-text-centered">
												<label class="checkbox">
													<input type="checkbox" />
												</label>
											</td>
										</tr>
									</tbody>
								</table>
								<br />
							</div>
							<div className="column is-5"></div>
							<div className="column is-2">x</div>
						</div>
					</div>
					<div className="column is-1"></div>
				</div>
			</div>
		</Layout>
	);
};

export default ItemDetailsPage;
// 5e708dce790a493928aac6f0
