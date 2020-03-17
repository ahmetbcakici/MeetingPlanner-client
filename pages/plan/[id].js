import { useRouter } from 'next/router';
import axiosInstance from '../../config';

export default () => {
	const router = useRouter();

	const getPlan = () => {
		axiosInstance.get('api', { params: { itemID: router.query.id } }).then(res => {
			console.log(res);
		});
	};

	return (
		<div>
			<h1 onClick={getPlan}>nbr</h1>
		</div>
	);
};

// 5e708dce790a493928aac6f0