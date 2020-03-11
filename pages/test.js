import Layout from '../components/Layout';

import MoreOptions from '../components/MoreOptions';
export default () => (
	<Layout>
		<MoreOptions options={['ahmet', 'mehmet', 'veli', 'ali', 'deli', 'x']} />
		<p>selam ben ahmet</p>
        <MoreOptions options={['yes=no','anonim']} />
	</Layout>
);
