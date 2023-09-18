import Generator from "../islands/Generator.tsx"
import FAQ from "../islands/FAQ.tsx"
import By from "../islands/By.tsx"
import Footer from "../islands/Footer.tsx"

export default function Home() {
	return (
		<>
			<Generator />
			<FAQ />
			<By />
			<Footer />
		</>
	)
}