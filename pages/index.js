import Head from 'next/head';
import DashboardTemplate from '@components/templates/Dashboard/Dashboard';

export default function Dashboard() {
	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      		<DashboardTemplate/>
		</>
	);
}
