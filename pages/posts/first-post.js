import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function FirstPost() {
    return (
			<Layout>
				<Head>
					<title>First Post Title Here</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<img src="/vercel.svg" alt="Vercel Logo" className="logo" />

				<h1>First Post</h1>
				<h2>
					<Link href="/">
						<a>Back to home</a>
					</Link>
				</h2>
			</Layout>
		);
}