import Generator from "../islands/Generator.tsx"
import FAQ from "../islands/FAQ.tsx"
import Author from "../islands/Author.tsx"
import Footer from "../islands/Footer.tsx"

export default function Home() {
	return (
		<>
			<Generator />
			<FAQ />
			<Author />
			<Footer />
		</>
	)
}