import { ThemeProvider } from "./components/theme-provider"

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			Car Inventory App
		</ThemeProvider>
	)
}

export default App
