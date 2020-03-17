import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import axiosInstance from '../../config';

export default () => {
	const router = useRouter();
	const [itemDetails, setItemDetails] = useState({});

	const getPlan = async () => {
		// console.log(router.query.id);
		const doc = await axiosInstance.get('api', { params: { itemID: router.query.id } });
		setItemDetails(doc.data);
	};
	useEffect(() => {
		getPlan();
	}, []);
	return (
		<Layout>
			<div className="container">
				<br />
				<div className="columns">
					<div className="column is-1"></div>
					<div className="column">
						<div className="is-fullwidth" style={{ padding: '.5rem', backgroundColor: '#C8E4FF' }}>
							<p>
								Poll by <strong>{itemDetails.nameGenerater}</strong>
							</p>
						</div>
						<br />
						<div className="columns">
							<div className="column is-5">
								<p className="title has-text-info has-text-weight-normal">{itemDetails.boardTitle}</p>
								<p>Please indicate when you are available. Then click 'Save'.</p>
								<br />
								<p>s</p>
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

// 5e708dce790a493928aac6f0
