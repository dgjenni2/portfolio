import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"

export default function Artwork() {
	return (
		<Layout>
			<Head>
				<title>Art Gallery</title>
			</Head>
			<h1>Artwork</h1>
			<h2>
				<Link href="/">Return to Home</Link>
			</h2>
		</Layout>
	)
}
